import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Limit: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Type: {
      shape: {
        type: "string"
      }
    },
    Max: {
      shape: {
        type: "integer"
      }
    }
  }
};
