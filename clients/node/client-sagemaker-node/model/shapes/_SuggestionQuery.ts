import { _PropertyNameQuery } from "./_PropertyNameQuery";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SuggestionQuery: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PropertyNameQuery: {
      shape: _PropertyNameQuery
    }
  }
};
