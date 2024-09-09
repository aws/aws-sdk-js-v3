import {
  HandlerExecutionContext,
  MetadataBearer,
  RelativeMiddlewareOptions,
  SerializeHandler,
  SerializeHandlerArguments,
  SerializeHandlerOutput,
  SerializeMiddleware,
} from "@smithy/types";

interface PreviouslyResolved {
  bucketEndpoint?: boolean;
}

/**
 * @internal
 */
export function bucketEndpointMiddleware(options: PreviouslyResolved): SerializeMiddleware<any, any> {
  return <Output extends MetadataBearer>(
      next: SerializeHandler<any, Output>,
      context: HandlerExecutionContext
    ): SerializeHandler<any, Output> =>
    async (args: SerializeHandlerArguments<any>): Promise<SerializeHandlerOutput<Output>> => {
      if (options.bucketEndpoint) {
        const endpoint = context.endpointV2;
        if (endpoint) {
          const bucket: string | undefined = args.input.Bucket;
          if (typeof bucket === "string") {
            try {
              const bucketEndpointUrl = new URL(bucket);
              context.endpointV2 = {
                ...endpoint,
                url: bucketEndpointUrl,
              };
            } catch (e) {
              const warning = `@aws-sdk/middleware-sdk-s3: bucketEndpoint=true was set but Bucket=${bucket} could not be parsed as URL.`;
              if (context.logger?.constructor?.name === "NoOpLogger") {
                console.warn(warning);
              } else {
                context.logger?.warn?.(warning);
              }
              throw e;
            }
          }
        }
      }
      return next(args);
    };
}

/**
 * @internal
 */
export const bucketEndpointMiddlewareOptions: RelativeMiddlewareOptions = {
  name: "bucketEndpointMiddleware",
  override: true,
  relation: "after",
  toMiddleware: "endpointV2Middleware",
};
