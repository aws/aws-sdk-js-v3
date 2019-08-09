import { _AttachmentDetails } from "./_AttachmentDetails";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Attachment: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    id: {
      shape: {
        type: "string"
      }
    },
    type: {
      shape: {
        type: "string"
      }
    },
    status: {
      shape: {
        type: "string"
      }
    },
    details: {
      shape: _AttachmentDetails
    }
  }
};
