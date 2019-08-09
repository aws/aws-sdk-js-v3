import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The permission type is not supported. <i>Share</i> is the only supported permission type.</p>
 */
export interface InvalidPermissionType
  extends __ServiceException__<_InvalidPermissionTypeDetails> {
  name: "InvalidPermissionType";
}

export interface _InvalidPermissionTypeDetails {
  /**
   * _String shape
   */
  Message?: string;
}
