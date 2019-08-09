import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateDocumentInput: _Structure_ = {
  type: "structure",
  required: ["DocumentId"],
  members: {
    AuthenticationToken: {
      shape: {
        type: "string",
        sensitive: true,
        min: 1
      },
      location: "header",
      locationName: "Authentication"
    },
    DocumentId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "DocumentId"
    },
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ParentFolderId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ResourceState: {
      shape: {
        type: "string"
      }
    }
  }
};
