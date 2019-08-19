import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The S3 bucket does not exist.</p>
 */
export interface InvalidOutputFolder
  extends __ServiceException__<_InvalidOutputFolderDetails> {
  name: "InvalidOutputFolder";
}

export interface _InvalidOutputFolderDetails {}
