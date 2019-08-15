import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListThingGroupsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    nextToken: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "nextToken"
    },
    maxResults: {
      shape: {
        type: "integer",
        min: 1
      },
      location: "querystring",
      locationName: "maxResults"
    },
    parentGroup: {
      shape: {
        type: "string",
        min: 1
      },
      location: "querystring",
      locationName: "parentGroup"
    },
    namePrefixFilter: {
      shape: {
        type: "string",
        min: 1
      },
      location: "querystring",
      locationName: "namePrefixFilter"
    },
    recursive: {
      shape: {
        type: "boolean"
      },
      location: "querystring",
      locationName: "recursive"
    }
  }
};
