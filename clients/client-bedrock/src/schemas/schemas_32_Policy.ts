// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _cA,
  _CARPV,
  _CARPVR,
  _CARPVRr,
  _cRT,
  _d,
  _dH,
  _GARPe,
  _GARPR,
  _GARPRe,
  _ht,
  _lUDH,
  _n,
  _pA,
  _pI,
  _ta,
  _uA,
  _ve,
  n0,
  TagList,
} from "./schemas_0";
import { AutomatedReasoningPolicyDescription, AutomatedReasoningPolicyName } from "./schemas_35_Automated";

/* eslint no-var: 0 */

export var CreateAutomatedReasoningPolicyVersionRequest = struct(
  n0,
  _CARPVR,
  0,
  [_pA, _cRT, _lUDH, _ta],
  [[0, 1], [0, 4], 0, () => TagList]
);
export var CreateAutomatedReasoningPolicyVersionResponse = struct(
  n0,
  _CARPVRr,
  0,
  [_pA, _ve, _n, _d, _dH, _cA],
  [0, 0, [() => AutomatedReasoningPolicyName, 0], [() => AutomatedReasoningPolicyDescription, 0], 0, 5]
);
export var GetAutomatedReasoningPolicyRequest = struct(n0, _GARPR, 0, [_pA], [[0, 1]]);
export var GetAutomatedReasoningPolicyResponse = struct(
  n0,
  _GARPRe,
  0,
  [_pA, _n, _ve, _pI, _d, _dH, _cA, _uA],
  [0, [() => AutomatedReasoningPolicyName, 0], 0, 0, [() => AutomatedReasoningPolicyDescription, 0], 0, 5, 5]
);
export var CreateAutomatedReasoningPolicyVersion = op(
  n0,
  _CARPV,
  {
    [_ht]: ["POST", "/automated-reasoning-policies/{policyArn}/versions", 200],
  },
  () => CreateAutomatedReasoningPolicyVersionRequest,
  () => CreateAutomatedReasoningPolicyVersionResponse
);
export var GetAutomatedReasoningPolicy = op(
  n0,
  _GARPe,
  {
    [_ht]: ["GET", "/automated-reasoning-policies/{policyArn}", 200],
  },
  () => GetAutomatedReasoningPolicyRequest,
  () => GetAutomatedReasoningPolicyResponse
);
