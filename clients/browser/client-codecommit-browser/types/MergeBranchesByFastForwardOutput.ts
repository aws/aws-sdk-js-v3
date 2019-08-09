import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * MergeBranchesByFastForwardOutput shape
 */
export interface MergeBranchesByFastForwardOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The commit ID of the merge in the destination or target branch.</p>
   */
  commitId?: string;

  /**
   * <p>The tree ID of the merge in the destination or target branch.</p>
   */
  treeId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
