import { _UnmarshalledConflict } from "./_Conflict";
import { _UnmarshalledBatchDescribeMergeConflictsError } from "./_BatchDescribeMergeConflictsError";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * BatchDescribeMergeConflictsOutput shape
 */
export interface BatchDescribeMergeConflictsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of conflicts for each file, including the conflict metadata and the hunks of the differences between the files.</p>
   */
  conflicts: Array<_UnmarshalledConflict>;

  /**
   * <p>An enumeration token that can be used in a request to return the next batch of the results.</p>
   */
  nextToken?: string;

  /**
   * <p>A list of any errors returned while describing the merge conflicts for each file.</p>
   */
  errors?: Array<_UnmarshalledBatchDescribeMergeConflictsError>;

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
