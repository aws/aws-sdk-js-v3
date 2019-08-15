import { _Operation } from "./_Operation";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UnpeerVpcOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    operation: {
      shape: _Operation
    }
  }
};
