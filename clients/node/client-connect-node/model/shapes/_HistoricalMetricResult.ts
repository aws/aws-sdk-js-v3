import { _Dimensions } from "./_Dimensions";
import { _HistoricalMetricDataCollections } from "./_HistoricalMetricDataCollections";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _HistoricalMetricResult: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Dimensions: {
      shape: _Dimensions
    },
    Collections: {
      shape: _HistoricalMetricDataCollections
    }
  }
};
