import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The user name is not valid because it has exceeded the character limit for author names. </p>
 */
export interface NameLengthExceededException
  extends __ServiceException__<_NameLengthExceededExceptionDetails> {
  name: "NameLengthExceededException";
}

export interface _NameLengthExceededExceptionDetails {}
