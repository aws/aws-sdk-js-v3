import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Returned if the mount target is not in the correct state for the operation.</p>
 */
export interface IncorrectMountTargetState
  extends __ServiceException__<_IncorrectMountTargetStateDetails> {
  name: "IncorrectMountTargetState";
}

export interface _IncorrectMountTargetStateDetails {
  /**
   * _ErrorCode shape
   */
  ErrorCode: string;

  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
