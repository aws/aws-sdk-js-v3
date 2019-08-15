import { List as _List_ } from "@aws-sdk/types";
import { _TrafficMirrorFilterRule } from "./_TrafficMirrorFilterRule";

export const _TrafficMirrorFilterRuleList: _List_ = {
  type: "list",
  member: {
    shape: _TrafficMirrorFilterRule,
    locationName: "item"
  }
};
