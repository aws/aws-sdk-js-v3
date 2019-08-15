import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DeleteMessageBatchRequestEntry: _Structure_ = {
  type: "structure",
  required: ["Id", "ReceiptHandle"],
  members: {
    Id: {
      shape: {
        type: "string"
      }
    },
    ReceiptHandle: {
      shape: {
        type: "string"
      }
    }
  }
};
