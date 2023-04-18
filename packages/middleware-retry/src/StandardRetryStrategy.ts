import { HttpRequest, HttpResponse } from "@aws-sdk/protocol-http";
import { isThrottlingError } from "@aws-sdk/service-error-classification";
import { SdkError } from "@aws-sdk/types";
import { FinalizeHandler, FinalizeHandlerArguments, MetadataBearer, Provider, RetryStrategy } from "@aws-sdk/types";
import {
  DEFAULT_MAX_ATTEMPTS,
  DEFAULT_RETRY_DELAY_BASE,
  INITIAL_RETRY_TOKENS,
  INVOCATION_ID_HEADER,
  REQUEST_HEADER,
  RETRY_MODES,
  THROTTLING_RETRY_DELAY_BASE,
} from "@aws-sdk/util-retry";
import { v4 } from "uuid";

import { getDefaultRetryQuota } from "./defaultRetryQuota";
import { defaultDelayDecider } from "./delayDecider";
import { defaultRetryDecider } from "./retryDecider";
import { DelayDecider, RetryDecider, RetryQuota } from "./types";
import { asSdkError } from "./util";

/**
 * Strategy options to be passed to StandardRetryStrategy
 */
export interface StandardRetryStrategyOptions {
  retryDecider?: RetryDecider;
  delayDecider?: DelayDecider;
  retryQuota?: RetryQuota;
}

/**
 * @deprecated use StandardRetryStrategy from @aws-sdk/util-retry
 */
export class StandardRetryStrategy implements RetryStrategy {
  private retryDecider: RetryDecider;
  private delayDecider: DelayDecider;
  private retryQuota: RetryQuota;
  public mode: string = RETRY_MODES.STANDARD;

  constructor(private readonly maxAttemptsProvider: Provider<number>, options?: StandardRetryStrategyOptions) {
    this.retryDecider = options?.retryDecider ?? defaultRetryDecider;
    this.delayDecider = options?.delayDecider ?? defaultDelayDecider;
    this.retryQuota = options?.retryQuota ?? getDefaultRetryQuota(INITIAL_RETRY_TOKENS);
  }

  private shouldRetry(error: SdkError, attempts: number, maxAttempts: number) {
    return attempts < maxAttempts && this.retryDecider(error) && this.retryQuota.hasRetryTokens(error);
  }

  private async getMaxAttempts() {
    let maxAttempts: number;
    try {
      maxAttempts = await this.maxAttemptsProvider();
    } catch (error) {
      maxAttempts = DEFAULT_MAX_ATTEMPTS;
    }
    return maxAttempts;
  }

  async retry<Input extends object, Ouput extends MetadataBearer>(
    next: FinalizeHandler<Input, Ouput>,
    args: FinalizeHandlerArguments<Input>,
    options?: {
      beforeRequest: Function;
      afterRequest: Function;
    }
  ) {
    let retryTokenAmount;
    let attempts = 0;
    let totalDelay = 0;

    const maxAttempts = await this.getMaxAttempts();

    const { request } = args;
    if (HttpRequest.isInstance(request)) {
      request.headers[INVOCATION_ID_HEADER] = v4();
    }

    while (true) {
      try {
        if (HttpRequest.isInstance(request)) {
          request.headers[REQUEST_HEADER] = `attempt=${attempts + 1}; max=${maxAttempts}`;
        }

        if (options?.beforeRequest) {
          await options.beforeRequest();
        }
        const { response, output } = await next(args);
        if (options?.afterRequest) {
          options.afterRequest(response);
        }

        this.retryQuota.releaseRetryTokens(retryTokenAmount);
        output.$metadata.attempts = attempts + 1;
        output.$metadata.totalRetryDelay = totalDelay;

        return { response, output };
      } catch (e) {
        const err = asSdkError(e);
        attempts++;
        if (this.shouldRetry(err as SdkError, attempts, maxAttempts)) {
          retryTokenAmount = this.retryQuota.retrieveRetryTokens(err);
          const delayFromDecider = this.delayDecider(
            isThrottlingError(err) ? THROTTLING_RETRY_DELAY_BASE : DEFAULT_RETRY_DELAY_BASE,
            attempts
          );

          const delayFromResponse = getDelayFromRetryAfterHeader(err.$response);
          const delay = Math.max(delayFromResponse || 0, delayFromDecider);

          totalDelay += delay;

          await new Promise((resolve) => setTimeout(resolve, delay));
          continue;
        }

        if (!err.$metadata) {
          err.$metadata = {};
        }

        err.$metadata.attempts = attempts;
        err.$metadata.totalRetryDelay = totalDelay;
        throw err;
      }
    }
  }
}

/**
 * Returns number of milliseconds to wait based on "Retry-After" header value.
 */
const getDelayFromRetryAfterHeader = (response: unknown): number | undefined => {
  if (!HttpResponse.isInstance(response)) return;

  const retryAfterHeaderName = Object.keys(response.headers).find((key) => key.toLowerCase() === "retry-after");
  if (!retryAfterHeaderName) return;
  const retryAfter = response.headers[retryAfterHeaderName];

  const retryAfterSeconds = Number(retryAfter);
  if (!Number.isNaN(retryAfterSeconds)) return retryAfterSeconds * 1000;

  const retryAfterDate = new Date(retryAfter);
  return retryAfterDate.getTime() - Date.now();
};
