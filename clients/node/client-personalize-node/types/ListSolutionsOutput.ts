import { _UnmarshalledSolutionSummary } from "./_SolutionSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListSolutionsOutput shape
 */
export interface ListSolutionsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of the current solutions.</p>
   */
  solutions?: Array<_UnmarshalledSolutionSummary>;

  /**
   * <p>A token for getting the next set of solutions (if they exist).</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
