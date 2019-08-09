import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Deployment: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    VersionLabel: {
      shape: {
        type: "string"
      }
    },
    DeploymentId: {
      shape: {
        type: "integer"
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    DeploymentTime: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
