import { Structure as _Structure_ } from "@aws-sdk/types";

export const DissociateEntityFromThingInput: _Structure_ = {
  type: "structure",
  required: ["thingName", "entityType"],
  members: {
    thingName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    entityType: {
      shape: {
        type: "string"
      }
    }
  }
};
