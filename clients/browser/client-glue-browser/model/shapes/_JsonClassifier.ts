import { Structure as _Structure_ } from "@aws-sdk/types";

export const _JsonClassifier: _Structure_ = {
  type: "structure",
  required: ["Name", "JsonPath"],
  members: {
    Name: {
      shape: {
        type: "string",
        min: 1
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
    JsonPath: {
      shape: {
        type: "string"
      }
    }
  }
};
