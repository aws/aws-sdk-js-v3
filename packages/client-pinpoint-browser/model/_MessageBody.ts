import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MessageBody: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Message: {
      shape: {
        type: "string"
      }
    },
    RequestID: {
      shape: {
        type: "string"
      }
    }
  }
};
