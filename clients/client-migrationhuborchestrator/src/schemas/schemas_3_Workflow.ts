// smithy-typescript generated code
import { list, map, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _a,
  _aACI,
  _aAN,
  _aCI,
  _CMWR,
  _CMWRr,
  _co,
  _cS,
  _cT,
  _CW,
  _CWS,
  _CWSR,
  _CWSRr,
  _d,
  _dT,
  _eT,
  _GMWR,
  _GMWRe,
  _GW,
  _GWS,
  _GWSR,
  _GWSRe,
  _hQ,
  _ht,
  _i,
  _iP,
  _iV,
  _lMT,
  _lOSV,
  _lOSVi,
  _lST,
  _lSTa,
  _LWS,
  _LWSR,
  _LWSRi,
  _mOSV,
  _mR,
  _n,
  _ne,
  _nOSC,
  _nOSF,
  _nT,
  _o,
  _ow,
  _p,
  _r,
  _rE,
  _s,
  _sAT,
  _sGI,
  _SI,
  _sI,
  _SIP,
  _sL,
  _sLSB,
  _sLSK,
  _sM,
  _sOL,
  _sT,
  _sTt,
  _sV,
  _t,
  _tI,
  _tNOS,
  _to,
  _tSo,
  _tT,
  _UMWR,
  _UMWRp,
  _UW,
  _UWS,
  _UWSR,
  _UWSRp,
  _va,
  _wB,
  _wI,
  _wIo,
  _WSAC,
  _wSAC,
  _WSO,
  _WSOL,
  _WSOU,
  _WSS,
  _wSS,
  _WSSL,
  n0,
} from "./schemas_0";
import { ToolsList } from "./schemas_10_Group";
import { PlatformCommand, PlatformScriptKey } from "./schemas_13_Step";

/* eslint no-var: 0 */

export var CreateMigrationWorkflowRequest = struct(
  n0,
  _CMWR,
  0,
  [_n, _d, _tI, _aCI, _iP, _sT, _t],
  [0, 0, 0, 0, [() => StepInputParameters, 0], 64 | 0, 128 | 0]
);
export var CreateMigrationWorkflowResponse = struct(
  n0,
  _CMWRr,
  0,
  [_i, _a, _n, _d, _tI, _aACI, _wI, _sT, _s, _cT, _t],
  [0, 0, 0, 0, 0, 0, [() => StepInputParameters, 0], 64 | 0, 0, 4, 128 | 0]
);
export var CreateWorkflowStepRequest = struct(
  n0,
  _CWSR,
  0,
  [_n, _sGI, _wIo, _sAT, _d, _wSAC, _sTt, _o, _p, _ne],
  [0, 0, 0, 0, 0, () => WorkflowStepAutomationConfiguration, 64 | 0, () => WorkflowStepOutputList, 64 | 0, 64 | 0]
);
export var CreateWorkflowStepResponse = struct(n0, _CWSRr, 0, [_i, _sGI, _wIo, _n], [0, 0, 0, 0]);
export var GetMigrationWorkflowRequest = struct(n0, _GMWR, 0, [_i], [[0, 1]]);
export var GetMigrationWorkflowResponse = struct(
  n0,
  _GMWRe,
  0,
  [_i, _a, _n, _d, _tI, _aACI, _aAN, _s, _sM, _cT, _lST, _lSTa, _lMT, _eT, _to, _tSo, _cS, _wI, _t, _wB],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, () => ToolsList, 1, 1, [() => StepInputParameters, 0], 128 | 0, 0]
);
export var GetWorkflowStepRequest = struct(
  n0,
  _GWSR,
  0,
  [_wIo, _sGI, _i],
  [
    [
      0,
      {
        [_hQ]: _wIo,
      },
    ],
    [
      0,
      {
        [_hQ]: _sGI,
      },
    ],
    [0, 1],
  ]
);
export var GetWorkflowStepResponse = struct(
  n0,
  _GWSRe,
  0,
  [_n, _sGI, _wIo, _sI, _d, _sAT, _ow, _wSAC, _sTt, _o, _p, _ne, _s, _sM, _sOL, _cT, _lST, _eT, _nOSC, _nOSF, _tNOS],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    () => WorkflowStepAutomationConfiguration,
    64 | 0,
    () => WorkflowStepOutputList,
    64 | 0,
    64 | 0,
    0,
    0,
    0,
    4,
    4,
    4,
    1,
    1,
    1,
  ]
);
export var ListWorkflowStepsRequest = struct(
  n0,
  _LWSR,
  0,
  [_nT, _mR, _wIo, _sGI],
  [
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
    [0, 1],
    [0, 1],
  ]
);
export var ListWorkflowStepsResponse = struct(n0, _LWSRi, 0, [_nT, _wSS], [0, () => WorkflowStepsSummaryList]);
export var UpdateMigrationWorkflowRequest = struct(
  n0,
  _UMWR,
  0,
  [_i, _n, _d, _iP, _sT],
  [[0, 1], 0, 0, [() => StepInputParameters, 0], 64 | 0]
);
export var UpdateMigrationWorkflowResponse = struct(
  n0,
  _UMWRp,
  0,
  [_i, _a, _n, _d, _tI, _aACI, _wI, _sT, _s, _cT, _lMT, _t],
  [0, 0, 0, 0, 0, 0, [() => StepInputParameters, 0], 64 | 0, 0, 4, 4, 128 | 0]
);
export var UpdateWorkflowStepRequest = struct(
  n0,
  _UWSR,
  0,
  [_i, _sGI, _wIo, _n, _d, _sAT, _wSAC, _sTt, _o, _p, _ne, _s],
  [
    [0, 1],
    0,
    0,
    0,
    0,
    0,
    () => WorkflowStepAutomationConfiguration,
    64 | 0,
    () => WorkflowStepOutputList,
    64 | 0,
    64 | 0,
    0,
  ]
);
export var UpdateWorkflowStepResponse = struct(n0, _UWSRp, 0, [_i, _sGI, _wIo, _n], [0, 0, 0, 0]);
export var WorkflowStepAutomationConfiguration = struct(
  n0,
  _WSAC,
  0,
  [_sLSB, _sLSK, _co, _rE, _tT],
  [0, () => PlatformScriptKey, () => PlatformCommand, 0, 0]
);
export var WorkflowStepOutput = struct(n0, _WSO, 0, [_n, _dT, _r, _va], [0, 0, 2, () => WorkflowStepOutputUnion]);
export var WorkflowStepSummary = struct(
  n0,
  _WSS,
  0,
  [_sI, _n, _sAT, _ow, _p, _ne, _s, _sM, _nOSC, _nOSF, _tNOS, _d, _sL],
  [0, 0, 0, 0, 64 | 0, 64 | 0, 0, 0, 1, 1, 1, 0, 0]
);
export var MaxStringList = 64 | 0;

