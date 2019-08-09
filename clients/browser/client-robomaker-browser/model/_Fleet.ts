import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Fleet: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    arn: {
      shape: {
        type: "string",
        min: 1
      }
    },
    createdAt: {
      shape: {
        type: "timestamp"
      }
    },
    lastDeploymentStatus: {
      shape: {
        type: "string"
      }
    },
    lastDeploymentJob: {
      shape: {
        type: "string",
        min: 1
      }
    },
    lastDeploymentTime: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
