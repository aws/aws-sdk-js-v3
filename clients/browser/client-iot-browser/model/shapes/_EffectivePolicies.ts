import { List as _List_ } from "@aws-sdk/types";
import { _EffectivePolicy } from "./_EffectivePolicy";

export const _EffectivePolicies: _List_ = {
  type: "list",
  member: {
    shape: _EffectivePolicy
  }
};