export var WorkflowStepOutputList = list(n0, _WSOL, 0, () => WorkflowStepOutput);
export var WorkflowStepsSummaryList = list(n0, _WSSL, 0, () => WorkflowStepSummary);
export var StepInputParameters = map(n0, _SIP, 8, 0, () => StepInput);
export var StepInput = uni(n0, _SI, 0, [_iV, _sV, _lOSV, _mOSV], [1, 0, 64 | 0, 128 | 0]);
export var WorkflowStepOutputUnion = uni(n0, _WSOU, 0, [_iV, _sV, _lOSVi], [1, 0, 64 | 0]);
export var CreateWorkflow = op(
  n0,
  _CW,
  {
    [_ht]: ["POST", "/migrationworkflow/", 200],
  },
  () => CreateMigrationWorkflowRequest,
  () => CreateMigrationWorkflowResponse
);
export var CreateWorkflowStep = op(
  n0,
  _CWS,
  {
    [_ht]: ["POST", "/workflowstep", 200],
  },
  () => CreateWorkflowStepRequest,
  () => CreateWorkflowStepResponse
);
export var GetWorkflow = op(
  n0,
  _GW,
  {
    [_ht]: ["GET", "/migrationworkflow/{id}", 200],
  },
  () => GetMigrationWorkflowRequest,
  () => GetMigrationWorkflowResponse
);
export var GetWorkflowStep = op(
  n0,
  _GWS,
  {
    [_ht]: ["GET", "/workflowstep/{id}", 200],
  },
  () => GetWorkflowStepRequest,
  () => GetWorkflowStepResponse
);
export var ListWorkflowSteps = op(
  n0,
  _LWS,
  {
    [_ht]: ["GET", "/workflow/{workflowId}/workflowstepgroups/{stepGroupId}/workflowsteps", 200],
  },
  () => ListWorkflowStepsRequest,
  () => ListWorkflowStepsResponse
);
export var UpdateWorkflow = op(
  n0,
  _UW,
  {
    [_ht]: ["POST", "/migrationworkflow/{id}", 200],
  },
  () => UpdateMigrationWorkflowRequest,
  () => UpdateMigrationWorkflowResponse
);
export var UpdateWorkflowStep = op(
  n0,
  _UWS,
  {
    [_ht]: ["POST", "/workflowstep/{id}", 200],
  },
  () => UpdateWorkflowStepRequest,
  () => UpdateWorkflowStepResponse
);
