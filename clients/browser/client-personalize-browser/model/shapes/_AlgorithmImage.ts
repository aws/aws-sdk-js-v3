import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AlgorithmImage: _Structure_ = {
  type: "structure",
  required: ["dockerURI"],
  members: {
    name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    dockerURI: {
      shape: {
        type: "string"
      }
    }
  }
};
