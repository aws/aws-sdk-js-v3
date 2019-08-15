import { Structure as _Structure_ } from "@aws-sdk/types";

export const CommitTransactionInput: _Structure_ = {
  type: "structure",
  required: ["resourceArn", "secretArn", "transactionId"],
  members: {
    resourceArn: {
      shape: {
        type: "string"
      }
    },
    secretArn: {
      shape: {
        type: "string"
      }
    },
    transactionId: {
      shape: {
        type: "string"
      }
    }
  }
};
