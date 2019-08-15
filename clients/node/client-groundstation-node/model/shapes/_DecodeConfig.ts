import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DecodeConfig: _Structure_ = {
  type: "structure",
  required: ["unvalidatedJSON"],
  members: {
    unvalidatedJSON: {
      shape: {
        type: "string",
        min: 2
      }
    }
  }
};
