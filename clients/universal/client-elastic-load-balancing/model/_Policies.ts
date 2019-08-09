import { _AppCookieStickinessPolicies } from "./_AppCookieStickinessPolicies";
import { _LBCookieStickinessPolicies } from "./_LBCookieStickinessPolicies";
import { _PolicyNames } from "./_PolicyNames";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Policies: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AppCookieStickinessPolicies: {
      shape: _AppCookieStickinessPolicies
    },
    LBCookieStickinessPolicies: {
      shape: _LBCookieStickinessPolicies
    },
    OtherPolicies: {
      shape: _PolicyNames
    }
  }
};
