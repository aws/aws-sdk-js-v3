import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Deployment: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CreatedAt: {
      shape: {
        type: "string"
      }
    },
    DeploymentArn: {
      shape: {
        type: "string"
      }
    },
    DeploymentId: {
      shape: {
        type: "string"
      }
    },
    DeploymentType: {
      shape: {
        type: "string"
      }
    },
    GroupArn: {
      shape: {
        type: "string"
      }
    }
  }
};
