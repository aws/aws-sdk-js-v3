import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateThingOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    thingName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    thingArn: {
      shape: {
        type: "string"
      }
    },
    thingId: {
      shape: {
        type: "string"
      }
    }
  }
};
