import { List as _List_ } from "@aws-sdk/types";
import { _DomainSuggestion } from "./_DomainSuggestion";

export const _DomainSuggestionsList: _List_ = {
  type: "list",
  member: {
    shape: _DomainSuggestion
  }
};
