import { List as _List_ } from "@aws-sdk/types";
import { _LifecyclePolicy } from "./_LifecyclePolicy";

export const _LifecyclePolicies: _List_ = {
  type: "list",
  member: {
    shape: _LifecyclePolicy
  }
};
