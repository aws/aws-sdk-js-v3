import { List as _List_ } from "@aws-sdk/types";
import { _SuggestionMatch } from "./_SuggestionMatch";

export const _Suggestions: _List_ = {
  type: "list",
  member: {
    shape: _SuggestionMatch
  }
};
