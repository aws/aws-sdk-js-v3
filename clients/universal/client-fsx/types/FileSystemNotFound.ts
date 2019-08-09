import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>No Amazon FSx file systems were found based upon supplied parameters.</p>
 */
export interface FileSystemNotFound
  extends __ServiceException__<_FileSystemNotFoundDetails> {
  name: "FileSystemNotFound";
}

export interface _FileSystemNotFoundDetails {
  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;
}
