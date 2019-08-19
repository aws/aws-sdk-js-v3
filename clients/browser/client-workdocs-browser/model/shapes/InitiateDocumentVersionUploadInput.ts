import { Structure as _Structure_ } from "@aws-sdk/types";

export const InitiateDocumentVersionUploadInput: _Structure_ = {
  type: "structure",
  required: ["ParentFolderId"],
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
    Id: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ContentCreatedTimestamp: {
      shape: {
        type: "timestamp"
      }
    },
    ContentModifiedTimestamp: {
      shape: {
        type: "timestamp"
      }
    },
    ContentType: {
      shape: {
        type: "string",
        min: 1
      }
    },
    DocumentSizeInBytes: {
      shape: {
        type: "integer"
      }
    },
    ParentFolderId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
