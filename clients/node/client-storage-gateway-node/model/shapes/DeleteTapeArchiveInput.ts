import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteTapeArchiveInput: _Structure_ = {
  type: "structure",
  required: ["TapeARN"],
  members: {
    TapeARN: {
      shape: {
        type: "string",
        min: 50
      }
    }
  }
};
