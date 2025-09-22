// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _Ar, _FRGP, _PFRGP, _PFRGPR, _PFRGPRu, _RV, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var PutFirewallRuleGroupPolicyRequest = struct(n0, _PFRGPR, 0, [_Ar, _FRGP], [0, 0]);
export var PutFirewallRuleGroupPolicyResponse = struct(n0, _PFRGPRu, 0, [_RV], [2]);
export var PutFirewallRuleGroupPolicy = op(
  n0,
  _PFRGP,
  0,
  () => PutFirewallRuleGroupPolicyRequest,
  () => PutFirewallRuleGroupPolicyResponse
);
