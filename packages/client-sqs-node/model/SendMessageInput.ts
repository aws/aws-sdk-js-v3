import { _MessageBodyAttributeMap } from "./_MessageBodyAttributeMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const SendMessageInput: _Structure_ = {
  type: "structure",
  required: ["QueueUrl", "MessageBody"],
  members: {
    QueueUrl: {
      shape: {
        type: "string"
      }
    },
    MessageBody: {
      shape: {
        type: "string"
      }
    },
    DelaySeconds: {
      shape: {
        type: "integer"
      }
    },
    MessageAttributes: {
      shape: _MessageBodyAttributeMap,
      locationName: "MessageAttribute"
    },
    MessageDeduplicationId: {
      shape: {
        type: "string"
      }
    },
    MessageGroupId: {
      shape: {
        type: "string"
      }
    }
  }
};
