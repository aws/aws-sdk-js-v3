import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeregisterEcsClusterInput: _Structure_ = {
  type: "structure",
  required: ["EcsClusterArn"],
  members: {
    EcsClusterArn: {
      shape: {
        type: "string"
      }
    }
  }
};
