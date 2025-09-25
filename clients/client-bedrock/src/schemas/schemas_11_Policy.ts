// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _ARPTC,
  _ARPTCL,
  _ARPTGC,
  _ARPTQC,
  _bWI,
  _cA,
  _CARPTC,
  _CARPTCR,
  _CARPTCRr,
  _cRT,
  _cT,
  _DARPTC,
  _DARPTCR,
  _DARPTCRe,
  _eAFR,
  _GARPTC,
  _GARPTCR,
  _GARPTCRe,
  _gC,
  _hQ,
  _ht,
  _LARPTC,
  _LARPTCR,
  _LARPTCRi,
  _lUA,
  _mR,
  _nT,
  _pA,
  _qC,
  _SARPTW,
  _SARPTWR,
  _SARPTWRt,
  _tCe,
  _tCes,
  _tCI,
  _tCIe,
  _uA,
  _UARPTC,
  _UARPTCR,
  _UARPTCRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AutomatedReasoningPolicyTestGuardContent = sim(n0, _ARPTGC, 0, 8);
export var AutomatedReasoningPolicyTestQueryContent = sim(n0, _ARPTQC, 0, 8);
export var AutomatedReasoningPolicyTestCase = struct(
  n0,
  _ARPTC,
  0,
  [_tCI, _gC, _qC, _eAFR, _cA, _uA, _cT],
  [
    0,
    [() => AutomatedReasoningPolicyTestGuardContent, 0],
    [() => AutomatedReasoningPolicyTestQueryContent, 0],
    0,
    5,
    5,
    1,
  ]
);
export var CreateAutomatedReasoningPolicyTestCaseRequest = struct(
  n0,
  _CARPTCR,
  0,
  [_pA, _gC, _qC, _eAFR, _cRT, _cT],
  [
    [0, 1],
    [() => AutomatedReasoningPolicyTestGuardContent, 0],
    [() => AutomatedReasoningPolicyTestQueryContent, 0],
    0,
    [0, 4],
    1,
  ]
);
export var CreateAutomatedReasoningPolicyTestCaseResponse = struct(n0, _CARPTCRr, 0, [_pA, _tCI], [0, 0]);
export var DeleteAutomatedReasoningPolicyTestCaseRequest = struct(
  n0,
  _DARPTCR,
  0,
  [_pA, _tCI, _lUA],
  [
    [0, 1],
    [0, 1],
    [
      5,
      {
        [_hQ]: _uA,
      },
    ],
  ]
);
export var DeleteAutomatedReasoningPolicyTestCaseResponse = struct(n0, _DARPTCRe, 0, [], []);
export var GetAutomatedReasoningPolicyTestCaseRequest = struct(
  n0,
  _GARPTCR,
  0,
  [_pA, _tCI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetAutomatedReasoningPolicyTestCaseResponse = struct(
  n0,
  _GARPTCRe,
  0,
  [_pA, _tCe],
  [0, [() => AutomatedReasoningPolicyTestCase, 0]]
);
export var ListAutomatedReasoningPolicyTestCasesRequest = struct(
  n0,
  _LARPTCR,
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
export var ListAutomatedReasoningPolicyTestCasesResponse = struct(
  n0,
  _LARPTCRi,
  0,
  [_tCes, _nT],
  [[() => AutomatedReasoningPolicyTestCaseList, 0], 0]
);
export var StartAutomatedReasoningPolicyTestWorkflowRequest = struct(
  n0,
  _SARPTWR,
  0,
  [_pA, _bWI, _tCIe, _cRT],
  [[0, 1], [0, 1], 64 | 0, [0, 4]]
);
export var StartAutomatedReasoningPolicyTestWorkflowResponse = struct(n0, _SARPTWRt, 0, [_pA], [0]);
export var UpdateAutomatedReasoningPolicyTestCaseRequest = struct(
  n0,
  _UARPTCR,
  0,
  [_pA, _tCI, _gC, _qC, _lUA, _eAFR, _cT, _cRT],
  [
    [0, 1],
    [0, 1],
    [() => AutomatedReasoningPolicyTestGuardContent, 0],
    [() => AutomatedReasoningPolicyTestQueryContent, 0],
    5,
    0,
    1,
    [0, 4],
  ]
);
export var UpdateAutomatedReasoningPolicyTestCaseResponse = struct(n0, _UARPTCRp, 0, [_pA, _tCI], [0, 0]);
export var AutomatedReasoningPolicyTestCaseIdList = 64 | 0;

export var AutomatedReasoningPolicyTestCaseList = list(n0, _ARPTCL, 0, [() => AutomatedReasoningPolicyTestCase, 0]);
export var CreateAutomatedReasoningPolicyTestCase = op(
  n0,
  _CARPTC,
  {
    [_ht]: ["POST", "/automated-reasoning-policies/{policyArn}/test-cases", 200],
  },
  () => CreateAutomatedReasoningPolicyTestCaseRequest,
  () => CreateAutomatedReasoningPolicyTestCaseResponse
);
export var DeleteAutomatedReasoningPolicyTestCase = op(
  n0,
  _DARPTC,
  {
    [_ht]: ["DELETE", "/automated-reasoning-policies/{policyArn}/test-cases/{testCaseId}", 202],
  },
  () => DeleteAutomatedReasoningPolicyTestCaseRequest,
  () => DeleteAutomatedReasoningPolicyTestCaseResponse
);
export var GetAutomatedReasoningPolicyTestCase = op(
  n0,
  _GARPTC,
  {
    [_ht]: ["GET", "/automated-reasoning-policies/{policyArn}/test-cases/{testCaseId}", 200],
  },
  () => GetAutomatedReasoningPolicyTestCaseRequest,
  () => GetAutomatedReasoningPolicyTestCaseResponse
);
export var ListAutomatedReasoningPolicyTestCases = op(
  n0,
  _LARPTC,
  {
    [_ht]: ["GET", "/automated-reasoning-policies/{policyArn}/test-cases", 200],
  },
  () => ListAutomatedReasoningPolicyTestCasesRequest,
  () => ListAutomatedReasoningPolicyTestCasesResponse
);
export var StartAutomatedReasoningPolicyTestWorkflow = op(
  n0,
  _SARPTW,
  {
    [_ht]: ["POST", "/automated-reasoning-policies/{policyArn}/build-workflows/{buildWorkflowId}/test-workflows", 200],
  },
  () => StartAutomatedReasoningPolicyTestWorkflowRequest,
  () => StartAutomatedReasoningPolicyTestWorkflowResponse
);
export var UpdateAutomatedReasoningPolicyTestCase = op(
  n0,
  _UARPTC,
  {
    [_ht]: ["PATCH", "/automated-reasoning-policies/{policyArn}/test-cases/{testCaseId}", 200],
  },
  () => UpdateAutomatedReasoningPolicyTestCaseRequest,
  () => UpdateAutomatedReasoningPolicyTestCaseResponse
);
