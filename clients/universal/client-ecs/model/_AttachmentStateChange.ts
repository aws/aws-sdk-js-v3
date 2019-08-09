import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AttachmentStateChange: _Structure_ = {
  type: "structure",
  required: ["attachmentArn", "status"],
  members: {
    attachmentArn: {
      shape: {
        type: "string"
      }
    },
    status: {
      shape: {
        type: "string"
      }
    }
  }
};
