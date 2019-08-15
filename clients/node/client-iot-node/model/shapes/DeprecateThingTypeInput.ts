import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeprecateThingTypeInput: _Structure_ = {
  type: "structure",
  required: ["thingTypeName"],
  members: {
    thingTypeName: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "thingTypeName"
    },
    undoDeprecate: {
      shape: {
        type: "boolean"
      }
    }
  }
};
