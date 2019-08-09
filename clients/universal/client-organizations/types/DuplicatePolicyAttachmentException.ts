import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The selected policy is already attached to the specified target.</p>
 */
export interface DuplicatePolicyAttachmentException
  extends __ServiceException__<_DuplicatePolicyAttachmentExceptionDetails> {
  name: "DuplicatePolicyAttachmentException";
}

export interface _DuplicatePolicyAttachmentExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  Message?: string;
}
