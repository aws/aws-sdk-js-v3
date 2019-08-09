import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeDocumentVersionsInput: _Structure_ = {
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
    Marker: {
      shape: {
        type: "string",
        min: 1
      },
      location: "querystring",
      locationName: "marker"
    },
    Limit: {
      shape: {
        type: "integer",
        min: 1
      },
      location: "querystring",
      locationName: "limit"
    },
    Include: {
      shape: {
        type: "string",
        min: 1
      },
      location: "querystring",
      locationName: "include"
    },
    Fields: {
      shape: {
        type: "string",
        min: 1
      },
      location: "querystring",
      locationName: "fields"
    }
  }
};
