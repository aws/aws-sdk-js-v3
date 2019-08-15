import { _Protection } from "./_Protection";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeProtectionOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Protection: {
      shape: _Protection
    }
  }
};
