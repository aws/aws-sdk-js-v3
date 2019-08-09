import { _AttributePayload } from "./_AttributePayload";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ThingGroupProperties: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    thingGroupDescription: {
      shape: {
        type: "string"
      }
    },
    attributePayload: {
      shape: _AttributePayload
    }
  }
};
