import { _DimensionGroup } from "./_DimensionGroup";
import { _MetricQueryFilterMap } from "./_MetricQueryFilterMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MetricQuery: _Structure_ = {
  type: "structure",
  required: ["Metric"],
  members: {
    Metric: {
      shape: {
        type: "string"
      }
    },
    GroupBy: {
      shape: _DimensionGroup
    },
    Filter: {
      shape: _MetricQueryFilterMap
    }
  }
};
