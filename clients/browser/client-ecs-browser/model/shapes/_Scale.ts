import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Scale: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    value: {
      shape: {
        type: "float"
      }
    },
    unit: {
      shape: {
        type: "string"
      }
    }
  }
};
