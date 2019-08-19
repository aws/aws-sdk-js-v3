import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeStateMachineForExecutionInput: _Structure_ = {
  type: "structure",
  required: ["executionArn"],
  members: {
    executionArn: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
