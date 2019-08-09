import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LastDeploymentInfo: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    deploymentId: {
      shape: {
        type: "string"
      }
    },
    status: {
      shape: {
        type: "string"
      }
    },
    endTime: {
      shape: {
        type: "timestamp"
      }
    },
    createTime: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
