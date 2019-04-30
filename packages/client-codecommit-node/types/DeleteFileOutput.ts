import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DeleteFileOutput shape
 */
export interface DeleteFileOutput {
  /**
   * <p>The full commit ID of the commit that contains the change that deletes the file.</p>
   */
  commitId: string;

  /**
   * <p>The blob ID removed from the tree as part of deleting the file.</p>
   */
  blobId: string;

  /**
   * <p>The full SHA-1 pointer of the tree information for the commit that contains the delete file change.</p>
   */
  treeId: string;

  /**
   * <p>The fully-qualified path to the file that will be deleted, including the full name and extension of that file.</p>
   */
  filePath: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
