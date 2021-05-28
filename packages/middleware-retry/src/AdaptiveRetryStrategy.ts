import { Provider } from "@aws-sdk/types";

import { RETRY_MODES } from "./configurations";
import { DefaultRateLimiter } from "./DefaultRateLimiter";
import { StandardRetryStrategy, StandardRetryStrategyOptions } from "./StandardRetryStrategy";
import { RateLimiter } from "./types";

/**
 * Strategy options to be passed to AdaptiveRetryStrategy
 */
export interface AdaptiveRetryStrategyOptions extends StandardRetryStrategyOptions {
  rateLimiter?: RateLimiter;
}

export class AdaptiveRetryStrategy extends StandardRetryStrategy {
  private rateLimiter: RateLimiter;

  constructor(maxAttemptsProvider: Provider<number>, options?: AdaptiveRetryStrategyOptions) {
    const { rateLimiter, ...superOptions } = options ?? {};
    super(maxAttemptsProvider, superOptions);
    this.rateLimiter = rateLimiter ?? new DefaultRateLimiter();
    this.mode = RETRY_MODES.adaptive;
  }

  protected async beforeRequest() {
    await super.beforeRequest();
    await this.rateLimiter.getSendToken();
  }

  protected afterRequest(response: any) {
    super.afterRequest(response);
    this.rateLimiter.updateClientSendingRate(response);
  }
}
