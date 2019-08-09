import { List as _List_ } from "@aws-sdk/types";
import { _AppCookieStickinessPolicy } from "./_AppCookieStickinessPolicy";

export const _AppCookieStickinessPolicies: _List_ = {
  type: "list",
  member: {
    shape: _AppCookieStickinessPolicy
  }
};
