import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Landmark: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Type: {
      shape: {
        type: "string"
      }
    },
    X: {
      shape: {
        type: "float"
      }
    },
    Y: {
      shape: {
        type: "float"
      }
    }
  }
};
