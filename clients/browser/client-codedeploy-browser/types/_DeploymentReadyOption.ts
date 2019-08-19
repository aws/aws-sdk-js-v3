/**
 * <p>Information about how traffic is rerouted to instances in a replacement environment in a blue/green deployment.</p>
 */
export interface _DeploymentReadyOption {
  /**
   * <p>Information about when to reroute traffic from an original environment to a replacement environment in a blue/green deployment.</p> <ul> <li> <p>CONTINUE_DEPLOYMENT: Register new instances with the load balancer immediately after the new application revision is installed on the instances in the replacement environment.</p> </li> <li> <p>STOP_DEPLOYMENT: Do not register new instances with a load balancer unless traffic rerouting is started using <a>ContinueDeployment</a>. If traffic rerouting is not started before the end of the specified wait period, the deployment status is changed to Stopped.</p> </li> </ul>
   */
  actionOnTimeout?: "CONTINUE_DEPLOYMENT" | "STOP_DEPLOYMENT" | string;

  /**
   * <p>The number of minutes to wait before the status of a blue/green deployment is changed to Stopped if rerouting is not started manually. Applies only to the STOP_DEPLOYMENT option for actionOnTimeout</p>
   */
  waitTimeInMinutes?: number;
}

export type _UnmarshalledDeploymentReadyOption = _DeploymentReadyOption;
