import { _Attachments } from "./_Attachments";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AddAttachmentsToSetInput: _Structure_ = {
  type: "structure",
  required: ["attachments"],
  members: {
    attachmentSetId: {
      shape: {
        type: "string"
      }
    },
    attachments: {
      shape: _Attachments
    }
  }
};
