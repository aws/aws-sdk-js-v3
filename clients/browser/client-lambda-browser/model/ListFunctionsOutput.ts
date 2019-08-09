import { _FunctionList } from "./_FunctionList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListFunctionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NextMarker: {
      shape: {
        type: "string"
      }
    },
    Functions: {
      shape: _FunctionList
    }
  }
};
