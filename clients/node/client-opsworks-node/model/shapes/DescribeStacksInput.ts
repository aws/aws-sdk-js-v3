import { _Strings } from "./_Strings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeStacksInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    StackIds: {
      shape: _Strings
    }
  }
};
