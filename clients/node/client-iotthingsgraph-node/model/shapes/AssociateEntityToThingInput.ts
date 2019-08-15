import { Structure as _Structure_ } from "@aws-sdk/types";

export const AssociateEntityToThingInput: _Structure_ = {
  type: "structure",
  required: ["thingName", "entityId"],
  members: {
    thingName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    entityId: {
      shape: {
        type: "string"
      }
    },
    namespaceVersion: {
      shape: {
        type: "integer"
      }
    }
  }
};
