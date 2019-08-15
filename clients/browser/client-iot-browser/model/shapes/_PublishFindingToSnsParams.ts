import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PublishFindingToSnsParams: _Structure_ = {
  type: "structure",
  required: ["topicArn"],
  members: {
    topicArn: {
      shape: {
        type: "string"
      }
    }
  }
};
