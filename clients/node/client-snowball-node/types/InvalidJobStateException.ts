import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The action can't be performed because the job's current state doesn't allow that action to be performed.</p>
 */
export interface InvalidJobStateException
  extends __ServiceException__<_InvalidJobStateExceptionDetails> {
  name: "InvalidJobStateException";
}

export interface _InvalidJobStateExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;
}
