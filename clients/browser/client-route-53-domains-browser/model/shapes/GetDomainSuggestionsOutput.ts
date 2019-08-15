import { _DomainSuggestionsList } from "./_DomainSuggestionsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetDomainSuggestionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SuggestionsList: {
      shape: _DomainSuggestionsList
    }
  }
};
