import { _TrafficMirrorSessionSet } from "./_TrafficMirrorSessionSet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeTrafficMirrorSessionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TrafficMirrorSessions: {
      shape: _TrafficMirrorSessionSet,
      locationName: "trafficMirrorSessionSet"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    }
  }
};
