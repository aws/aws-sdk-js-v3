import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Returned if the file system you are trying to create already exists, with the creation token you provided.</p>
 */
export interface FileSystemAlreadyExists
  extends __ServiceException__<_FileSystemAlreadyExistsDetails> {
  name: "FileSystemAlreadyExists";
}

export interface _FileSystemAlreadyExistsDetails {
  /**
   * _ErrorCode shape
   */
  ErrorCode: string;

  /**
   * _ErrorMessage shape
   */
  Message?: string;

  /**
   * _FileSystemId shape
   */
  FileSystemId: string;
}
