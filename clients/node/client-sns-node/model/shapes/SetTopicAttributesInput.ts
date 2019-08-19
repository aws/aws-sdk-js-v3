import { Structure as _Structure_ } from "@aws-sdk/types";

export const SetTopicAttributesInput: _Structure_ = {
  type: "structure",
  required: ["TopicArn", "AttributeName"],
  members: {
    TopicArn: {
      shape: {
        type: "string"
      }
    },
    AttributeName: {
      shape: {
        type: "string"
      }
    },
    AttributeValue: {
      shape: {
        type: "string"
      }
    }
  }
};
