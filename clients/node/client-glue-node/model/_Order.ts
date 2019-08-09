import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Order: _Structure_ = {
  type: "structure",
  required: ["Column", "SortOrder"],
  members: {
    Column: {
      shape: {
        type: "string",
        min: 1
      }
    },
    SortOrder: {
      shape: {
        type: "integer"
      }
    }
  }
};
