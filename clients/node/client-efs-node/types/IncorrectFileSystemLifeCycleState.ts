import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Returned if the file system's lifecycle state is not "available".</p>
 */
export interface IncorrectFileSystemLifeCycleState
  extends __ServiceException__<_IncorrectFileSystemLifeCycleStateDetails> {
  name: "IncorrectFileSystemLifeCycleState";
}

export interface _IncorrectFileSystemLifeCycleStateDetails {
  /**
   * _ErrorCode shape
   */
  ErrorCode: string;

  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
