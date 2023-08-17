import { formatUrl } from "@aws-sdk/util-format-url";
import { getEndpointFromInstructions, toEndpointV1 } from "@smithy/middleware-endpoint";
import { HttpRequest } from "@smithy/protocol-http";
import { SignatureV4 } from "@smithy/signature-v4";
import { extendedEncodeURIComponent } from "@smithy/smithy-client";
import {
  AwsCredentialIdentity,
  ChecksumConstructor,
  Endpoint,
  HandlerExecutionContext,
  HashConstructor,
  MemoizedProvider,
  MetadataBearer,
  Pluggable,
  Provider,
  RegionInfoProvider,
  RelativeMiddlewareOptions,
  SerializeHandler,
  SerializeHandlerArguments,
  SerializeHandlerOptions,
  SerializeHandlerOutput,
  SerializeMiddleware,
} from "@smithy/types";

interface PreviouslyResolved {
  credentials: MemoizedProvider<AwsCredentialIdentity>;
  endpoint?: Provider<Endpoint>;
  region: Provider<string>;
  sha256: ChecksumConstructor | HashConstructor;
  signingEscapePath: boolean;
  regionInfoProvider?: RegionInfoProvider;
}

const version = "2016-11-15";

// a serialize middleware to add PresignUrl to input
export function copySnapshotPresignedUrlMiddleware(options: PreviouslyResolved): SerializeMiddleware<any, any> {
  return <Output extends MetadataBearer>(
      next: SerializeHandler<any, Output>,
      context: HandlerExecutionContext
    ): SerializeHandler<any, Output> =>
    async (args: SerializeHandlerArguments<any>): Promise<SerializeHandlerOutput<Output>> => {
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

        const requestToSign = new HttpRequest({
          ...resolvedEndpoint,
          protocol: "https",
          headers: {
            host: resolvedEndpoint.hostname,
          },
          query: {
            ...input,
            Action: "CopySnapshot",
            Version: version,
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
        const presignedRequest = await signer.presign(requestToSign, {
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

        // we also double-check the work of the serialzier here
        // because this middleware may be placed after the regular serialzier.
        if (HttpRequest.isInstance(args.request)) {
          const { request } = args;
          if (!(request.body ?? "").includes("DestinationRegion=")) {
            request.body += `&DestinationRegion=${destinationRegion}`;
          }
          if (!(request.body ?? "").includes("PresignedUrl=")) {
            request.body += `&PresignedUrl=${extendedEncodeURIComponent(args.input.PresignedUrl)}`;
          }
        }
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
