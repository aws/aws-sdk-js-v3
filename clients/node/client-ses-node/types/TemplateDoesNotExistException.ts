import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Indicates that the Template object you specified does not exist in your Amazon SES account.</p>
 */
export interface TemplateDoesNotExistException
  extends __ServiceException__<_TemplateDoesNotExistExceptionDetails> {
  name: "TemplateDoesNotExistException";
}

export interface _TemplateDoesNotExistExceptionDetails {
  /**
   * _TemplateName shape
   */
  TemplateName?: string;
}
