import { _StackResourceDrifts } from "./_StackResourceDrifts";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeStackResourceDriftsOutput: _Structure_ = {
  type: "structure",
  required: ["StackResourceDrifts"],
  members: {
    StackResourceDrifts: {
      shape: _StackResourceDrifts
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
