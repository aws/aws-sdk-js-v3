import { _CategoryList } from "./_CategoryList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Service: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    code: {
      shape: {
        type: "string"
      }
    },
    name: {
      shape: {
        type: "string"
      }
    },
    categories: {
      shape: _CategoryList
    }
  }
};
