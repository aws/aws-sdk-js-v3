/**
 * Information about a deployment.
 */
export interface _Deployment {
  /**
   * The time, in milliseconds since the epoch, when the deployment was created.
   */
  CreatedAt?: string;

  /**
   * The ARN of the deployment.
   */
  DeploymentArn?: string;

  /**
   * The ID of the deployment.
   */
  DeploymentId?: string;

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
   * The ARN of the group for this deployment.
   */
  GroupArn?: string;
}

export type _UnmarshalledDeployment = _Deployment;
