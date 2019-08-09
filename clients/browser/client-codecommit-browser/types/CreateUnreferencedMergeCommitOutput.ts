import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateUnreferencedMergeCommitOutput shape
 */
export interface CreateUnreferencedMergeCommitOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The full commit ID of the commit that contains your merge results.</p>
   */
  commitId?: string;

  /**
   * <p>The full SHA-1 pointer of the tree information for the commit that contains the merge results.</p>
   */
  treeId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
