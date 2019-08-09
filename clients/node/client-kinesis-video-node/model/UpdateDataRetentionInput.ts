import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateDataRetentionInput: _Structure_ = {
  type: "structure",
  required: ["CurrentVersion", "Operation", "DataRetentionChangeInHours"],
  members: {
    StreamName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    StreamARN: {
      shape: {
        type: "string",
        min: 1
      }
    },
    CurrentVersion: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Operation: {
      shape: {
        type: "string"
      }
    },
    DataRetentionChangeInHours: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
