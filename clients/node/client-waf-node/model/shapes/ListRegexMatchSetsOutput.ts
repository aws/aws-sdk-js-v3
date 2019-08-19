import { _RegexMatchSetSummaries } from "./_RegexMatchSetSummaries";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListRegexMatchSetsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NextMarker: {
      shape: {
        type: "string",
        min: 1
      }
    },
    RegexMatchSets: {
      shape: _RegexMatchSetSummaries
    }
  }
};
