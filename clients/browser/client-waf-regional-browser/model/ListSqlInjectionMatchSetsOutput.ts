import { _SqlInjectionMatchSetSummaries } from "./_SqlInjectionMatchSetSummaries";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListSqlInjectionMatchSetsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NextMarker: {
      shape: {
        type: "string",
        min: 1
      }
    },
    SqlInjectionMatchSets: {
      shape: _SqlInjectionMatchSetSummaries
    }
  }
};
