import { _QueryCompileErrorLocation } from "./_QueryCompileErrorLocation";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _QueryCompileError: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    location: {
      shape: _QueryCompileErrorLocation
    },
    message: {
      shape: {
        type: "string"
      }
    }
  }
};
