import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The position is not valid. Make sure that the line number exists in the version of the file you want to comment on.</p>
 */
export interface InvalidFilePositionException
  extends __ServiceException__<_InvalidFilePositionExceptionDetails> {
  name: "InvalidFilePositionException";
}

export interface _InvalidFilePositionExceptionDetails {}
