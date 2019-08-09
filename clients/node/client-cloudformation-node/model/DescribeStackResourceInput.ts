import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeStackResourceInput: _Structure_ = {
  type: "structure",
  required: ["StackName", "LogicalResourceId"],
  members: {
    StackName: {
      shape: {
        type: "string"
      }
    },
    LogicalResourceId: {
      shape: {
        type: "string"
      }
    }
  }
};
