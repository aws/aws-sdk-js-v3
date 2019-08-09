import { _MessageAttributeMap } from "./_MessageAttributeMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PublishInput: _Structure_ = {
  type: "structure",
  required: ["Message"],
  members: {
    TopicArn: {
      shape: {
        type: "string"
      }
    },
    TargetArn: {
      shape: {
        type: "string"
      }
    },
    PhoneNumber: {
      shape: {
        type: "string"
      }
    },
    Message: {
      shape: {
        type: "string"
      }
    },
    Subject: {
      shape: {
        type: "string"
      }
    },
    MessageStructure: {
      shape: {
        type: "string"
      }
    },
    MessageAttributes: {
      shape: _MessageAttributeMap
    }
  }
};
