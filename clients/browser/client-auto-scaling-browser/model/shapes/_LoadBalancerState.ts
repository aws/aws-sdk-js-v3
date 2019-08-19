import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LoadBalancerState: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    LoadBalancerName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    State: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
