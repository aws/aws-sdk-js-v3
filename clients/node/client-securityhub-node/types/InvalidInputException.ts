import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request was rejected because you supplied an invalid or out-of-range value for an input parameter.</p>
 */
export interface InvalidInputException
  extends __ServiceException__<_InvalidInputExceptionDetails> {
  name: "InvalidInputException";
}

export interface _InvalidInputExceptionDetails {
  /**
   * _NonEmptyString shape
   */
  Message?: string;

  /**
   * _NonEmptyString shape
   */
  Code?: string;
}
