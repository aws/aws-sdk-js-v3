import { _ProgressDetail } from "./_ProgressDetail";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RobotDeployment: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    arn: {
      shape: {
        type: "string",
        min: 1
      }
    },
    deploymentStartTime: {
      shape: {
        type: "timestamp"
      }
    },
    deploymentFinishTime: {
      shape: {
        type: "timestamp"
      }
    },
    status: {
      shape: {
        type: "string"
      }
    },
    progressDetail: {
      shape: _ProgressDetail
    },
    failureReason: {
      shape: {
        type: "string"
      }
    },
    failureCode: {
      shape: {
        type: "string"
      }
    }
  }
};
