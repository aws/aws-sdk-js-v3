import { _AttributeNameList } from "./_AttributeNameList";
import { _MessageAttributeNameList } from "./_MessageAttributeNameList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ReceiveMessageInput: _Structure_ = {
  type: "structure",
  required: ["QueueUrl"],
  members: {
    QueueUrl: {
      shape: {
        type: "string"
      }
    },
    AttributeNames: {
      shape: _AttributeNameList
    },
    MessageAttributeNames: {
      shape: _MessageAttributeNameList
    },
    MaxNumberOfMessages: {
      shape: {
        type: "integer"
      }
    },
    VisibilityTimeout: {
      shape: {
        type: "integer"
      }
    },
    WaitTimeSeconds: {
      shape: {
        type: "integer"
      }
    },
    ReceiveRequestAttemptId: {
      shape: {
        type: "string"
      }
    }
  }
};
