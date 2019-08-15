import { Structure as _Structure_ } from "@aws-sdk/types";

export const _StringAttributeConstraintsType: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    MinLength: {
      shape: {
        type: "string"
      }
    },
    MaxLength: {
      shape: {
        type: "string"
      }
    }
  }
};
