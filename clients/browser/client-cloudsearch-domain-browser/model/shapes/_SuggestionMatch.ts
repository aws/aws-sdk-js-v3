import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SuggestionMatch: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    suggestion: {
      shape: {
        type: "string"
      }
    },
    score: {
      shape: {
        type: "integer"
      }
    },
    id: {
      shape: {
        type: "string"
      }
    }
  }
};
