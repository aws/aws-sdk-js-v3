import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Indicates that an attempt to make an attachment was invalid. For example, attaching two nodes with a link type that is not applicable to the nodes or attempting to apply a schema to a directory a second time.</p>
 */
export interface InvalidAttachmentException
  extends __ServiceException__<_InvalidAttachmentExceptionDetails> {
  name: "InvalidAttachmentException";
}

export interface _InvalidAttachmentExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  Message?: string;
}
