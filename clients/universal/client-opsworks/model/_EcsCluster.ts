import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EcsCluster: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    EcsClusterArn: {
      shape: {
        type: "string"
      }
    },
    EcsClusterName: {
      shape: {
        type: "string"
      }
    },
    StackId: {
      shape: {
        type: "string"
      }
    },
    RegisteredAt: {
      shape: {
        type: "string"
      }
    }
  }
};
