import { toEndpointV1 } from "@aws-sdk/middleware-endpoint";
import { HttpRequest } from "@aws-sdk/protocol-http";
import { SignatureV4 } from "@aws-sdk/signature-v4";
import {
  AwsCredentialIdentity,
  ChecksumConstructor,
  Endpoint,
  HandlerExecutionContext,
  HashConstructor,
  InitializeHandler,
  InitializeHandlerArguments,
  InitializeHandlerOutput,
  InitializeMiddleware,
  MemoizedProvider,
  MetadataBearer,
  Pluggable,
  Provider,
  RegionInfoProvider,
  RelativeMiddlewareOptions,
  SerializeHandlerOptions,
} from "@aws-sdk/types";
import { formatUrl } from "@aws-sdk/util-format-url";

interface PreviouslyResolved {
  credentials: MemoizedProvider<AwsCredentialIdentity>;
  endpoint?: Provider<Endpoint>;
  region: Provider<string>;
  sha256: ChecksumConstructor | HashConstructor;
  signingEscapePath: boolean;
  regionInfoProvider?: RegionInfoProvider;
}

const version = "2016-11-15";

//an initialize middleware to add PresignUrl to input
export function copySnapshotPresignedUrlMiddleware(options: PreviouslyResolved): InitializeMiddleware<any, any> {
  return <Output extends MetadataBearer>(
      next: InitializeHandler<any, Output>,
      context: HandlerExecutionContext
    ): InitializeHandler<any, Output> =>
    async (args: InitializeHandlerArguments<any>): Promise<InitializeHandlerOutput<Output>> => {
      const { input } = args;
      if (!input.PresignedUrl) {
        const region = await options.region();
        const resolvedEndpoint =
          typeof options.endpoint === "function" ? await options.endpoint() : toEndpointV1(context.endpointV2!);

        if (typeof options.regionInfoProvider === "function") {
          const regionInfo = await options.regionInfoProvider(input.SourceRegion);
          resolvedEndpoint.hostname = regionInfo?.hostname || `ec2.${input.SourceRegion}.amazonaws.com`;
        } else {
          resolvedEndpoint.hostname = `ec2.${input.SourceRegion}.amazonaws.com`;
        }

        const request = new HttpRequest({
          ...resolvedEndpoint,
          protocol: "https",
          headers: {
            host: resolvedEndpoint.hostname,
          },
          query: {
            Action: "CopySnapshot",
            Version: version,
            SourceRegion: input.SourceRegion,
            SourceSnapshotId: input.SourceSnapshotId,
            DestinationRegion: region,
          },
        });
        const signer = new SignatureV4({
          credentials: options.credentials,
          region: input.SourceRegion,
          service: "ec2",
          sha256: options.sha256,
          uriEscapePath: options.signingEscapePath,
        });
        const presignedRequest = await signer.presign(request, {
          expiresIn: 3600,
        });

        args = {
          ...args,
          input: {
            ...args.input,
            DestinationRegion: region,
            PresignedUrl: formatUrl(presignedRequest),
          },
        };
      }

      return next(args);
    };
}

export const copySnapshotPresignedUrlMiddlewareOptions: SerializeHandlerOptions & RelativeMiddlewareOptions = {
  step: "serialize",
  tags: ["CROSS_REGION_PRESIGNED_URL"],
  name: "crossRegionPresignedUrlMiddleware",
  override: true,
  relation: "after",
  toMiddleware: "endpointV2Middleware",
};

export const getCopySnapshotPresignedUrlPlugin = (config: PreviouslyResolved): Pluggable<any, any> => ({
  applyToStack: (clientStack) => {
    clientStack.add(copySnapshotPresignedUrlMiddleware(config), copySnapshotPresignedUrlMiddlewareOptions);
  },
});
