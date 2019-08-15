import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Thing: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    thingArn: {
      shape: {
        type: "string"
      }
    },
    thingName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
