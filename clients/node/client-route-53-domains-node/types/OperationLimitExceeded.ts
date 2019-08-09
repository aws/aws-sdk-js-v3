import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The number of operations or jobs running exceeded the allowed threshold for the account.</p>
 */
export interface OperationLimitExceeded
  extends __ServiceException__<_OperationLimitExceededDetails> {
  name: "OperationLimitExceeded";
}

export interface _OperationLimitExceededDetails {
  /**
   * <p>The number of operations or jobs running exceeded the allowed threshold for the account.</p>
   */
  message?: string;
}
