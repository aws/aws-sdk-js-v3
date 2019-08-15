import { _XssMatchSetSummaries } from "./_XssMatchSetSummaries";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListXssMatchSetsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NextMarker: {
      shape: {
        type: "string",
        min: 1
      }
    },
    XssMatchSets: {
      shape: _XssMatchSetSummaries
    }
  }
};
