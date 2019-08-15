import { _ComputeEnvironmentOrders } from "./_ComputeEnvironmentOrders";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _JobQueueDetail: _Structure_ = {
  type: "structure",
  required: [
    "jobQueueName",
    "jobQueueArn",
    "state",
    "priority",
    "computeEnvironmentOrder"
  ],
  members: {
    jobQueueName: {
      shape: {
        type: "string"
      }
    },
    jobQueueArn: {
      shape: {
        type: "string"
      }
    },
    state: {
      shape: {
        type: "string"
      }
    },
    status: {
      shape: {
        type: "string"
      }
    },
    statusReason: {
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
