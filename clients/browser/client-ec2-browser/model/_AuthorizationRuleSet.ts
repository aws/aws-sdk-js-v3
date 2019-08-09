import { List as _List_ } from "@aws-sdk/types";
import { _AuthorizationRule } from "./_AuthorizationRule";

export const _AuthorizationRuleSet: _List_ = {
  type: "list",
  member: {
    shape: _AuthorizationRule,
    locationName: "item"
  }
};
