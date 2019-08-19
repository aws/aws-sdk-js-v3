import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Indicates that one or more of the replacement values you provided is invalid. This error may occur when the TemplateData object contains invalid JSON.</p>
 */
export interface InvalidRenderingParameterException
  extends __ServiceException__<_InvalidRenderingParameterExceptionDetails> {
  name: "InvalidRenderingParameterException";
}

export interface _InvalidRenderingParameterExceptionDetails {
  /**
   * _TemplateName shape
   */
  TemplateName?: string;
}
