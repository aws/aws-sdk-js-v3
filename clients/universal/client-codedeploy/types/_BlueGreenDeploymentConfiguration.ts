import {
  _BlueInstanceTerminationOption,
  _UnmarshalledBlueInstanceTerminationOption
} from "./_BlueInstanceTerminationOption";
import {
  _DeploymentReadyOption,
  _UnmarshalledDeploymentReadyOption
} from "./_DeploymentReadyOption";
import {
  _GreenFleetProvisioningOption,
  _UnmarshalledGreenFleetProvisioningOption
} from "./_GreenFleetProvisioningOption";

/**
 * <p>Information about blue/green deployment options for a deployment group.</p>
 */
export interface _BlueGreenDeploymentConfiguration {
  /**
   * <p>Information about whether to terminate instances in the original fleet during a blue/green deployment.</p>
   */
  terminateBlueInstancesOnDeploymentSuccess?: _BlueInstanceTerminationOption;

  /**
   * <p>Information about the action to take when newly provisioned instances are ready to receive traffic in a blue/green deployment.</p>
   */
  deploymentReadyOption?: _DeploymentReadyOption;

  /**
   * <p>Information about how instances are provisioned for a replacement environment in a blue/green deployment.</p>
   */
  greenFleetProvisioningOption?: _GreenFleetProvisioningOption;
}

export interface _UnmarshalledBlueGreenDeploymentConfiguration
  extends _BlueGreenDeploymentConfiguration {
  /**
   * <p>Information about whether to terminate instances in the original fleet during a blue/green deployment.</p>
   */
  terminateBlueInstancesOnDeploymentSuccess?: _UnmarshalledBlueInstanceTerminationOption;

  /**
   * <p>Information about the action to take when newly provisioned instances are ready to receive traffic in a blue/green deployment.</p>
   */
  deploymentReadyOption?: _UnmarshalledDeploymentReadyOption;

  /**
   * <p>Information about how instances are provisioned for a replacement environment in a blue/green deployment.</p>
   */
  greenFleetProvisioningOption?: _UnmarshalledGreenFleetProvisioningOption;
}
