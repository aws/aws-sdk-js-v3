import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CreateGrokClassifierRequest: _Structure_ = {
  type: "structure",
  required: ["Classification", "Name", "GrokPattern"],
  members: {
    Classification: {
      shape: {
        type: "string"
      }
    },
    Name: {
      shape: {
        type: "string",
        min: 1
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
