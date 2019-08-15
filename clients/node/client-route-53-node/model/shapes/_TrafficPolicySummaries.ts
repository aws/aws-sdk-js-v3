import { List as _List_ } from "@aws-sdk/types";
import { _TrafficPolicySummary } from "./_TrafficPolicySummary";

export const _TrafficPolicySummaries: _List_ = {
  type: "list",
  member: {
    shape: _TrafficPolicySummary,
    locationName: "TrafficPolicySummary"
  }
};
