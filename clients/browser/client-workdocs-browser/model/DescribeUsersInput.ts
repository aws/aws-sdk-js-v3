import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeUsersInput: _Structure_ = {
  type: "structure",
  required: [],
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
    OrganizationId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "querystring",
      locationName: "organizationId"
    },
    UserIds: {
      shape: {
        type: "string",
        min: 1
      },
      location: "querystring",
      locationName: "userIds"
    },
    Query: {
      shape: {
        type: "string",
        sensitive: true,
        min: 1
      },
      location: "querystring",
      locationName: "query"
    },
    Include: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "include"
    },
    Order: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "order"
    },
    Sort: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "sort"
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
