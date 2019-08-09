import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Indicates that a custom verification email template with the name you specified already exists.</p>
 */
export interface CustomVerificationEmailTemplateAlreadyExistsException
  extends __ServiceException__<
    _CustomVerificationEmailTemplateAlreadyExistsExceptionDetails
  > {
  name: "CustomVerificationEmailTemplateAlreadyExistsException";
}

export interface _CustomVerificationEmailTemplateAlreadyExistsExceptionDetails {
  /**
   * <p>Indicates that the provided custom verification email template with the specified template name already exists.</p>
   */
  CustomVerificationEmailTemplateName?: string;
}
