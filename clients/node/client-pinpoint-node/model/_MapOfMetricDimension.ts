import { Map as _Map_ } from "@aws-sdk/types";
import { _MetricDimension } from "./_MetricDimension";

export const _MapOfMetricDimension: _Map_ = {
  type: "map",
  key: {
    shape: {
      type: "string"
    }
  },
  value: {
    shape: _MetricDimension
  }
};
