import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified authentication type is in an invalid format.</p>
 */
export interface InvalidWebhookAuthenticationParametersException
  extends __ServiceException__<
    _InvalidWebhookAuthenticationParametersExceptionDetails
  > {
  name: "InvalidWebhookAuthenticationParametersException";
}

export interface _InvalidWebhookAuthenticationParametersExceptionDetails {}
