import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeApplicationStateOutput shape
 */
export interface DescribeApplicationStateOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Status of the application - Not Started, In-Progress, Complete.</p>
   */
  ApplicationStatus?: "NOT_STARTED" | "IN_PROGRESS" | "COMPLETED" | string;

  /**
   * <p>The timestamp when the application status was last updated.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
