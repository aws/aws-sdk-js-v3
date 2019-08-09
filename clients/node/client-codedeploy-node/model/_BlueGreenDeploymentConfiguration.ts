import { _BlueInstanceTerminationOption } from "./_BlueInstanceTerminationOption";
import { _DeploymentReadyOption } from "./_DeploymentReadyOption";
import { _GreenFleetProvisioningOption } from "./_GreenFleetProvisioningOption";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BlueGreenDeploymentConfiguration: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    terminateBlueInstancesOnDeploymentSuccess: {
      shape: _BlueInstanceTerminationOption
    },
    deploymentReadyOption: {
      shape: _DeploymentReadyOption
    },
    greenFleetProvisioningOption: {
      shape: _GreenFleetProvisioningOption
    }
  }
};
