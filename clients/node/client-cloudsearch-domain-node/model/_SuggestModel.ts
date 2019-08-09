import { _Suggestions } from "./_Suggestions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SuggestModel: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    query: {
      shape: {
        type: "string"
      }
    },
    found: {
      shape: {
        type: "integer"
      }
    },
    suggestions: {
      shape: _Suggestions
    }
  }
};
