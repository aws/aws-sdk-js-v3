import { _MinimumHealthyHosts } from "./_MinimumHealthyHosts";
import { _TrafficRoutingConfig } from "./_TrafficRoutingConfig";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the input of a CreateDeploymentConfig operation.</p>
 */
export interface CreateDeploymentConfigInput {
  /**
   * <p>The name of the deployment configuration to create.</p>
   */
  deploymentConfigName: string;

  /**
   * <p>The minimum number of healthy instances that should be available at any time during the deployment. There are two parameters expected in the input: type and value.</p> <p>The type parameter takes either of the following values:</p> <ul> <li> <p>HOST_COUNT: The value parameter represents the minimum number of healthy instances as an absolute value.</p> </li> <li> <p>FLEET_PERCENT: The value parameter represents the minimum number of healthy instances as a percentage of the total number of instances in the deployment. If you specify FLEET_PERCENT, at the start of the deployment, AWS CodeDeploy converts the percentage to the equivalent number of instance and rounds up fractional instances.</p> </li> </ul> <p>The value parameter takes an integer.</p> <p>For example, to set a minimum of 95% healthy instance, specify a type of FLEET_PERCENT and a value of 95.</p>
   */
  minimumHealthyHosts?: _MinimumHealthyHosts;

  /**
   * <p>The configuration that specifies how the deployment traffic is routed.</p>
   */
  trafficRoutingConfig?: _TrafficRoutingConfig;

  /**
   * <p>The destination platform type for the deployment (<code>Lambda</code>, <code>Server</code>, or <code>ECS</code>).</p>
   */
  computePlatform?: "Server" | "Lambda" | "ECS" | string;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
