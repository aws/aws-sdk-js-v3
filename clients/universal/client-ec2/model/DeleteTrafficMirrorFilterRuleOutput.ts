import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteTrafficMirrorFilterRuleOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TrafficMirrorFilterRuleId: {
      shape: {
        type: "string"
      },
      locationName: "trafficMirrorFilterRuleId"
    }
  }
};
