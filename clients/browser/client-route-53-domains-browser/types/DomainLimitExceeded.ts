import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The number of domains has exceeded the allowed threshold for the account.</p>
 */
export interface DomainLimitExceeded
  extends __ServiceException__<_DomainLimitExceededDetails> {
  name: "DomainLimitExceeded";
}

export interface _DomainLimitExceededDetails {
  /**
   * <p>The number of domains has exceeded the allowed threshold for the account.</p>
   */
  message?: string;
}
