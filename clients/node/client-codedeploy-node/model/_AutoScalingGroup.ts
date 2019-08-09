import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AutoScalingGroup: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    name: {
      shape: {
        type: "string"
      }
    },
    hook: {
      shape: {
        type: "string"
      }
    }
  }
};
