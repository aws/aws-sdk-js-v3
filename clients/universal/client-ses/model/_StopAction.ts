import { Structure as _Structure_ } from "@aws-sdk/types";

export const _StopAction: _Structure_ = {
  type: "structure",
  required: ["Scope"],
  members: {
    Scope: {
      shape: {
        type: "string"
      }
    },
    TopicArn: {
      shape: {
        type: "string"
      }
    }
  }
};
