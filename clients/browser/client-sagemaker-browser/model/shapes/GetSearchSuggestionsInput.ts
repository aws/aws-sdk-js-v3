import { _SuggestionQuery } from "./_SuggestionQuery";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetSearchSuggestionsInput: _Structure_ = {
  type: "structure",
  required: ["Resource"],
  members: {
    Resource: {
      shape: {
        type: "string"
      }
    },
    SuggestionQuery: {
      shape: _SuggestionQuery
    }
  }
};
