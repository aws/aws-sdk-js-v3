import { _UnmarshalledProjectSummary } from "./_ProjectSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p> Result structure used for requests to list projects in AWS Mobile Hub. </p>
 */
export interface ListProjectsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p> List of projects. </p>
   */
  projects?: Array<_UnmarshalledProjectSummary>;

  /**
   * <p> Pagination token. Set to null to start listing records from start. If non-null pagination token is returned in a result, then pass its value in here in another request to list more entries. </p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
