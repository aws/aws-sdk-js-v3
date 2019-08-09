import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified change set can't be used to update the stack. For example, the change set status might be <code>CREATE_IN_PROGRESS</code>, or the stack status might be <code>UPDATE_IN_PROGRESS</code>.</p>
 */
export interface InvalidChangeSetStatusException
  extends __ServiceException__<_InvalidChangeSetStatusExceptionDetails> {
  name: "InvalidChangeSetStatusException";
}

export interface _InvalidChangeSetStatusExceptionDetails {}
