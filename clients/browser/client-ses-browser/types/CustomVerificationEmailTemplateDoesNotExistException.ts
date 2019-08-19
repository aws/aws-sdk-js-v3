import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Indicates that a custom verification email template with the name you specified does not exist.</p>
 */
export interface CustomVerificationEmailTemplateDoesNotExistException
  extends __ServiceException__<
    _CustomVerificationEmailTemplateDoesNotExistExceptionDetails
  > {
  name: "CustomVerificationEmailTemplateDoesNotExistException";
}

export interface _CustomVerificationEmailTemplateDoesNotExistExceptionDetails {
  /**
   * <p>Indicates that the provided custom verification email template does not exist.</p>
   */
  CustomVerificationEmailTemplateName?: string;
}
