import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListJobExecutionsForThingInput: _Structure_ = {
  type: "structure",
  required: ["thingName"],
  members: {
    thingName: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "thingName"
    },
    status: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "status"
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
    }
  }
};
