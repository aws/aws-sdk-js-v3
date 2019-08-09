import { _DimensionMap } from "./_DimensionMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ResponseResourceMetricKey: _Structure_ = {
  type: "structure",
  required: ["Metric"],
  members: {
    Metric: {
      shape: {
        type: "string"
      }
    },
    Dimensions: {
      shape: _DimensionMap
    }
  }
};
