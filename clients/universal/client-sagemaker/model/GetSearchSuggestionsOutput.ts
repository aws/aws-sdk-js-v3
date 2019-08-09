import { _PropertyNameSuggestionList } from "./_PropertyNameSuggestionList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetSearchSuggestionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PropertyNameSuggestions: {
      shape: _PropertyNameSuggestionList
    }
  }
};
