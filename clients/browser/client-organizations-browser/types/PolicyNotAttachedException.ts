import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The policy isn't attached to the specified target in the specified root.</p>
 */
export interface PolicyNotAttachedException
  extends __ServiceException__<_PolicyNotAttachedExceptionDetails> {
  name: "PolicyNotAttachedException";
}

export interface _PolicyNotAttachedExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  Message?: string;
}
