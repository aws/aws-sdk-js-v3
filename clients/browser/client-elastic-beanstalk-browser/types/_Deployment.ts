/**
 * <p>Information about an application version deployment.</p>
 */
export interface _Deployment {
  /**
   * <p>The version label of the application version in the deployment.</p>
   */
  VersionLabel?: string;

  /**
   * <p>The ID of the deployment. This number increases by one each time that you deploy source code or change instance configuration settings.</p>
   */
  DeploymentId?: number;

  /**
   * <p>The status of the deployment:</p> <ul> <li> <p> <code>In Progress</code> : The deployment is in progress.</p> </li> <li> <p> <code>Deployed</code> : The deployment succeeded.</p> </li> <li> <p> <code>Failed</code> : The deployment failed.</p> </li> </ul>
   */
  Status?: string;

  /**
   * <p>For in-progress deployments, the time that the deployment started.</p> <p>For completed deployments, the time that the deployment ended.</p>
   */
  DeploymentTime?: Date | string | number;
}

export interface _UnmarshalledDeployment extends _Deployment {
  /**
   * <p>For in-progress deployments, the time that the deployment started.</p> <p>For completed deployments, the time that the deployment ended.</p>
   */
  DeploymentTime?: Date;
}
