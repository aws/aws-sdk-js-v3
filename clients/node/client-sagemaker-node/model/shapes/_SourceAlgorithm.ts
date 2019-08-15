import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SourceAlgorithm: _Structure_ = {
  type: "structure",
  required: ["AlgorithmName"],
  members: {
    ModelDataUrl: {
      shape: {
        type: "string"
      }
    },
    AlgorithmName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
