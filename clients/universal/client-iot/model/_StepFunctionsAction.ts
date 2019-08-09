import { Structure as _Structure_ } from "@aws-sdk/types";

export const _StepFunctionsAction: _Structure_ = {
  type: "structure",
  required: ["stateMachineName", "roleArn"],
  members: {
    executionNamePrefix: {
      shape: {
        type: "string"
      }
    },
    stateMachineName: {
      shape: {
        type: "string"
      }
    },
    roleArn: {
      shape: {
        type: "string"
      }
    }
  }
};
