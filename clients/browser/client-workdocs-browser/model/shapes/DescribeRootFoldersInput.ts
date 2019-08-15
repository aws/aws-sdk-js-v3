import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeRootFoldersInput: _Structure_ = {
  type: "structure",
  required: ["AuthenticationToken"],
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
    }
  }
};
