import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Category: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CategoryId: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    CategoryName: {
      shape: {
        type: "string"
      }
    }
  }
};
