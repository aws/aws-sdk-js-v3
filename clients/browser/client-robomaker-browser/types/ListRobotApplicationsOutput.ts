import { _UnmarshalledRobotApplicationSummary } from "./_RobotApplicationSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListRobotApplicationsOutput shape
 */
export interface ListRobotApplicationsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of robot application summaries that meet the criteria of the request.</p>
   */
  robotApplicationSummaries?: Array<_UnmarshalledRobotApplicationSummary>;

  /**
   * <p>The <code>nextToken</code> value to include in a future <code>ListRobotApplications</code> request. When the results of a <code>ListRobotApplications</code> request exceed <code>maxResults</code>, this value can be used to retrieve the next page of results. This value is <code>null</code> when there are no more results to return. </p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
