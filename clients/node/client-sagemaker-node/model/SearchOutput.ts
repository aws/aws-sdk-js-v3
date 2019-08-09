import { _SearchResultsList } from "./_SearchResultsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const SearchOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Results: {
      shape: _SearchResultsList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
