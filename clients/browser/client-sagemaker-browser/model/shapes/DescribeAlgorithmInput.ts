import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeAlgorithmInput: _Structure_ = {
  type: "structure",
  required: ["AlgorithmName"],
  members: {
    AlgorithmName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
