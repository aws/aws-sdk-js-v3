import { Structure as _Structure_ } from "@aws-sdk/types";

export const BeginTransactionInput: _Structure_ = {
  type: "structure",
  required: ["resourceArn", "secretArn"],
  members: {
    database: {
      shape: {
        type: "string"
      }
    },
    resourceArn: {
      shape: {
        type: "string"
      }
    },
    schema: {
      shape: {
        type: "string"
      }
    },
    secretArn: {
      shape: {
        type: "string"
      }
    }
  }
};
