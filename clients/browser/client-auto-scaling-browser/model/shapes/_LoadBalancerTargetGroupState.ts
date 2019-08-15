import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LoadBalancerTargetGroupState: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    LoadBalancerTargetGroupARN: {
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
