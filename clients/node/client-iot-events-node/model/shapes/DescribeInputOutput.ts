import { _Input } from "./_Input";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeInputOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    input: {
      shape: _Input
    }
  }
};
