import { List as _List_ } from "@aws-sdk/types";
import { _LBCookieStickinessPolicy } from "./_LBCookieStickinessPolicy";

export const _LBCookieStickinessPolicies: _List_ = {
  type: "list",
  member: {
    shape: _LBCookieStickinessPolicy
  }
};
