import { _Exports } from "./_Exports";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListExportsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Exports: {
      shape: _Exports
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
