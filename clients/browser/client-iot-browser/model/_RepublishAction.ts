import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RepublishAction: _Structure_ = {
  type: "structure",
  required: ["roleArn", "topic"],
  members: {
    roleArn: {
      shape: {
        type: "string"
      }
    },
    topic: {
      shape: {
        type: "string"
      }
    }
  }
};
