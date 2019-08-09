import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ResizeInfo: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ResizeType: {
      shape: {
        type: "string"
      }
    },
    AllowCancelResize: {
      shape: {
        type: "boolean"
      }
    }
  }
};
