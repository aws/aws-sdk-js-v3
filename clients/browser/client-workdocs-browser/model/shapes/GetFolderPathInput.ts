import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetFolderPathInput: _Structure_ = {
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
    Limit: {
      shape: {
        type: "integer",
        min: 1
      },
      location: "querystring",
      locationName: "limit"
    },
    Fields: {
      shape: {
        type: "string",
        min: 1
      },
      location: "querystring",
      locationName: "fields"
    },
    Marker: {
      shape: {
        type: "string",
        min: 1
      },
      location: "querystring",
      locationName: "marker"
    }
  }
};
