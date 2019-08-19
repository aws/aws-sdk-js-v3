import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Indicates that the template that you specified could not be rendered. This issue may occur when a template refers to a partial that does not exist.</p>
 */
export interface InvalidTemplateException
  extends __ServiceException__<_InvalidTemplateExceptionDetails> {
  name: "InvalidTemplateException";
}

export interface _InvalidTemplateExceptionDetails {
  /**
   * _TemplateName shape
   */
  TemplateName?: string;
}
