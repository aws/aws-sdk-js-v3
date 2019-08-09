import { _MapOfAttributeDimension } from "./_MapOfAttributeDimension";
import { _SegmentBehaviors } from "./_SegmentBehaviors";
import { _SegmentDemographics } from "./_SegmentDemographics";
import { _SegmentLocation } from "./_SegmentLocation";
import { _MapOfMetricDimension } from "./_MapOfMetricDimension";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SegmentDimensions: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Attributes: {
      shape: _MapOfAttributeDimension
    },
    Behavior: {
      shape: _SegmentBehaviors
    },
    Demographic: {
      shape: _SegmentDemographics
    },
    Location: {
      shape: _SegmentLocation
    },
    Metrics: {
      shape: _MapOfMetricDimension
    },
    UserAttributes: {
      shape: _MapOfAttributeDimension
    }
  }
};
