import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteStreamInput: _Structure_ = {
  type: "structure",
  required: ["StreamARN"],
  members: {
    StreamARN: {
      shape: {
        type: "string",
        min: 1
      }
    },
    CurrentVersion: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
