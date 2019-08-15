import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeGroupsInput: _Structure_ = {
  type: "structure",
  required: ["SearchQuery"],
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
    SearchQuery: {
      shape: {
        type: "string",
        sensitive: true,
        min: 1
      },
      location: "querystring",
      locationName: "searchQuery"
    },
    OrganizationId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "querystring",
      locationName: "organizationId"
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
    }
  }
};
