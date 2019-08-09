import { _UnmarshalledBulkDeploymentMetrics } from "./_BulkDeploymentMetrics";
import { _UnmarshalledErrorDetail } from "./_ErrorDetail";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetBulkDeploymentStatusOutput shape
 */
export interface GetBulkDeploymentStatusOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * Relevant metrics on input records processed during bulk deployment.
   */
  BulkDeploymentMetrics?: _UnmarshalledBulkDeploymentMetrics;

  /**
   * The status of the bulk deployment.
   */
  BulkDeploymentStatus?:
    | "Initializing"
    | "Running"
    | "Completed"
    | "Stopping"
    | "Stopped"
    | "Failed"
    | string;

  /**
   * The time, in ISO format, when the deployment was created.
   */
  CreatedAt?: string;

  /**
   * Error details
   */
  ErrorDetails?: Array<_UnmarshalledErrorDetail>;

  /**
   * Error message
   */
  ErrorMessage?: string;

  /**
   * Tag(s) attached to the resource arn.
   */
  tags?: { [key: string]: string };

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
