import { _AttachmentsSourceList } from "./_AttachmentsSourceList";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateDocumentInput: _Structure_ = {
  type: "structure",
  required: ["Content", "Name"],
  members: {
    Content: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Attachments: {
      shape: _AttachmentsSourceList
    },
    Name: {
      shape: {
        type: "string"
      }
    },
    VersionName: {
      shape: {
        type: "string"
      }
    },
    DocumentType: {
      shape: {
        type: "string"
      }
    },
    DocumentFormat: {
      shape: {
        type: "string"
      }
    },
    TargetType: {
      shape: {
        type: "string"
      }
    },
    Tags: {
      shape: _TagList
    }
  }
};
