import { List as _List_ } from "@aws-sdk/types";
import { _ManagedPolicyDetail } from "./_ManagedPolicyDetail";

export const _ManagedPolicyDetailListType: _List_ = {
  type: "list",
  member: {
    shape: _ManagedPolicyDetail
  }
};
