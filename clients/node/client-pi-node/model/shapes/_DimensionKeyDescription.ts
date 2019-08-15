import { _DimensionMap } from "./_DimensionMap";
import { _MetricValuesList } from "./_MetricValuesList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DimensionKeyDescription: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Dimensions: {
      shape: _DimensionMap
    },
    Total: {
      shape: {
        type: "float"
      }
    },
    Partitions: {
      shape: _MetricValuesList
    }
  }
};
