import { Structure as _Structure_ } from "@aws-sdk/types";

export const _IsBinaryFile: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    source: {
      shape: {
        type: "boolean"
      }
    },
    destination: {
      shape: {
        type: "boolean"
      }
    },
    base: {
      shape: {
        type: "boolean"
      }
    }
  }
};
