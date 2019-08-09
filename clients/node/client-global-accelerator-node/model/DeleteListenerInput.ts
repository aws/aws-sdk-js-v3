import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteListenerInput: _Structure_ = {
  type: "structure",
  required: ["ListenerArn"],
  members: {
    ListenerArn: {
      shape: {
        type: "string"
      }
    }
  }
};
