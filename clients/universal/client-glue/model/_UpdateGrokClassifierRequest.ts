import { Structure as _Structure_ } from "@aws-sdk/types";

export const _UpdateGrokClassifierRequest: _Structure_ = {
  type: "structure",
  required: ["Name"],
  members: {
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Classification: {
      shape: {
        type: "string"
      }
    },
    GrokPattern: {
      shape: {
        type: "string",
        min: 1
      }
    },
    CustomPatterns: {
      shape: {
        type: "string"
      }
    }
  }
};
