import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Occurs when any invalid operations are performed on an object that is not a node, such as calling <code>ListObjectChildren</code> for a leaf node object.</p>
 */
export interface NotNodeException
  extends __ServiceException__<_NotNodeExceptionDetails> {
  name: "NotNodeException";
}

export interface _NotNodeExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  Message?: string;
}
