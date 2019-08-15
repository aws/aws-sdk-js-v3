import { _MergeHunkDetail } from "./_MergeHunkDetail";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MergeHunk: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    isConflict: {
      shape: {
        type: "boolean"
      }
    },
    source: {
      shape: _MergeHunkDetail
    },
    destination: {
      shape: _MergeHunkDetail
    },
    base: {
      shape: _MergeHunkDetail
    }
  }
};
