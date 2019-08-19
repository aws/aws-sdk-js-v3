import { _UnmarshalledProjectSummary } from "./_ProjectSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListProjectsOutput shape
 */
export interface ListProjectsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of projects.</p>
   */
  projects: Array<_UnmarshalledProjectSummary>;

  /**
   * <p>The continuation token to use when requesting the next set of results, if there are more results to be returned.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
