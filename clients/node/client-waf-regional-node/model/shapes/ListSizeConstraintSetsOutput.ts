import { _SizeConstraintSetSummaries } from "./_SizeConstraintSetSummaries";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListSizeConstraintSetsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NextMarker: {
      shape: {
        type: "string",
        min: 1
      }
    },
    SizeConstraintSets: {
      shape: _SizeConstraintSetSummaries
    }
  }
};
