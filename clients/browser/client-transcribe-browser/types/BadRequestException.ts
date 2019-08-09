import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Your request didn't pass one or more validation tests. For example, if the transcription you're trying to delete doesn't exist or if it is in a non-terminal state (for example, it's "in progress"). See the exception <code>Message</code> field for more information.</p>
 */
export interface BadRequestException
  extends __ServiceException__<_BadRequestExceptionDetails> {
  name: "BadRequestException";
}

export interface _BadRequestExceptionDetails {
  /**
   * _FailureReason shape
   */
  Message?: string;
}
