import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Returned if the specified <code>FileSystemId</code> value doesn't exist in the requester's AWS account.</p>
 */
export interface FileSystemNotFound
  extends __ServiceException__<_FileSystemNotFoundDetails> {
  name: "FileSystemNotFound";
}

export interface _FileSystemNotFoundDetails {
  /**
   * _ErrorCode shape
   */
  ErrorCode: string;

  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
