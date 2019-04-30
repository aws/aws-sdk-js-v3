import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * PutFileOutput shape
 */
export interface PutFileOutput {
  /**
   * <p>The full SHA of the commit that contains this file change.</p>
   */
  commitId: string;

  /**
   * <p>The ID of the blob, which is its SHA-1 pointer.</p>
   */
  blobId: string;

  /**
   * <p>The full SHA-1 pointer of the tree information for the commit that contains this file change.</p>
   */
  treeId: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
