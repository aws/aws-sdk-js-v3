import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetMergeOptionsOutput shape
 */
export interface GetMergeOptionsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The merge option or strategy used to merge the code.</p>
   */
  mergeOptions: Array<
    "FAST_FORWARD_MERGE" | "SQUASH_MERGE" | "THREE_WAY_MERGE" | string
  >;

  /**
   * <p>The commit ID of the source commit specifier that was used in the merge evaluation.</p>
   */
  sourceCommitId: string;

  /**
   * <p>The commit ID of the destination commit specifier that was used in the merge evaluation.</p>
   */
  destinationCommitId: string;

  /**
   * <p>The commit ID of the merge base.</p>
   */
  baseCommitId: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
