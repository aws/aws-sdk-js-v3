import { _StackInstance } from "./_StackInstance";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeStackInstanceOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    StackInstance: {
      shape: _StackInstance
    }
  }
};
