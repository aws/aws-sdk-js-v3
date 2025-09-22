// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AFP, _AFPR, _AFPRs, _FAi, _FN, _FPA, _UT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AssociateFirewallPolicyRequest = struct(n0, _AFPR, 0, [_UT, _FAi, _FN, _FPA], [0, 0, 0, 0]);
export var AssociateFirewallPolicyResponse = struct(n0, _AFPRs, 0, [_FAi, _FN, _FPA, _UT], [0, 0, 0, 0]);
export var AssociateFirewallPolicy = op(
  n0,
  _AFP,
  0,
  () => AssociateFirewallPolicyRequest,
  () => AssociateFirewallPolicyResponse
);
