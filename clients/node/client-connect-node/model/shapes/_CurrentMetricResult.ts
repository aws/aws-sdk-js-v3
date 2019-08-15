import { _Dimensions } from "./_Dimensions";
import { _CurrentMetricDataCollections } from "./_CurrentMetricDataCollections";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CurrentMetricResult: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Dimensions: {
      shape: _Dimensions
    },
    Collections: {
      shape: _CurrentMetricDataCollections
    }
  }
};
