import { List as _List_ } from "@aws-sdk/types";
import { _AttachedPolicy } from "./_AttachedPolicy";

export const _attachedPoliciesListType: _List_ = {
  type: "list",
  member: {
    shape: _AttachedPolicy
  }
};
