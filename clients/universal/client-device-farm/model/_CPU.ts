import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CPU: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    frequency: {
      shape: {
        type: "string"
      }
    },
    architecture: {
      shape: {
        type: "string"
      }
    },
    clock: {
      shape: {
        type: "float"
      }
    }
  }
};
