import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Failed to add the AWS Config rule because the account already contains the maximum number of 150 rules. Consider deleting any deactivated rules before you add new rules.</p>
 */
export interface MaxNumberOfConfigRulesExceededException
  extends __ServiceException__<
    _MaxNumberOfConfigRulesExceededExceptionDetails
  > {
  name: "MaxNumberOfConfigRulesExceededException";
}

export interface _MaxNumberOfConfigRulesExceededExceptionDetails {}
