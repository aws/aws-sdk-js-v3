import { _AttachmentSet } from "./_AttachmentSet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Communication: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    caseId: {
      shape: {
        type: "string"
      }
    },
    body: {
      shape: {
        type: "string",
        min: 1
      }
    },
    submittedBy: {
      shape: {
        type: "string"
      }
    },
    timeCreated: {
      shape: {
        type: "string"
      }
    },
    attachmentSet: {
      shape: _AttachmentSet
    }
  }
};
