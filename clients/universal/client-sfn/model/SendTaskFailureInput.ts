import { Structure as _Structure_ } from "@aws-sdk/types";

export const SendTaskFailureInput: _Structure_ = {
  type: "structure",
  required: ["taskToken"],
  members: {
    taskToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    error: {
      shape: {
        type: "string",
        sensitive: true
      }
    },
    cause: {
      shape: {
        type: "string",
        sensitive: true
      }
    }
  }
};
