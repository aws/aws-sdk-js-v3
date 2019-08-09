import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SNSDestination: _Structure_ = {
  type: "structure",
  required: ["TopicARN"],
  members: {
    TopicARN: {
      shape: {
        type: "string"
      }
    }
  }
};
