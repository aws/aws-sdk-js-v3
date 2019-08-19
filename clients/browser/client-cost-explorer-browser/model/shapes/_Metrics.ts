import { Map as _Map_ } from "@aws-sdk/types";
import { _MetricValue } from "./_MetricValue";

export const _Metrics: _Map_ = {
  type: "map",
  key: {
    shape: {
      type: "string"
    }
  },
  value: {
    shape: _MetricValue
  }
};
