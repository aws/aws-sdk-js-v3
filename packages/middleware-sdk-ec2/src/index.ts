import { HttpRequest } from "@aws-sdk/protocol-http";
import { SignatureV4 } from "@aws-sdk/signature-v4";
import {
  Credentials,
  Endpoint,
  HashConstructor,
  InitializeHandler,
  InitializeHandlerArguments,
  InitializeHandlerOptions,
  InitializeHandlerOutput,
  InitializeMiddleware,
  MetadataBearer,
  Pluggable,
  Provider,
} from "@aws-sdk/types";
import { formatUrl } from "@aws-sdk/util-format-url";
import { escapeUri } from "@aws-sdk/util-uri-escape";

interface PreviouslyResolved {
  credentials: Provider<Credentials>;
  endpoint: Provider<Endpoint>;
  region: Provider<string>;
  sha256: HashConstructor;
  signingEscapePath: boolean;
}

const version = "2016-11-15";

//an initialize middleware to add PresignUrl to input
export function copySnapshotPresignedUrlMiddleware(options: PreviouslyResolved): InitializeMiddleware<any, any> {
  return <Output extends MetadataBearer>(
    next: InitializeHandler<any, Output>
  ): InitializeHandler<any, Output> => async (
    args: InitializeHandlerArguments<any>
  ): Promise<InitializeHandlerOutput<Output>> => {
    const { input } = args;
    if (!input.PresignedUrl) {
      const region = await options.region();
      const resolvedEndpoint = await options.endpoint();
      resolvedEndpoint.hostname = `ec2.${input.SourceRegion}.amazonaws.com`;
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
          PresignedUrl: escapeUri(formatUrl(presignedRequest)),
        },
      };
    }

    return next(args);
  };
}

export const copySnapshotPresignedUrlMiddlewareOptions: InitializeHandlerOptions = {
  step: "initialize",
  tags: ["CROSS_REGION_PRESIGNED_URL"],
  name: "crossRegionPresignedUrlMiddleware",
};

export const getCopySnapshotPresignedUrlPlugin = (config: PreviouslyResolved): Pluggable<any, any> => ({
  applyToStack: (clientStack) => {
    clientStack.add(copySnapshotPresignedUrlMiddleware(config), copySnapshotPresignedUrlMiddlewareOptions);
  },
});
