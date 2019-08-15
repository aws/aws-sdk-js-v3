import { _RegexPatternSetSummaries } from "./_RegexPatternSetSummaries";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListRegexPatternSetsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NextMarker: {
      shape: {
        type: "string",
        min: 1
      }
    },
    RegexPatternSets: {
      shape: _RegexPatternSetSummaries
    }
  }
};
