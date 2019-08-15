import { List as _List_ } from "@aws-sdk/types";
import { _Policy } from "./_Policy";

export const _policyListType: _List_ = {
  type: "list",
  member: {
    shape: _Policy
  }
};
