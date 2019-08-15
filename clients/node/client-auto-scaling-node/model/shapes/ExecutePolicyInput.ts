import { Structure as _Structure_ } from "@aws-sdk/types";

export const ExecutePolicyInput: _Structure_ = {
  type: "structure",
  required: ["PolicyName"],
  members: {
    AutoScalingGroupName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    PolicyName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    HonorCooldown: {
      shape: {
        type: "boolean"
      }
    },
    MetricValue: {
      shape: {
        type: "float"
      }
    },
    BreachThreshold: {
      shape: {
        type: "float"
      }
    }
  }
};
