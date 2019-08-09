import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AgeRange: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Low: {
      shape: {
        type: "integer"
      }
    },
    High: {
      shape: {
        type: "integer"
      }
    }
  }
};
