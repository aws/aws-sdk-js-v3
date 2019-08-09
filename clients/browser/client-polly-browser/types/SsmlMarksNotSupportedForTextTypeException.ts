import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>SSML speech marks are not supported for plain text-type input.</p>
 */
export interface SsmlMarksNotSupportedForTextTypeException
  extends __ServiceException__<
    _SsmlMarksNotSupportedForTextTypeExceptionDetails
  > {
  name: "SsmlMarksNotSupportedForTextTypeException";
}

export interface _SsmlMarksNotSupportedForTextTypeExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  message?: string;
}
