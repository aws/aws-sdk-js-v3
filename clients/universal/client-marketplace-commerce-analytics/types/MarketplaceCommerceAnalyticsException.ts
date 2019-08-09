import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * This exception is thrown when an internal service error occurs.
 */
export interface MarketplaceCommerceAnalyticsException
  extends __ServiceException__<_MarketplaceCommerceAnalyticsExceptionDetails> {
  name: "MarketplaceCommerceAnalyticsException";
}

export interface _MarketplaceCommerceAnalyticsExceptionDetails {
  /**
   * This message describes details of the error.
   */
  message?: string;
}
