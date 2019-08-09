import { _DeploymentConfig } from "./_DeploymentConfig";
import { _DeploymentApplicationConfigs } from "./_DeploymentApplicationConfigs";
import { _TagMap } from "./_TagMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateDeploymentJobInput: _Structure_ = {
  type: "structure",
  required: ["clientRequestToken", "fleet", "deploymentApplicationConfigs"],
  members: {
    deploymentConfig: {
      shape: _DeploymentConfig
    },
    clientRequestToken: {
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
    deploymentApplicationConfigs: {
      shape: _DeploymentApplicationConfigs
    },
    tags: {
      shape: _TagMap
    }
  }
};
