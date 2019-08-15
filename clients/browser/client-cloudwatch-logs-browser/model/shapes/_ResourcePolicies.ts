import { List as _List_ } from "@aws-sdk/types";
import { _ResourcePolicy } from "./_ResourcePolicy";

export const _ResourcePolicies: _List_ = {
  type: "list",
  member: {
    shape: _ResourcePolicy
  }
};
