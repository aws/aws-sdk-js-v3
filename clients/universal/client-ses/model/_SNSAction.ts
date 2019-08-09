import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SNSAction: _Structure_ = {
  type: "structure",
  required: ["TopicArn"],
  members: {
    TopicArn: {
      shape: {
        type: "string"
      }
    },
    Encoding: {
      shape: {
        type: "string"
      }
    }
  }
};
