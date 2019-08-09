import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Stream: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    StreamArn: {
      shape: {
        type: "string",
        min: 37
      }
    },
    TableName: {
      shape: {
        type: "string",
        min: 3
      }
    },
    StreamLabel: {
      shape: {
        type: "string"
      }
    }
  }
};
