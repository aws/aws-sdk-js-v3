import { List as _List_ } from "@aws-sdk/types";
import { _Entitlement } from "./_Entitlement";

export const _EntitlementList: _List_ = {
  type: "list",
  member: {
    shape: _Entitlement
  }
};
