import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MergeHunkDetail: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    startLine: {
      shape: {
        type: "integer"
      }
    },
    endLine: {
      shape: {
        type: "integer"
      }
    },
    hunkContent: {
      shape: {
        type: "string"
      }
    }
  }
};
