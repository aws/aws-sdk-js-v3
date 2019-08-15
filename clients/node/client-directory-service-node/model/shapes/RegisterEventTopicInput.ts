import { Structure as _Structure_ } from "@aws-sdk/types";

export const RegisterEventTopicInput: _Structure_ = {
  type: "structure",
  required: ["DirectoryId", "TopicName"],
  members: {
    DirectoryId: {
      shape: {
        type: "string"
      }
    },
    TopicName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
