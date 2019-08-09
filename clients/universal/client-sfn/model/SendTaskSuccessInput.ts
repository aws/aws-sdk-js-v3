import { Structure as _Structure_ } from "@aws-sdk/types";

export const SendTaskSuccessInput: _Structure_ = {
  type: "structure",
  required: ["taskToken", "output"],
  members: {
    taskToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    output: {
      shape: {
        type: "string",
        sensitive: true
      }
    }
  }
};
