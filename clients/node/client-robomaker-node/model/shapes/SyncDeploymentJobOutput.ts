import { _DeploymentConfig } from "./_DeploymentConfig";
import { _DeploymentApplicationConfigs } from "./_DeploymentApplicationConfigs";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const SyncDeploymentJobOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    arn: {
      shape: {
        type: "string",
        min: 1
      }
    },
    fleet: {
      shape: {
        type: "string",
        min: 1
      }
    },
    status: {
      shape: {
        type: "string"
      }
    },
    deploymentConfig: {
      shape: _DeploymentConfig
    },
    deploymentApplicationConfigs: {
      shape: _DeploymentApplicationConfigs
    },
    failureReason: {
      shape: {
        type: "string"
      }
    },
    failureCode: {
      shape: {
        type: "string"
      }
    },
    createdAt: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
