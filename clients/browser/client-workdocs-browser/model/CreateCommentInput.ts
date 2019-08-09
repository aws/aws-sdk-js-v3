import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateCommentInput: _Structure_ = {
  type: "structure",
  required: ["DocumentId", "VersionId", "Text"],
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
    VersionId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "VersionId"
    },
    ParentId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ThreadId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Text: {
      shape: {
        type: "string",
        sensitive: true,
        min: 1
      }
    },
    Visibility: {
      shape: {
        type: "string"
      }
    },
    NotifyCollaborators: {
      shape: {
        type: "boolean"
      }
    }
  }
};
