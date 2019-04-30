import {
  DEFAULT_RETRY_DELAY_BASE,
  THROTTLING_RETRY_DELAY_BASE
} from "./constants";
import { defaultDelayDecider } from "./delayDecider";
import { defaultRetryDecider } from "./retryDecider";
import { isThrottlingError } from "@aws-sdk/service-error-classification";
import {
  DelayDecider,
  FinalizeHandler,
  FinalizeHandlerArguments,
  MetadataBearer,
  RetryDecider
} from "@aws-sdk/types";

export function retryMiddleware(
  maxRetries: number,
  retryDecider: RetryDecider = defaultRetryDecider(),
  delayDecider: DelayDecider = defaultDelayDecider
) {
  return <Output extends MetadataBearer = MetadataBearer>(
    next: FinalizeHandler<any, Output, any>
  ): FinalizeHandler<any, Output, any> =>
    async function retry(
      args: FinalizeHandlerArguments<any, any>
    ): Promise<Output> {
      let retries = 0;
      let totalDelay = 0;
      while (true) {
        try {
          const result = await next(args);
          result.$metadata.retries = retries;
          result.$metadata.totalRetryDelay = totalDelay;

          return result;
        } catch (err) {
          if (retries < maxRetries && retryDecider(err)) {
            const delay = delayDecider(
              isThrottlingError(err)
                ? THROTTLING_RETRY_DELAY_BASE
                : DEFAULT_RETRY_DELAY_BASE,
              retries++
            );
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
