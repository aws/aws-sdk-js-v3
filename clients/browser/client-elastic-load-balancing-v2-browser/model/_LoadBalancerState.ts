import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LoadBalancerState: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Code: {
      shape: {
        type: "string"
      }
    },
    Reason: {
      shape: {
        type: "string"
      }
    }
  }
};
