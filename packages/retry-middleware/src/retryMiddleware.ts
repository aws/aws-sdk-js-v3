import {
  FinalizeHandler,
  FinalizeHandlerArguments,
  MetadataBearer,
  FinalizeHandlerOutput,
  SdkError,
  Injectable
} from "@aws-sdk/types";
import { RetryConfig } from "./configurations";

export function retryMiddleware(options: RetryConfig.Resolved) {
  return <Output extends MetadataBearer = MetadataBearer>(
    next: FinalizeHandler<any, Output>
  ): FinalizeHandler<any, Output> =>
    async function retry(
      args: FinalizeHandlerArguments<any>
    ): Promise<FinalizeHandlerOutput<Output>> {
      let retries = 0;
      let totalDelay = 0;
      while (true) {
        try {
          const { response, output } = await next(args);
          output.$metadata.retries = retries;
          output.$metadata.totalRetryDelay = totalDelay;

          return { response, output };
        } catch (err) {
          if (options.retryStrategy.shouldRetry(err as SdkError, retries)) {
            const delay = options.retryStrategy.computeDelayBeforeNextRetry(
              err,
              retries
            );
            retries++;
            totalDelay += delay;

            await new Promise(resolve => setTimeout(resolve, delay));
            continue;
          }

          if (!err.$metadata) {
            err.$metadata = {};
          }

          err.$metadata.retries = retries;
          err.$metadata.totalRetryDelay = totalDelay;
          throw err;
        }
      }
    };
}

export const retryPlugin: Injectable = (options: RetryConfig.Resolved) => [
  {
    middleware: retryMiddleware(options),
    step: "finalizeRequest",
    tags: { RETRY: true }
  }
];
