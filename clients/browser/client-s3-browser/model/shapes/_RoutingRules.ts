import { List as _List_ } from "@aws-sdk/types";
import { _RoutingRule } from "./_RoutingRule";

export const _RoutingRules: _List_ = {
  type: "list",
  member: {
    shape: _RoutingRule,
    locationName: "RoutingRule"
  }
};
