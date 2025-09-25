// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  ActionExecutionNotFoundException as __ActionExecutionNotFoundException,
  ActionNotFoundException as __ActionNotFoundException,
  ApprovalAlreadyCompletedException as __ApprovalAlreadyCompletedException,
  InvalidApprovalTokenException as __InvalidApprovalTokenException,
} from "../models/index";
import {
  _AACE,
  _aAp,
  _aEI,
  _AENFE,
  _aN,
  _ANFE,
  _ARp,
  _cl,
  _cont,
  _cr,
  _DAET,
  _DAETL,
  _DTE,
  _DTEC,
  _DTEL,
  _e,
  _eMx,
  _eT,
  _ev,
  _fi,
  _IATE,
  _LDAET,
  _LDAETI,
  _LDAETO,
  _LP,
  _LPI,
  _LPO,
  _m,
  _mR,
  _na,
  _nT,
  _PARIu,
  _PAROu,
  _PARu,
  _pip,
  _PL,
  _pN,
  _PS,
  _pT,
  _res,
  _s,
  _sCI,
  _sN,
  _sT,
  _su,
  _tar,
  _TF,
  _TFL,
  _tI,
  _to,
  _tT,
  _up,
  _v,
  _val,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ActionExecutionNotFoundException = error(
  n0,
  _AENFE,
  {
    [_e]: _cl,
  },
  [_m],
  [0],

  __ActionExecutionNotFoundException
);
export var ActionNotFoundException = error(
  n0,
  _ANFE,
  {
    [_e]: _cl,
  },
  [_m],
  [0],

  __ActionNotFoundException
);
export var ApprovalAlreadyCompletedException = error(
  n0,
  _AACE,
  {
    [_e]: _cl,
  },
  [_m],
  [0],

  __ApprovalAlreadyCompletedException
);
export var ApprovalResult = struct(n0, _ARp, 0, [_su, _s], [0, 0]);
export var DeployActionExecutionTarget = struct(
  n0,
  _DAET,
  0,
  [_tI, _tT, _s, _sT, _eT, _ev],
  [0, 0, 0, 4, 4, () => DeployTargetEventList]
);
export var DeployTargetEvent = struct(
  n0,
  _DTE,
  0,
  [_na, _s, _sT, _eT, _cont],
  [0, 0, 4, 4, () => DeployTargetEventContext]
);
export var DeployTargetEventContext = struct(n0, _DTEC, 0, [_sCI, _m], [0, 0]);
export var InvalidApprovalTokenException = error(
  n0,
  _IATE,
  {
    [_e]: _cl,
  },
  [_m],
  [0],

  __InvalidApprovalTokenException
);
export var ListDeployActionExecutionTargetsInput = struct(
  n0,
  _LDAETI,
  0,
  [_pN, _aEI, _fi, _mR, _nT],
  [0, 0, () => TargetFilterList, 1, 0]
);
export var ListDeployActionExecutionTargetsOutput = struct(
  n0,
  _LDAETO,
  0,
  [_tar, _nT],
  [() => DeployActionExecutionTargetList, 0]
);
export var ListPipelinesInput = struct(n0, _LPI, 0, [_nT, _mR], [0, 1]);
export var ListPipelinesOutput = struct(n0, _LPO, 0, [_pip, _nT], [() => PipelineList, 0]);
export var PipelineSummary = struct(n0, _PS, 0, [_na, _v, _pT, _eMx, _cr, _up], [0, 1, 0, 0, 4, 4]);
export var PutApprovalResultInput = struct(
  n0,
  _PARIu,
  0,
  [_pN, _sN, _aN, _res, _to],
  [0, 0, 0, () => ApprovalResult, 0]
);
export var PutApprovalResultOutput = struct(n0, _PAROu, 0, [_aAp], [4]);
export var TargetFilter = struct(n0, _TF, 0, [_na, _val], [0, 64 | 0]);
export var DeployActionExecutionTargetList = list(n0, _DAETL, 0, () => DeployActionExecutionTarget);
export var DeployTargetEventList = list(n0, _DTEL, 0, () => DeployTargetEvent);
export var PipelineList = list(n0, _PL, 0, () => PipelineSummary);
export var TargetFilterList = list(n0, _TFL, 0, () => TargetFilter);
export var TargetFilterValueList = 64 | 0;

export var ListDeployActionExecutionTargets = op(
  n0,
  _LDAET,
  0,
  () => ListDeployActionExecutionTargetsInput,
  () => ListDeployActionExecutionTargetsOutput
);
export var ListPipelines = op(
  n0,
  _LP,
  0,
  () => ListPipelinesInput,
  () => ListPipelinesOutput
);
export var PutApprovalResult = op(
  n0,
  _PARu,
  0,
  () => PutApprovalResultInput,
  () => PutApprovalResultOutput
);
