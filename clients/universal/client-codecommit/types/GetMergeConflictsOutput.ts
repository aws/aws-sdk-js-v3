import { _UnmarshalledConflictMetadata } from "./_ConflictMetadata";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetMergeConflictsOutput shape
 */
export interface GetMergeConflictsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A Boolean value that indicates whether the code is mergeable by the specified merge option.</p>
   */
  mergeable: boolean;

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
   * <p>A list of metadata for any conflicting files. If the specified merge strategy is FAST_FORWARD_MERGE, this list will always be empty.</p>
   */
  conflictMetadataList: Array<_UnmarshalledConflictMetadata>;

  /**
   * <p>An enumeration token that can be used in a request to return the next batch of the results.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
