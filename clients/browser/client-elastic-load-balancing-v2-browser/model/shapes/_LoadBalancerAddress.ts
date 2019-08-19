import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LoadBalancerAddress: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    IpAddress: {
      shape: {
        type: "string"
      }
    },
    AllocationId: {
      shape: {
        type: "string"
      }
    }
  }
};
