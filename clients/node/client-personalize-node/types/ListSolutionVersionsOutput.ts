import { _UnmarshalledSolutionVersionSummary } from "./_SolutionVersionSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListSolutionVersionsOutput shape
 */
export interface ListSolutionVersionsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of solution versions describing the version properties.</p>
   */
  solutionVersions?: Array<_UnmarshalledSolutionVersionSummary>;

  /**
   * <p>A token for getting the next set of solution versions (if they exist).</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
