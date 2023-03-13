import { getEndpointFromInstructions, toEndpointV1 } from "@aws-sdk/middleware-endpoint";
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
        const destinationRegion = await options.region();

        // using the source region as an override,
        // use the V2 endpoint resolution to get the source region's endpoint.
        const endpoint = await getEndpointFromInstructions(
          input,
          {
            /**
             * Replication of {@link CopySnapshotCommand} in EC2.
             * Not imported due to circular dependency.
             */
            getEndpointParameterInstructions() {
              return {
                UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
                Endpoint: { type: "builtInParams", name: "endpoint" },
                Region: { type: "builtInParams", name: "region" },
                UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
              };
            },
          },
          {
            ...options,
            region: input.SourceRegion,
          }
        );

        // TODO: it doesn't make sense to accept any custom endpoint,
        // TODO: because it would override both the source endpoint and the target endpoint.
        const resolvedEndpoint =
          typeof options.endpoint === "function" ? await options.endpoint() : toEndpointV1(endpoint);

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
            DestinationRegion: destinationRegion,
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
            DestinationRegion: destinationRegion,
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
