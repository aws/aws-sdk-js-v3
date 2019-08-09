import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The format of an Amazon Resource Name (ARN) is not valid.</p>
 */
export interface MalformedArnException
  extends __ServiceException__<_MalformedArnExceptionDetails> {
  name: "MalformedArnException";
}

export interface _MalformedArnExceptionDetails {
  /**
   * _String shape
   */
  message: string;
}
