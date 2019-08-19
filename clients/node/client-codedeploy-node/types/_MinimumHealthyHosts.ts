/**
 * <p>Information about minimum healthy instance.</p>
 */
export interface _MinimumHealthyHosts {
  /**
   * <p>The minimum healthy instance value.</p>
   */
  value?: number;

  /**
   * <p>The minimum healthy instance type:</p> <ul> <li> <p>HOST_COUNT: The minimum number of healthy instance as an absolute value.</p> </li> <li> <p>FLEET_PERCENT: The minimum number of healthy instance as a percentage of the total number of instance in the deployment.</p> </li> </ul> <p>In an example of nine instance, if a HOST_COUNT of six is specified, deploy to up to three instances at a time. The deployment is successful if six or more instances are deployed to successfully. Otherwise, the deployment fails. If a FLEET_PERCENT of 40 is specified, deploy to up to five instance at a time. The deployment is successful if four or more instance are deployed to successfully. Otherwise, the deployment fails.</p> <note> <p>In a call to the <code>GetDeploymentConfig</code>, CodeDeployDefault.OneAtATime returns a minimum healthy instance type of MOST_CONCURRENCY and a value of 1. This means a deployment to only one instance at a time. (You cannot set the type to MOST_CONCURRENCY, only to HOST_COUNT or FLEET_PERCENT.) In addition, with CodeDeployDefault.OneAtATime, AWS CodeDeploy attempts to ensure that all instances but one are kept in a healthy state during the deployment. Although this allows one instance at a time to be taken offline for a new deployment, it also means that if the deployment to the last instance fails, the overall deployment is still successful.</p> </note> <p>For more information, see <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide/instances-health.html">AWS CodeDeploy Instance Health</a> in the <i>AWS CodeDeploy User Guide</i>.</p>
   */
  type?: "HOST_COUNT" | "FLEET_PERCENT" | string;
}

export type _UnmarshalledMinimumHealthyHosts = _MinimumHealthyHosts;
