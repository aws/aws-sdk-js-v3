import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListThingRegistrationTasksInput: _Structure_ = {
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
    status: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "status"
    }
  }
};
