import { _DeploymentApplicationConfigs } from "./_DeploymentApplicationConfigs";
import { _DeploymentConfig } from "./_DeploymentConfig";
import { _TagMap } from "./_TagMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateDeploymentJobOutput: _Structure_ = {
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
    },
    deploymentConfig: {
      shape: _DeploymentConfig
    },
    tags: {
      shape: _TagMap
    }
  }
};
