import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Account: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Id: {
      shape: {
        type: "string"
      }
    },
    Arn: {
      shape: {
        type: "string"
      }
    },
    Email: {
      shape: {
        type: "string",
        sensitive: true,
        min: 6
      }
    },
    Name: {
      shape: {
        type: "string",
        sensitive: true,
        min: 1
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    JoinedMethod: {
      shape: {
        type: "string"
      }
    },
    JoinedTimestamp: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
