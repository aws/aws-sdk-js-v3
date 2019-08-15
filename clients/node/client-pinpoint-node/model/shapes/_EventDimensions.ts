import { _MapOfAttributeDimension } from "./_MapOfAttributeDimension";
import { _SetDimension } from "./_SetDimension";
import { _MapOfMetricDimension } from "./_MapOfMetricDimension";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EventDimensions: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Attributes: {
      shape: _MapOfAttributeDimension
    },
    EventType: {
      shape: _SetDimension
    },
    Metrics: {
      shape: _MapOfMetricDimension
    }
  }
};
