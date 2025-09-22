// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _ac,
  _cD,
  _d,
  _da,
  _dC,
  _dV,
  _eT,
  _GW,
  _GWR,
  _GWRe,
  _GWSE,
  _GWSER,
  _GWSERe,
  _hQ,
  _ht,
  _iBVA,
  _in,
  _kKI,
  _LWSE,
  _LWSER,
  _LWSERi,
  _LWWS,
  _LWWSR,
  _LWWSRi,
  _m,
  _mR,
  _n,
  _nT,
  _o,
  _oF,
  _ou,
  _pa,
  _rI,
  _rSo,
  _s,
  _sEI,
  _sT,
  _st,
  _ste,
  _t,
  _ta,
  _tS,
  _v,
  _W,
  _wBVA,
  _wEI,
  _wo,
  _WPD,
  _WPDL,
  _WSE,
  _WSEL,
  _WSELo,
  _WSM,
  n0,
} from "./schemas_0";
import { WorkflowState } from "./schemas_11_Workflow";

/* eslint no-var: 0 */

export var GetWorkflowRequest = struct(
  n0,
  _GWR,
  0,
  [_wBVA],
  [
    [
      0,
      {
        [_hQ]: _wBVA,
      },
    ],
  ]
);
export var GetWorkflowResponse = struct(n0, _GWRe, 0, [_wo], [() => Workflow]);
export var GetWorkflowStepExecutionRequest = struct(
  n0,
  _GWSER,
  0,
  [_sEI],
  [
    [
      0,
      {
        [_hQ]: _sEI,
      },
    ],
  ]
);
export var GetWorkflowStepExecutionResponse = struct(
  n0,
  _GWSERe,
  0,
  [_rI, _sEI, _wBVA, _wEI, _iBVA, _n, _d, _ac, _st, _rSo, _m, _in, _ou, _sT, _eT, _oF, _tS],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
);
export var ListWaitingWorkflowStepsRequest = struct(n0, _LWWSR, 0, [_mR, _nT], [1, 0]);
export var ListWaitingWorkflowStepsResponse = struct(n0, _LWWSRi, 0, [_ste, _nT], [() => WorkflowStepExecutionList, 0]);
export var ListWorkflowStepExecutionsRequest = struct(n0, _LWSER, 0, [_mR, _nT, _wEI], [1, 0, 0]);
export var ListWorkflowStepExecutionsResponse = struct(
  n0,
  _LWSERi,
  0,
  [_rI, _ste, _wBVA, _wEI, _iBVA, _m, _nT],
  [0, () => WorkflowStepExecutionsList, 0, 0, 0, 0, 0]
);
export var Workflow = struct(
  n0,
  _W,
  0,
  [_a, _n, _v, _d, _cD, _t, _s, _o, _da, _kKI, _dC, _ta, _pa],
  [0, 0, 0, 0, 0, 0, () => WorkflowState, 0, 0, 0, 0, 128 | 0, () => WorkflowParameterDetailList]
);
export var WorkflowParameterDetail = struct(n0, _WPD, 0, [_n, _t, _dV, _d], [0, 0, 64 | 0, 0]);
export var WorkflowStepExecution = struct(n0, _WSE, 0, [_sEI, _iBVA, _wEI, _wBVA, _n, _ac, _sT], [0, 0, 0, 0, 0, 0, 0]);
export var WorkflowStepMetadata = struct(
  n0,
  _WSM,
  0,
  [_sEI, _n, _d, _ac, _st, _rSo, _m, _in, _ou, _sT, _eT],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
);
export var WorkflowParameterDetailList = list(n0, _WPDL, 0, () => WorkflowParameterDetail);
export var WorkflowStepExecutionList = list(n0, _WSEL, 0, () => WorkflowStepExecution);
export var WorkflowStepExecutionsList = list(n0, _WSELo, 0, () => WorkflowStepMetadata);
export var GetWorkflow = op(
  n0,
  _GW,
  {
    [_ht]: ["GET", "/GetWorkflow", 200],
  },
  () => GetWorkflowRequest,
  () => GetWorkflowResponse
);
export var GetWorkflowStepExecution = op(
  n0,
  _GWSE,
  {
    [_ht]: ["GET", "/GetWorkflowStepExecution", 200],
  },
  () => GetWorkflowStepExecutionRequest,
  () => GetWorkflowStepExecutionResponse
);
export var ListWaitingWorkflowSteps = op(
  n0,
  _LWWS,
  {
    [_ht]: ["POST", "/ListWaitingWorkflowSteps", 200],
  },
  () => ListWaitingWorkflowStepsRequest,
  () => ListWaitingWorkflowStepsResponse
);
export var ListWorkflowStepExecutions = op(
  n0,
  _LWSE,
  {
    [_ht]: ["POST", "/ListWorkflowStepExecutions", 200],
  },
  () => ListWorkflowStepExecutionsRequest,
  () => ListWorkflowStepExecutionsResponse
);
