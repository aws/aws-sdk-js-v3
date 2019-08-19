import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Returned if the AWS account has already created the maximum number of file systems allowed per account.</p>
 */
export interface FileSystemLimitExceeded
  extends __ServiceException__<_FileSystemLimitExceededDetails> {
  name: "FileSystemLimitExceeded";
}

export interface _FileSystemLimitExceededDetails {
  /**
   * _ErrorCode shape
   */
  ErrorCode: string;

  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
