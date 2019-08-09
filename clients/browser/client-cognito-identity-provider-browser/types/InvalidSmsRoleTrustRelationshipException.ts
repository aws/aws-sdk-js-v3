import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>This exception is thrown when the trust relationship is invalid for the role provided for SMS configuration. This can happen if you do not trust <b>cognito-idp.amazonaws.com</b> or the external ID provided in the role does not match what is provided in the SMS configuration for the user pool.</p>
 */
export interface InvalidSmsRoleTrustRelationshipException
  extends __ServiceException__<
    _InvalidSmsRoleTrustRelationshipExceptionDetails
  > {
  name: "InvalidSmsRoleTrustRelationshipException";
}

export interface _InvalidSmsRoleTrustRelationshipExceptionDetails {
  /**
   * <p>The message returned when the role trust relationship for the SMS message is invalid.</p>
   */
  message?: string;
}
