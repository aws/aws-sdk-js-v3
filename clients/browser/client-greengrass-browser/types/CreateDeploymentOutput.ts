import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateDeploymentOutput shape
 */
export interface CreateDeploymentOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * The ARN of the deployment.
   */
  DeploymentArn?: string;

  /**
   * The ID of the deployment.
   */
  DeploymentId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
