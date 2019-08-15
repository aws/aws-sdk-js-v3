import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeStackSetOperationInput: _Structure_ = {
  type: "structure",
  required: ["StackSetName", "OperationId"],
  members: {
    StackSetName: {
      shape: {
        type: "string"
      }
    },
    OperationId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
