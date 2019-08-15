import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AccountAttribute: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Name: {
      shape: {
        type: "string"
      }
    },
    Maximum: {
      shape: {
        type: "integer"
      }
    },
    Used: {
      shape: {
        type: "integer"
      }
    }
  }
};
