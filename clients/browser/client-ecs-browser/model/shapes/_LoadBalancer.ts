import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LoadBalancer: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    targetGroupArn: {
      shape: {
        type: "string"
      }
    },
    loadBalancerName: {
      shape: {
        type: "string"
      }
    },
    containerName: {
      shape: {
        type: "string"
      }
    },
    containerPort: {
      shape: {
        type: "integer"
      }
    }
  }
};
