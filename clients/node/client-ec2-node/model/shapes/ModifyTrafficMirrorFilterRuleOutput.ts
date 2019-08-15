import { _TrafficMirrorFilterRule } from "./_TrafficMirrorFilterRule";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyTrafficMirrorFilterRuleOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TrafficMirrorFilterRule: {
      shape: _TrafficMirrorFilterRule,
      locationName: "trafficMirrorFilterRule"
    }
  }
};
