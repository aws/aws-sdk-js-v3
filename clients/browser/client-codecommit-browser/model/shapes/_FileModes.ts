import { Structure as _Structure_ } from "@aws-sdk/types";

export const _FileModes: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    source: {
      shape: {
        type: "string"
      }
    },
    destination: {
      shape: {
        type: "string"
      }
    },
    base: {
      shape: {
        type: "string"
      }
    }
  }
};
