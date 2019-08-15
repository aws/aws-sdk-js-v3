import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SNSTopicPublishAction: _Structure_ = {
  type: "structure",
  required: ["targetArn"],
  members: {
    targetArn: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
