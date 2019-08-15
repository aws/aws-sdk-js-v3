import { _StackSummary } from "./_StackSummary";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeStackSummaryOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    StackSummary: {
      shape: _StackSummary
    }
  }
};
