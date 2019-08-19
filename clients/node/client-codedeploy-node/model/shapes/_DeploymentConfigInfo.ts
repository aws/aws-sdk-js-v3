import { _MinimumHealthyHosts } from "./_MinimumHealthyHosts";
import { _TrafficRoutingConfig } from "./_TrafficRoutingConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DeploymentConfigInfo: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    deploymentConfigId: {
      shape: {
        type: "string"
      }
    },
    deploymentConfigName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    minimumHealthyHosts: {
      shape: _MinimumHealthyHosts
    },
    createTime: {
      shape: {
        type: "timestamp"
      }
    },
    computePlatform: {
      shape: {
        type: "string"
      }
    },
    trafficRoutingConfig: {
      shape: _TrafficRoutingConfig
    }
  }
};
