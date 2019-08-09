import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Speech marks are not supported for the <code>OutputFormat</code> selected. Speech marks are only available for content in <code>json</code> format.</p>
 */
export interface MarksNotSupportedForFormatException
  extends __ServiceException__<_MarksNotSupportedForFormatExceptionDetails> {
  name: "MarksNotSupportedForFormatException";
}

export interface _MarksNotSupportedForFormatExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  message?: string;
}
