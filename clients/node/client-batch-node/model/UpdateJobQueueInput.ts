import { _ComputeEnvironmentOrders } from "./_ComputeEnvironmentOrders";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateJobQueueInput: _Structure_ = {
  type: "structure",
  required: ["jobQueue"],
  members: {
    jobQueue: {
      shape: {
        type: "string"
      }
    },
    state: {
      shape: {
        type: "string"
      }
    },
    priority: {
      shape: {
        type: "integer"
      }
    },
    computeEnvironmentOrder: {
      shape: _ComputeEnvironmentOrders
    }
  }
};
