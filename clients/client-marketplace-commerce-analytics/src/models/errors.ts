// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import {
  MarketplaceCommerceAnalyticsServiceException as __BaseException,
} from "./MarketplaceCommerceAnalyticsServiceException";

/**
 * This exception is thrown when an internal service error occurs.
 * @public
 */
export class MarketplaceCommerceAnalyticsException extends __BaseException {
  readonly name = "MarketplaceCommerceAnalyticsException" as const;
  readonly $fault = "server" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MarketplaceCommerceAnalyticsException, __BaseException>) {
    super({
      name: "MarketplaceCommerceAnalyticsException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, MarketplaceCommerceAnalyticsException.prototype);
  }
}
