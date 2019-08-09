/**
 * <p>Information about a deployment configuration.</p>
 */
export interface _DeploymentConfig {
  /**
   * <p>The percentage of robots receiving the deployment at the same time.</p>
   */
  concurrentDeploymentPercentage?: number;

  /**
   * <p>The percentage of deployments that need to fail before stopping deployment.</p>
   */
  failureThresholdPercentage?: number;
}

export type _UnmarshalledDeploymentConfig = _DeploymentConfig;
