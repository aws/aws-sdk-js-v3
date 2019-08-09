/**
 * <p>Information about the deployment status of the instances in the deployment.</p>
 */
export interface _DeploymentOverview {
  /**
   * <p>The number of instances in the deployment in a pending state.</p>
   */
  Pending?: number;

  /**
   * <p>The number of instances in which the deployment is in progress.</p>
   */
  InProgress?: number;

  /**
   * <p>The number of instances in the deployment to which revisions have been successfully deployed.</p>
   */
  Succeeded?: number;

  /**
   * <p>The number of instances in the deployment in a failed state.</p>
   */
  Failed?: number;

  /**
   * <p>The number of instances in the deployment in a skipped state.</p>
   */
  Skipped?: number;

  /**
   * <p>The number of instances in a replacement environment ready to receive traffic in a blue/green deployment.</p>
   */
  Ready?: number;
}

export type _UnmarshalledDeploymentOverview = _DeploymentOverview;
