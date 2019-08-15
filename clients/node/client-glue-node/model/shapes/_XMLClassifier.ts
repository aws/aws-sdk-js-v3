import { Structure as _Structure_ } from "@aws-sdk/types";

export const _XMLClassifier: _Structure_ = {
  type: "structure",
  required: ["Name", "Classification"],
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
    RowTag: {
      shape: {
        type: "string"
      }
    }
  }
};
