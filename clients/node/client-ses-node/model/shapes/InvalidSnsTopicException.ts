import { Structure as _Structure_ } from "@aws-sdk/types";

export const InvalidSnsTopicException: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Topic: {
      shape: {
        type: "string"
      }
    }
  },
  exceptionType: "InvalidSnsTopicException",
  exceptionCode: "InvalidSnsTopic"
};
