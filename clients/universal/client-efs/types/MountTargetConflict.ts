import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Returned if the mount target would violate one of the specified restrictions based on the file system's existing mount targets.</p>
 */
export interface MountTargetConflict
  extends __ServiceException__<_MountTargetConflictDetails> {
  name: "MountTargetConflict";
}

export interface _MountTargetConflictDetails {
  /**
   * _ErrorCode shape
   */
  ErrorCode: string;

  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
