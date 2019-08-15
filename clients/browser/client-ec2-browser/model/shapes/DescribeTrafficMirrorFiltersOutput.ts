import { _TrafficMirrorFilterSet } from "./_TrafficMirrorFilterSet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeTrafficMirrorFiltersOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TrafficMirrorFilters: {
      shape: _TrafficMirrorFilterSet,
      locationName: "trafficMirrorFilterSet"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    }
  }
};
