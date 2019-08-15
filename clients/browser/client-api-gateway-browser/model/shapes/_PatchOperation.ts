import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PatchOperation: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    op: {
      shape: {
        type: "string"
      }
    },
    path: {
      shape: {
        type: "string"
      }
    },
    value: {
      shape: {
        type: "string"
      }
    },
    from: {
      shape: {
        type: "string"
      }
    }
  }
};
