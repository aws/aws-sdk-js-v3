import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The case creation limit for the account has been exceeded.</p>
 */
export interface CaseCreationLimitExceeded
  extends __ServiceException__<_CaseCreationLimitExceededDetails> {
  name: "CaseCreationLimitExceeded";
}

export interface _CaseCreationLimitExceededDetails {
  /**
   * <p>An error message that indicates that you have exceeded the number of cases you can have open.</p>
   */
  message?: string;
}
