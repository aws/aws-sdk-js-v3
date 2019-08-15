import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ListTagOptionsFilters: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Key: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Value: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Active: {
      shape: {
        type: "boolean"
      }
    }
  }
};
