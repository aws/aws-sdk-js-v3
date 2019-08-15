import { _StackSetOperation } from "./_StackSetOperation";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeStackSetOperationOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    StackSetOperation: {
      shape: _StackSetOperation
    }
  }
};
