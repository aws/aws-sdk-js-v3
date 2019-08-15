import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteThingInput: _Structure_ = {
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
    expectedVersion: {
      shape: {
        type: "integer"
      },
      location: "querystring",
      locationName: "expectedVersion"
    }
  }
};
