import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Indicates that one or more of the replacement values for the specified template was not specified. Ensure that the TemplateData object contains references to all of the replacement tags in the specified template.</p>
 */
export interface MissingRenderingAttributeException
  extends __ServiceException__<_MissingRenderingAttributeExceptionDetails> {
  name: "MissingRenderingAttributeException";
}

export interface _MissingRenderingAttributeExceptionDetails {
  /**
   * _TemplateName shape
   */
  TemplateName?: string;
}
