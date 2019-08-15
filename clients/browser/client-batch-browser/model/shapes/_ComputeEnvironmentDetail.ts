import { _ComputeResource } from "./_ComputeResource";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ComputeEnvironmentDetail: _Structure_ = {
  type: "structure",
  required: [
    "computeEnvironmentName",
    "computeEnvironmentArn",
    "ecsClusterArn"
  ],
  members: {
    computeEnvironmentName: {
      shape: {
        type: "string"
      }
    },
    computeEnvironmentArn: {
      shape: {
        type: "string"
      }
    },
    ecsClusterArn: {
      shape: {
        type: "string"
      }
    },
    type: {
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
    computeResources: {
      shape: _ComputeResource
    },
    serviceRole: {
      shape: {
        type: "string"
      }
    }
  }
};
