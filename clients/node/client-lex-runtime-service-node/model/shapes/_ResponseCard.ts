import { _genericAttachmentList } from "./_genericAttachmentList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ResponseCard: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    version: {
      shape: {
        type: "string"
      }
    },
    contentType: {
      shape: {
        type: "string"
      }
    },
    genericAttachments: {
      shape: _genericAttachmentList
    }
  }
};
