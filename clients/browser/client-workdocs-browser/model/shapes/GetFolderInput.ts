import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetFolderInput: _Structure_ = {
  type: "structure",
  required: ["FolderId"],
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
    FolderId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "FolderId"
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
