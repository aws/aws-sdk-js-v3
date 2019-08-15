import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Rule: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    attribute: {
      shape: {
        type: "string"
      }
    },
    operator: {
      shape: {
        type: "string"
      }
    },
    value: {
      shape: {
        type: "string"
      }
    }
  }
};
