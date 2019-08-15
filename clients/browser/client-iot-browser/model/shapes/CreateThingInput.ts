import { _AttributePayload } from "./_AttributePayload";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateThingInput: _Structure_ = {
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
    billingGroupName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
