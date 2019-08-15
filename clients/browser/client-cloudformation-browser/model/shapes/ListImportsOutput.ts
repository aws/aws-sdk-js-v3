import { _Imports } from "./_Imports";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListImportsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Imports: {
      shape: _Imports
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
