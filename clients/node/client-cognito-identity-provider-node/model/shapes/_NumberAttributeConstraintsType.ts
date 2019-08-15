import { Structure as _Structure_ } from "@aws-sdk/types";

export const _NumberAttributeConstraintsType: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    MinValue: {
      shape: {
        type: "string"
      }
    },
    MaxValue: {
      shape: {
        type: "string"
      }
    }
  }
};
