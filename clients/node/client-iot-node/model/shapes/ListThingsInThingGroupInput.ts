import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListThingsInThingGroupInput: _Structure_ = {
  type: "structure",
  required: ["thingGroupName"],
  members: {
    thingGroupName: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "thingGroupName"
    },
    recursive: {
      shape: {
        type: "boolean"
      },
      location: "querystring",
      locationName: "recursive"
    },
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
    }
  }
};
