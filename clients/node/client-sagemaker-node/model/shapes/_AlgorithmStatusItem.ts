import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AlgorithmStatusItem: _Structure_ = {
  type: "structure",
  required: ["Name", "Status"],
  members: {
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    FailureReason: {
      shape: {
        type: "string"
      }
    }
  }
};
