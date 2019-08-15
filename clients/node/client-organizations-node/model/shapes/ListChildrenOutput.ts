import { _Children } from "./_Children";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListChildrenOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Children: {
      shape: _Children
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
