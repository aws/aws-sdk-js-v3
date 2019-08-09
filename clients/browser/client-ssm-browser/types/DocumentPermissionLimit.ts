import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The document cannot be shared with more AWS user accounts. You can share a document with a maximum of 20 accounts. You can publicly share up to five documents. If you need to increase this limit, contact AWS Support.</p>
 */
export interface DocumentPermissionLimit
  extends __ServiceException__<_DocumentPermissionLimitDetails> {
  name: "DocumentPermissionLimit";
}

export interface _DocumentPermissionLimitDetails {
  /**
   * _String shape
   */
  Message?: string;
}
