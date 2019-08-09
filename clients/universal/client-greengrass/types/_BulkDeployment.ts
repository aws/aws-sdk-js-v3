/**
 * Information about a bulk deployment. You cannot start a new bulk deployment while another one is still running or in a non-terminal state.
 */
export interface _BulkDeployment {
  /**
   * The ARN of the bulk deployment.
   */
  BulkDeploymentArn?: string;

  /**
   * The ID of the bulk deployment.
   */
  BulkDeploymentId?: string;

  /**
   * The time, in ISO format, when the deployment was created.
   */
  CreatedAt?: string;
}

export type _UnmarshalledBulkDeployment = _BulkDeployment;
