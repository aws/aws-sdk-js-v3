import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RetainRule: _Structure_ = {
  type: "structure",
  required: ["Count"],
  members: {
    Count: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
