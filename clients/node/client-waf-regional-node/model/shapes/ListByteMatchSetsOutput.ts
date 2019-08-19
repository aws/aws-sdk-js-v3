import { _ByteMatchSetSummaries } from "./_ByteMatchSetSummaries";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListByteMatchSetsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NextMarker: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ByteMatchSets: {
      shape: _ByteMatchSetSummaries
    }
  }
};
