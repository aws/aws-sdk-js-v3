import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DoubleRange: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    From: {
      shape: {
        type: "float"
      }
    },
    To: {
      shape: {
        type: "float"
      }
    }
  }
};
