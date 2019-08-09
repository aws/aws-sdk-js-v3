import { _NoiseReducerFilterSettings } from "./_NoiseReducerFilterSettings";
import { _NoiseReducerSpatialFilterSettings } from "./_NoiseReducerSpatialFilterSettings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _NoiseReducer: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Filter: {
      shape: {
        type: "string"
      },
      locationName: "filter"
    },
    FilterSettings: {
      shape: _NoiseReducerFilterSettings,
      locationName: "filterSettings"
    },
    SpatialFilterSettings: {
      shape: _NoiseReducerSpatialFilterSettings,
      locationName: "spatialFilterSettings"
    }
  }
};
