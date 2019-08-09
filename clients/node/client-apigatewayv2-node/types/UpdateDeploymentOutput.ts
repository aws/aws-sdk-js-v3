import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateDeploymentOutput shape
 */
export interface UpdateDeploymentOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The date and time when the Deployment resource was created.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>The identifier for the deployment.</p>
   */
  DeploymentId?: string;

  /**
   * <p>The status of the deployment: PENDING, FAILED, or
   *  SUCCEEDED.</p>
   */
  DeploymentStatus?: "PENDING" | "FAILED" | "DEPLOYED" | string;

  /**
   * <p>May contain additional feedback on the status of an API deployment.</p>
   */
  DeploymentStatusMessage?: string;

  /**
   * <p>The description for the deployment.</p>
   */
  Description?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
