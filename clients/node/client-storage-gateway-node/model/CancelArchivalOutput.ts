import { Structure as _Structure_ } from "@aws-sdk/types";

export const CancelArchivalOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TapeARN: {
      shape: {
        type: "string",
        min: 50
      }
    }
  }
};
