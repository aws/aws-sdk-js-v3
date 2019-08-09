import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetDocumentVersionInput: _Structure_ = {
  type: "structure",
  required: ["DocumentId", "VersionId"],
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
    Fields: {
      shape: {
        type: "string",
        min: 1
      },
      location: "querystring",
      locationName: "fields"
    },
    IncludeCustomMetadata: {
      shape: {
        type: "boolean"
      },
      location: "querystring",
      locationName: "includeCustomMetadata"
    }
  }
};
