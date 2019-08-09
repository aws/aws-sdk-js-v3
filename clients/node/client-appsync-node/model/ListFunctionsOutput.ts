import { _Functions } from "./_Functions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListFunctionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    functions: {
      shape: _Functions
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
