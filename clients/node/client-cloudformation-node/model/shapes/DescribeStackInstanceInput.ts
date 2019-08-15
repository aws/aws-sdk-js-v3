import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeStackInstanceInput: _Structure_ = {
  type: "structure",
  required: ["StackSetName", "StackInstanceAccount", "StackInstanceRegion"],
  members: {
    StackSetName: {
      shape: {
        type: "string"
      }
    },
    StackInstanceAccount: {
      shape: {
        type: "string"
      }
    },
    StackInstanceRegion: {
      shape: {
        type: "string"
      }
    }
  }
};
