// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _ARPBDD,
  _ARPBDN,
  _aRPBWS,
  _ARPBWSu,
  _ARPBWSut,
  _bWI,
  _bWT,
  _cA,
  _dCT,
  _dD,
  _dN,
  _GARPBW,
  _GARPBWR,
  _GARPBWRe,
  _hQ,
  _ht,
  _LARPBW,
  _LARPBWR,
  _LARPBWRi,
  _mR,
  _nT,
  _pA,
  _s,
  _uA,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AutomatedReasoningPolicyBuildDocumentDescription = sim(n0, _ARPBDD, 0, 8);
export var AutomatedReasoningPolicyBuildDocumentName = sim(n0, _ARPBDN, 0, 8);
export var AutomatedReasoningPolicyBuildWorkflowSummary = struct(
  n0,
  _ARPBWSu,
  0,
  [_pA, _bWI, _s, _bWT, _cA, _uA],
  [0, 0, 0, 0, 5, 5]
);
export var GetAutomatedReasoningPolicyBuildWorkflowRequest = struct(
  n0,
  _GARPBWR,
  0,
  [_pA, _bWI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetAutomatedReasoningPolicyBuildWorkflowResponse = struct(
  n0,
  _GARPBWRe,
  0,
  [_pA, _bWI, _s, _bWT, _dN, _dCT, _dD, _cA, _uA],
  [
    0,
    0,
    0,
    0,
    [() => AutomatedReasoningPolicyBuildDocumentName, 0],
    0,
    [() => AutomatedReasoningPolicyBuildDocumentDescription, 0],
    5,
    5,
  ]
);
export var ListAutomatedReasoningPolicyBuildWorkflowsRequest = struct(
  n0,
  _LARPBWR,
  0,
  [_pA, _nT, _mR],
  [
    [0, 1],
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
export var ListAutomatedReasoningPolicyBuildWorkflowsResponse = struct(
  n0,
  _LARPBWRi,
  0,
  [_aRPBWS, _nT],
  [() => AutomatedReasoningPolicyBuildWorkflowSummaries, 0]
);
export var AutomatedReasoningPolicyBuildWorkflowSummaries = list(
  n0,
  _ARPBWSut,
  0,
  () => AutomatedReasoningPolicyBuildWorkflowSummary
);
export var GetAutomatedReasoningPolicyBuildWorkflow = op(
  n0,
  _GARPBW,
  {
    [_ht]: ["GET", "/automated-reasoning-policies/{policyArn}/build-workflows/{buildWorkflowId}", 200],
  },
  () => GetAutomatedReasoningPolicyBuildWorkflowRequest,
  () => GetAutomatedReasoningPolicyBuildWorkflowResponse
);
export var ListAutomatedReasoningPolicyBuildWorkflows = op(
  n0,
  _LARPBW,
  {
    [_ht]: ["GET", "/automated-reasoning-policies/{policyArn}/build-workflows", 200],
  },
  () => ListAutomatedReasoningPolicyBuildWorkflowsRequest,
  () => ListAutomatedReasoningPolicyBuildWorkflowsResponse
);
