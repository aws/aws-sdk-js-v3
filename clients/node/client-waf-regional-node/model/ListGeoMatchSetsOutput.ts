import { _GeoMatchSetSummaries } from "./_GeoMatchSetSummaries";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListGeoMatchSetsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NextMarker: {
      shape: {
        type: "string",
        min: 1
      }
    },
    GeoMatchSets: {
      shape: _GeoMatchSetSummaries
    }
  }
};
