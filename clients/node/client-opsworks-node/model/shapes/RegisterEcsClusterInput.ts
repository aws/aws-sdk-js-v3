import { Structure as _Structure_ } from "@aws-sdk/types";

export const RegisterEcsClusterInput: _Structure_ = {
  type: "structure",
  required: ["EcsClusterArn", "StackId"],
  members: {
    EcsClusterArn: {
      shape: {
        type: "string"
      }
    },
    StackId: {
      shape: {
        type: "string"
      }
    }
  }
};
