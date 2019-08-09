import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>AWS Organizations couldn't perform the operation because your organization hasn't finished initializing. This can take up to an hour. Try again later. If after one hour you continue to receive this error, contact <a href="https://console.aws.amazon.com/support/home#/">AWS Support</a>.</p>
 */
export interface FinalizingOrganizationException
  extends __ServiceException__<_FinalizingOrganizationExceptionDetails> {
  name: "FinalizingOrganizationException";
}

export interface _FinalizingOrganizationExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  Message?: string;
}
