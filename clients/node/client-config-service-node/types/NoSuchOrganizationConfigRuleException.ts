import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * NoSuchOrganizationConfigRuleException shape
 */
export interface NoSuchOrganizationConfigRuleException
  extends __ServiceException__<_NoSuchOrganizationConfigRuleExceptionDetails> {
  name: "NoSuchOrganizationConfigRuleException";
}

export interface _NoSuchOrganizationConfigRuleExceptionDetails {}
