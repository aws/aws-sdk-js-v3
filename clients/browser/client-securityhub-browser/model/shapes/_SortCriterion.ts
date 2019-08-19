import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SortCriterion: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Field: {
      shape: {
        type: "string"
      }
    },
    SortOrder: {
      shape: {
        type: "string"
      }
    }
  }
};
