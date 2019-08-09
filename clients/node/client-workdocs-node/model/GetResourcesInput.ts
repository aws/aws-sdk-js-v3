import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetResourcesInput: _Structure_ = {
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
    UserId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "querystring",
      locationName: "userId"
    },
    CollectionType: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "collectionType"
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
