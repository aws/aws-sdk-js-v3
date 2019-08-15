import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InputParallelismUpdate: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CountUpdate: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
