import { _UnmarshalledConflictMetadata } from "./_ConflictMetadata";
import { _UnmarshalledMergeHunk } from "./_MergeHunk";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeMergeConflictsOutput shape
 */
export interface DescribeMergeConflictsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Contains metadata about the conflicts found in the merge.</p>
   */
  conflictMetadata: _UnmarshalledConflictMetadata;

  /**
   * <p>A list of merge hunks of the differences between the files or lines.</p>
   */
  mergeHunks: Array<_UnmarshalledMergeHunk>;

  /**
   * <p>An enumeration token that can be used in a request to return the next batch of the results.</p>
   */
  nextToken?: string;

  /**
   * <p>The commit ID of the destination commit specifier that was used in the merge evaluation.</p>
   */
  destinationCommitId: string;

  /**
   * <p>The commit ID of the source commit specifier that was used in the merge evaluation.</p>
   */
  sourceCommitId: string;

  /**
   * <p>The commit ID of the merge base.</p>
   */
  baseCommitId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
