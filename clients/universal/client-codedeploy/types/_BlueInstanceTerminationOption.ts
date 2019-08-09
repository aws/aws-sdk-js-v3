/**
 * <p>Information about whether instances in the original environment are terminated when a blue/green deployment is successful. <code>BlueInstanceTerminationOption</code> does not apply to Lambda deployments. </p>
 */
export interface _BlueInstanceTerminationOption {
  /**
   * <p>The action to take on instances in the original environment after a successful blue/green deployment.</p> <ul> <li> <p>TERMINATE: Instances are terminated after a specified wait time.</p> </li> <li> <p>KEEP_ALIVE: Instances are left running after they are deregistered from the load balancer and removed from the deployment group.</p> </li> </ul>
   */
  action?: "TERMINATE" | "KEEP_ALIVE" | string;

  /**
   * <p>For an Amazon EC2 deployment, the number of minutes to wait after a successful blue/green deployment before terminating instances from the original environment.</p> <p> For an Amazon ECS deployment, the number of minutes before deleting the original (blue) task set. During an Amazon ECS deployment, CodeDeploy shifts traffic from the original (blue) task set to a replacement (green) task set. </p> <p> The maximum setting is 2880 minutes (2 days). </p>
   */
  terminationWaitTimeInMinutes?: number;
}

export type _UnmarshalledBlueInstanceTerminationOption = _BlueInstanceTerminationOption;
