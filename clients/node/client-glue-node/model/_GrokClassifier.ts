import { Structure as _Structure_ } from "@aws-sdk/types";

export const _GrokClassifier: _Structure_ = {
  type: "structure",
  required: ["Name", "Classification", "GrokPattern"],
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
    CreationTime: {
      shape: {
        type: "timestamp"
      }
    },
    LastUpdated: {
      shape: {
        type: "timestamp"
      }
    },
    Version: {
      shape: {
        type: "integer"
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
