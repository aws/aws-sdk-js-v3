import { _Solutions } from "./_Solutions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListSolutionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    solutions: {
      shape: _Solutions
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
