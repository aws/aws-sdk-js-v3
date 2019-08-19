import {
  _MinimumHealthyHosts,
  _UnmarshalledMinimumHealthyHosts
} from "./_MinimumHealthyHosts";
import {
  _TrafficRoutingConfig,
  _UnmarshalledTrafficRoutingConfig
} from "./_TrafficRoutingConfig";

/**
 * <p>Information about a deployment configuration.</p>
 */
export interface _DeploymentConfigInfo {
  /**
   * <p>The deployment configuration ID.</p>
   */
  deploymentConfigId?: string;

  /**
   * <p>The deployment configuration name.</p>
   */
  deploymentConfigName?: string;

  /**
   * <p>Information about the number or percentage of minimum healthy instance.</p>
   */
  minimumHealthyHosts?: _MinimumHealthyHosts;

  /**
   * <p>The time at which the deployment configuration was created.</p>
   */
  createTime?: Date | string | number;

  /**
   * <p>The destination platform type for the deployment (<code>Lambda</code>, <code>Server</code>, or <code>ECS</code>).</p>
   */
  computePlatform?: "Server" | "Lambda" | "ECS" | string;

  /**
   * <p>The configuration that specifies how the deployment traffic is routed. Only deployments with a Lambda compute platform can specify this.</p>
   */
  trafficRoutingConfig?: _TrafficRoutingConfig;
}

export interface _UnmarshalledDeploymentConfigInfo
  extends _DeploymentConfigInfo {
  /**
   * <p>Information about the number or percentage of minimum healthy instance.</p>
   */
  minimumHealthyHosts?: _UnmarshalledMinimumHealthyHosts;

  /**
   * <p>The time at which the deployment configuration was created.</p>
   */
  createTime?: Date;

  /**
   * <p>The configuration that specifies how the deployment traffic is routed. Only deployments with a Lambda compute platform can specify this.</p>
   */
  trafficRoutingConfig?: _UnmarshalledTrafficRoutingConfig;
}
