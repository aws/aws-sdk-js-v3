import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeFolderContentsInput: _Structure_ = {
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
    Sort: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "sort"
    },
    Order: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "order"
    },
    Limit: {
      shape: {
        type: "integer",
        min: 1
      },
      location: "querystring",
      locationName: "limit"
    },
    Marker: {
      shape: {
        type: "string",
        min: 1
      },
      location: "querystring",
      locationName: "marker"
    },
    Type: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "type"
    },
    Include: {
      shape: {
        type: "string",
        min: 1
      },
      location: "querystring",
      locationName: "include"
    }
  }
};
