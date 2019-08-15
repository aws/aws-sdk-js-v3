import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Intent: _Structure_ = {
  type: "structure",
  required: ["intentName", "intentVersion"],
  members: {
    intentName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    intentVersion: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
