import { _ErrorDetail, _UnmarshalledErrorDetail } from "./_ErrorDetail";

/**
 * Information about an individual group deployment in a bulk deployment operation.
 */
export interface _BulkDeploymentResult {
  /**
   * The time, in ISO format, when the deployment was created.
   */
  CreatedAt?: string;

  /**
   * The ARN of the group deployment.
   */
  DeploymentArn?: string;

  /**
   * The ID of the group deployment.
   */
  DeploymentId?: string;

  /**
   * The current status of the group deployment: ''InProgress'', ''Building'', ''Success'', or ''Failure''.
   */
  DeploymentStatus?: string;

  /**
   * The type of the deployment.
   */
  DeploymentType?:
    | "NewDeployment"
    | "Redeployment"
    | "ResetDeployment"
    | "ForceResetDeployment"
    | string;

  /**
   * Details about the error.
   */
  ErrorDetails?: Array<_ErrorDetail> | Iterable<_ErrorDetail>;

  /**
   * The error message for a failed deployment
   */
  ErrorMessage?: string;

  /**
   * The ARN of the Greengrass group.
   */
  GroupArn?: string;
}

export interface _UnmarshalledBulkDeploymentResult
  extends _BulkDeploymentResult {
  /**
   * Details about the error.
   */
  ErrorDetails?: Array<_UnmarshalledErrorDetail>;
}
