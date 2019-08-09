import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * MaxNumberOfOrganizationConfigRulesExceededException shape
 */
export interface MaxNumberOfOrganizationConfigRulesExceededException
  extends __ServiceException__<
    _MaxNumberOfOrganizationConfigRulesExceededExceptionDetails
  > {
  name: "MaxNumberOfOrganizationConfigRulesExceededException";
}

export interface _MaxNumberOfOrganizationConfigRulesExceededExceptionDetails {}
