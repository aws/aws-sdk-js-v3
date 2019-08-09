import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified merge option is not valid for this operation. Not all merge strategies are supported for all operations.</p>
 */
export interface InvalidMergeOptionException
  extends __ServiceException__<_InvalidMergeOptionExceptionDetails> {
  name: "InvalidMergeOptionException";
}

export interface _InvalidMergeOptionExceptionDetails {}
