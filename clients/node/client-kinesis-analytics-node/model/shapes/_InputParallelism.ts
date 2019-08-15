import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InputParallelism: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Count: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
