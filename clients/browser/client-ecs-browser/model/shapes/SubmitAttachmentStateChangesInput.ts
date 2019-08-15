import { _AttachmentStateChanges } from "./_AttachmentStateChanges";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const SubmitAttachmentStateChangesInput: _Structure_ = {
  type: "structure",
  required: ["attachments"],
  members: {
    cluster: {
      shape: {
        type: "string"
      }
    },
    attachments: {
      shape: _AttachmentStateChanges
    }
  }
};
