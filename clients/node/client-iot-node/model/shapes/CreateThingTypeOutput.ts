import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateThingTypeOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    thingTypeName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    thingTypeArn: {
      shape: {
        type: "string"
      }
    },
    thingTypeId: {
      shape: {
        type: "string"
      }
    }
  }
};
