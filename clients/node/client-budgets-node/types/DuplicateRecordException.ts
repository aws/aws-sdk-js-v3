import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The budget name already exists. Budget names must be unique within an account.</p>
 */
export interface DuplicateRecordException
  extends __ServiceException__<_DuplicateRecordExceptionDetails> {
  name: "DuplicateRecordException";
}

export interface _DuplicateRecordExceptionDetails {
  /**
   * <p>The error message the exception carries.</p>
   */
  Message?: string;
}
