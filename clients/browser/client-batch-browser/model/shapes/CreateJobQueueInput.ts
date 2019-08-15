import { _ComputeEnvironmentOrders } from "./_ComputeEnvironmentOrders";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateJobQueueInput: _Structure_ = {
  type: "structure",
  required: ["jobQueueName", "priority", "computeEnvironmentOrder"],
  members: {
    jobQueueName: {
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
