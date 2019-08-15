import { _AttachmentContentList } from "./_AttachmentContentList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetDocumentOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
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
    DocumentVersion: {
      shape: {
        type: "string"
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    StatusInformation: {
      shape: {
        type: "string"
      }
    },
    Content: {
      shape: {
        type: "string",
        min: 1
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
    AttachmentsContent: {
      shape: _AttachmentContentList
    }
  }
};
