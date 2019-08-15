import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DefaultRetention: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Mode: {
      shape: {
        type: "string"
      }
    },
    Days: {
      shape: {
        type: "integer"
      }
    },
    Years: {
      shape: {
        type: "integer"
      }
    }
  }
};
