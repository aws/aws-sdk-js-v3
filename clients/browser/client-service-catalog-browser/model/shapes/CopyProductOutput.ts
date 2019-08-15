import { Structure as _Structure_ } from "@aws-sdk/types";

export const CopyProductOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CopyProductToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
