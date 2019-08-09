import { Structure as _Structure_ } from "@aws-sdk/types";

export const RemoveAutoScalingPolicyInput: _Structure_ = {
  type: "structure",
  required: ["ClusterId", "InstanceGroupId"],
  members: {
    ClusterId: {
      shape: {
        type: "string"
      }
    },
    InstanceGroupId: {
      shape: {
        type: "string"
      }
    }
  }
};
