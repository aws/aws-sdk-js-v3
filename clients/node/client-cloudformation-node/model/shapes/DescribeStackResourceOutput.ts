import { _StackResourceDetail } from "./_StackResourceDetail";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeStackResourceOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    StackResourceDetail: {
      shape: _StackResourceDetail
    }
  }
};
