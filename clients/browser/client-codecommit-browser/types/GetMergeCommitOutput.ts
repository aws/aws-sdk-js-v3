import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetMergeCommitOutput shape
 */
export interface GetMergeCommitOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The commit ID of the source commit specifier that was used in the merge evaluation.</p>
   */
  sourceCommitId?: string;

  /**
   * <p>The commit ID of the destination commit specifier that was used in the merge evaluation.</p>
   */
  destinationCommitId?: string;

  /**
   * <p>The commit ID of the merge base.</p>
   */
  baseCommitId?: string;

  /**
   * <p>The commit ID for the merge commit created when the source branch was merged into the destination branch. If the fast-forward merge strategy was used, no merge commit exists.</p>
   */
  mergedCommitId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
