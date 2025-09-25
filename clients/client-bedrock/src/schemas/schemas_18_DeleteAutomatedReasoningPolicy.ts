// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DARP, _DARPR, _DARPRe, _ht, _pA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteAutomatedReasoningPolicyRequest = struct(n0, _DARPR, 0, [_pA], [[0, 1]]);
export var DeleteAutomatedReasoningPolicyResponse = struct(n0, _DARPRe, 0, [], []);
export var DeleteAutomatedReasoningPolicy = op(
  n0,
  _DARP,
  {
    [_ht]: ["DELETE", "/automated-reasoning-policies/{policyArn}", 202],
  },
  () => DeleteAutomatedReasoningPolicyRequest,
  () => DeleteAutomatedReasoningPolicyResponse
);
