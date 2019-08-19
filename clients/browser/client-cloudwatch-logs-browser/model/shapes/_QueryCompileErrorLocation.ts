import { Structure as _Structure_ } from "@aws-sdk/types";

export const _QueryCompileErrorLocation: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    startCharOffset: {
      shape: {
        type: "integer"
      }
    },
    endCharOffset: {
      shape: {
        type: "integer"
      }
    }
  }
};
