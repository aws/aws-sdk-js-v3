/**
 * <p>Information about the type of deployment, either in-place or blue/green, you want to run and whether to route deployment traffic behind a load balancer.</p>
 */
export interface _DeploymentStyle {
  /**
   * <p>Indicates whether to run an in-place deployment or a blue/green deployment.</p>
   */
  deploymentType?: "IN_PLACE" | "BLUE_GREEN" | string;

  /**
   * <p>Indicates whether to route deployment traffic behind a load balancer.</p>
   */
  deploymentOption?:
    | "WITH_TRAFFIC_CONTROL"
    | "WITHOUT_TRAFFIC_CONTROL"
    | string;
}

export type _UnmarshalledDeploymentStyle = _DeploymentStyle;
