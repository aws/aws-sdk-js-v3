import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Returned if a file system has mount targets.</p>
 */
export interface FileSystemInUse
  extends __ServiceException__<_FileSystemInUseDetails> {
  name: "FileSystemInUse";
}

export interface _FileSystemInUseDetails {
  /**
   * _ErrorCode shape
   */
  ErrorCode: string;

  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
