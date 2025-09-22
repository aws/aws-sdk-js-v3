// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _ARPD,
  _ARPN,
  _aRPS,
  _ARPSu,
  _ARPSut,
  _cA,
  _d,
  _hQ,
  _ht,
  _LARP,
  _LARPR,
  _LARPRi,
  _mR,
  _n,
  _nT,
  _pA,
  _pI,
  _uA,
  _ve,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AutomatedReasoningPolicyDescription = sim(n0, _ARPD, 0, 8);
export var AutomatedReasoningPolicyName = sim(n0, _ARPN, 0, 8);
export var AutomatedReasoningPolicySummary = struct(
  n0,
  _ARPSu,
  0,
  [_pA, _n, _d, _ve, _pI, _cA, _uA],
  [0, [() => AutomatedReasoningPolicyName, 0], [() => AutomatedReasoningPolicyDescription, 0], 0, 0, 5, 5]
);
export var ListAutomatedReasoningPoliciesRequest = struct(
  n0,
  _LARPR,
  0,
  [_pA, _nT, _mR],
  [
    [
      0,
      {
        [_hQ]: _pA,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListAutomatedReasoningPoliciesResponse = struct(
  n0,
  _LARPRi,
  0,
  [_aRPS, _nT],
  [[() => AutomatedReasoningPolicySummaries, 0], 0]
);
export var AutomatedReasoningPolicySummaries = list(n0, _ARPSut, 0, [() => AutomatedReasoningPolicySummary, 0]);
export var ListAutomatedReasoningPolicies = op(
  n0,
  _LARP,
  {
    [_ht]: ["GET", "/automated-reasoning-policies", 200],
  },
  () => ListAutomatedReasoningPoliciesRequest,
  () => ListAutomatedReasoningPoliciesResponse
);
