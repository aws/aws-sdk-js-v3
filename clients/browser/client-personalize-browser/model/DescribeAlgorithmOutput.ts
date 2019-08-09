import { _Algorithm } from "./_Algorithm";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeAlgorithmOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    algorithm: {
      shape: _Algorithm
    }
  }
};
