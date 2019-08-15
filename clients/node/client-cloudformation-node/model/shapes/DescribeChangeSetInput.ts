import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeChangeSetInput: _Structure_ = {
  type: "structure",
  required: ["ChangeSetName"],
  members: {
    ChangeSetName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    StackName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
