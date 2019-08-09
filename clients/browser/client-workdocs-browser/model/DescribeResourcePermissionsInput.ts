import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeResourcePermissionsInput: _Structure_ = {
  type: "structure",
  required: ["ResourceId"],
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
    ResourceId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "ResourceId"
    },
    PrincipalId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "querystring",
      locationName: "principalId"
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
