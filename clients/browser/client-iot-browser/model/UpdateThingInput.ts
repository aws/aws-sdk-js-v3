import { _AttributePayload } from "./_AttributePayload";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateThingInput: _Structure_ = {
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
    thingTypeName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    attributePayload: {
      shape: _AttributePayload
    },
    expectedVersion: {
      shape: {
        type: "integer"
      }
    },
    removeThingType: {
      shape: {
        type: "boolean"
      }
    }
  }
};
