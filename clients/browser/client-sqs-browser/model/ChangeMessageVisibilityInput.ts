import { Structure as _Structure_ } from "@aws-sdk/types";

export const ChangeMessageVisibilityInput: _Structure_ = {
  type: "structure",
  required: ["QueueUrl", "ReceiptHandle", "VisibilityTimeout"],
  members: {
    QueueUrl: {
      shape: {
        type: "string"
      }
    },
    ReceiptHandle: {
      shape: {
        type: "string"
      }
    },
    VisibilityTimeout: {
      shape: {
        type: "integer"
      }
    }
  }
};
