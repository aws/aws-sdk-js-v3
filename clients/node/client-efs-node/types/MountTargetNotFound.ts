import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Returned if there is no mount target with the specified ID found in the caller's account.</p>
 */
export interface MountTargetNotFound
  extends __ServiceException__<_MountTargetNotFoundDetails> {
  name: "MountTargetNotFound";
}

export interface _MountTargetNotFoundDetails {
  /**
   * _ErrorCode shape
   */
  ErrorCode: string;

  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
