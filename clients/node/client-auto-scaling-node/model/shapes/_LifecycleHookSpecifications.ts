import { List as _List_ } from "@aws-sdk/types";
import { _LifecycleHookSpecification } from "./_LifecycleHookSpecification";

export const _LifecycleHookSpecifications: _List_ = {
  type: "list",
  member: {
    shape: _LifecycleHookSpecification
  }
};
