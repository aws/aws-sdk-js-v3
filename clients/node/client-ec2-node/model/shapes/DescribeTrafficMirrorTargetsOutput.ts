import { _TrafficMirrorTargetSet } from "./_TrafficMirrorTargetSet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeTrafficMirrorTargetsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TrafficMirrorTargets: {
      shape: _TrafficMirrorTargetSet,
      locationName: "trafficMirrorTargetSet"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    }
  }
};
