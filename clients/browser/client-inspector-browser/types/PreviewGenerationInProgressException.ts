import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request is rejected. The specified assessment template is currently generating an exclusions preview.</p>
 */
export interface PreviewGenerationInProgressException
  extends __ServiceException__<_PreviewGenerationInProgressExceptionDetails> {
  name: "PreviewGenerationInProgressException";
}

export interface _PreviewGenerationInProgressExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  message: string;
}
