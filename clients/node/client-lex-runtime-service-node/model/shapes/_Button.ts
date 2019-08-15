import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Button: _Structure_ = {
  type: "structure",
  required: ["text", "value"],
  members: {
    text: {
      shape: {
        type: "string",
        min: 1
      }
    },
    value: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
