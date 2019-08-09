import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListJobsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    status: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "status"
    },
    targetSelection: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "targetSelection"
    },
    maxResults: {
      shape: {
        type: "integer",
        min: 1
      },
      location: "querystring",
      locationName: "maxResults"
    },
    nextToken: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "nextToken"
    },
    thingGroupName: {
      shape: {
        type: "string",
        min: 1
      },
      location: "querystring",
      locationName: "thingGroupName"
    },
    thingGroupId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "querystring",
      locationName: "thingGroupId"
    }
  }
};
