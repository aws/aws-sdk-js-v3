import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeAttachmentInput: _Structure_ = {
  type: "structure",
  required: ["attachmentId"],
  members: {
    attachmentId: {
      shape: {
        type: "string"
      }
    }
  }
};
