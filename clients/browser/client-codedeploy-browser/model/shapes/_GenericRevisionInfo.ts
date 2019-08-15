import { _DeploymentGroupsList } from "./_DeploymentGroupsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _GenericRevisionInfo: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    description: {
      shape: {
        type: "string"
      }
    },
    deploymentGroups: {
      shape: _DeploymentGroupsList
    },
    firstUsedTime: {
      shape: {
        type: "timestamp"
      }
    },
    lastUsedTime: {
      shape: {
        type: "timestamp"
      }
    },
    registerTime: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
