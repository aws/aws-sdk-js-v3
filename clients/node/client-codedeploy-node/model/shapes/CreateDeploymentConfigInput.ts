import { _MinimumHealthyHosts } from "./_MinimumHealthyHosts";
import { _TrafficRoutingConfig } from "./_TrafficRoutingConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateDeploymentConfigInput: _Structure_ = {
  type: "structure",
  required: ["deploymentConfigName"],
  members: {
    deploymentConfigName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    minimumHealthyHosts: {
      shape: _MinimumHealthyHosts
    },
    trafficRoutingConfig: {
      shape: _TrafficRoutingConfig
    },
    computePlatform: {
      shape: {
        type: "string"
      }
    }
  }
};
