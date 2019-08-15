import { Structure as _Structure_ } from "@aws-sdk/types";

export const AddAttachmentsToSetOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    attachmentSetId: {
      shape: {
        type: "string"
      }
    },
    expiryTime: {
      shape: {
        type: "string"
      }
    }
  }
};
