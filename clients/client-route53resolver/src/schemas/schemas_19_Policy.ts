// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _Ar, _FRGP, _GFRGP, _GFRGPR, _GFRGPRe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetFirewallRuleGroupPolicyRequest = struct(n0, _GFRGPR, 0, [_Ar], [0]);
export var GetFirewallRuleGroupPolicyResponse = struct(n0, _GFRGPRe, 0, [_FRGP], [0]);
export var GetFirewallRuleGroupPolicy = op(
  n0,
  _GFRGP,
  0,
  () => GetFirewallRuleGroupPolicyRequest,
  () => GetFirewallRuleGroupPolicyResponse
);
