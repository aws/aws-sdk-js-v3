import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified resource tags are invalid.</p>
 */
export interface InvalidTagsException
  extends __ServiceException__<_InvalidTagsExceptionDetails> {
  name: "InvalidTagsException";
}

export interface _InvalidTagsExceptionDetails {
  /**
   * _Message shape
   */
  message?: string;
}
