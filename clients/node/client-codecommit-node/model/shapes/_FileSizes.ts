import { Structure as _Structure_ } from "@aws-sdk/types";

export const _FileSizes: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    source: {
      shape: {
        type: "integer"
      }
    },
    destination: {
      shape: {
        type: "integer"
      }
    },
    base: {
      shape: {
        type: "integer"
      }
    }
  }
};
