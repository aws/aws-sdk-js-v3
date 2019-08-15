import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Container: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Endpoint: {
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
    ARN: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Status: {
      shape: {
        type: "string",
        min: 1
      }
    },
    AccessLoggingEnabled: {
      shape: {
        type: "boolean"
      }
    }
  }
};
