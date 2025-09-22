// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { UnsupportedOperationException as __UnsupportedOperationException } from "../models/index";
import {
  _bPy,
  _bW,
  _c,
  _cAre,
  _cB,
  _CFE,
  _CFER,
  _CFERa,
  _cTa,
  _cTl,
  _d,
  _dCL,
  _dCT,
  _DF,
  _DFER,
  _DFERR,
  _DFERRe,
  _DFR,
  _DFRe,
  _dPET,
  _dPST,
  _e,
  _ED,
  _EI,
  _eI,
  _eIr,
  _eIx,
  _eM,
  _ER,
  _eR,
  _ERx,
  _eS,
  _f,
  _fA,
  _FD,
  _fD,
  _fE,
  _FEL,
  _FL,
  _fN,
  _fS,
  _h,
  _hE,
  _iE,
  _LF,
  _LFR,
  _LFRi,
  _lRED,
  _lUA,
  _lUB,
  _m,
  _MCD,
  _mCD,
  _MCDe,
  _mPS,
  _mR,
  _mREM,
  _mRES,
  _mRET,
  _nPP,
  _nT,
  _pFC,
  _pRO,
  _r,
  _RO,
  _rP,
  _sA,
  _sCL,
  _sCT,
  _SF,
  _SFR,
  _SFRt,
  _SFRto,
  _SFRtop,
  _SFt,
  _st,
  _ta,
  _tN,
  _tRO,
  _tT,
  _UOE,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CancelFlowExecutionsRequest = struct(n0, _CFER, 0, [_fN, _eI], [0, 64 | 0]);
export var CancelFlowExecutionsResponse = struct(n0, _CFERa, 0, [_iE], [64 | 0]);
export var DeleteFlowRequest = struct(n0, _DFR, 0, [_fN, _fD], [0, 2]);
export var DeleteFlowResponse = struct(n0, _DFRe, 0, [], []);
export var DescribeFlowExecutionRecordsRequest = struct(n0, _DFERR, 0, [_fN, _mR, _nT], [0, 1, 0]);
export var DescribeFlowExecutionRecordsResponse = struct(n0, _DFERRe, 0, [_fE, _nT], [() => FlowExecutionList, 0]);
export var ErrorInfo = struct(n0, _EI, 0, [_pFC, _eM], [1, 0]);
export var ExecutionDetails = struct(n0, _ED, 0, [_mREM, _mRET, _mRES], [0, 4, 0]);
export var ExecutionRecord = struct(
  n0,
  _ER,
  0,
  [_eIx, _eS, _eR, _sA, _lUA, _dPST, _dPET, _mCD],
  [0, 0, () => ExecutionResult, 4, 4, 4, 4, () => MetadataCatalogDetails]
);
export var ExecutionResult = struct(n0, _ERx, 0, [_eIr, _bPy, _bW, _rP, _nPP, _mPS], [() => ErrorInfo, 1, 1, 1, 1, 1]);
export var FlowDefinition = struct(
  n0,
  _FD,
  0,
  [_fA, _d, _fN, _fS, _sCT, _sCL, _dCT, _dCL, _tT, _cAre, _lUA, _cB, _lUB, _ta, _lRED],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 128 | 0, () => ExecutionDetails]
);
export var ListFlowsRequest = struct(n0, _LFR, 0, [_mR, _nT], [1, 0]);
export var ListFlowsResponse = struct(n0, _LFRi, 0, [_f, _nT], [() => FlowList, 0]);
export var MetadataCatalogDetail = struct(
  n0,
  _MCD,
  0,
  [_cTa, _tN, _tRO, _pRO],
  [0, 0, () => RegistrationOutput, () => RegistrationOutput]
);
export var RegistrationOutput = struct(n0, _RO, 0, [_m, _r, _st], [0, 0, 0]);
export var StartFlowRequest = struct(n0, _SFR, 0, [_fN, _cTl], [0, [0, 4]]);
export var StartFlowResponse = struct(n0, _SFRt, 0, [_fA, _fS, _eIx], [0, 0, 0]);
export var StopFlowRequest = struct(n0, _SFRto, 0, [_fN], [0]);
export var StopFlowResponse = struct(n0, _SFRtop, 0, [_fA, _fS], [0, 0]);
export var UnsupportedOperationException = error(
  n0,
  _UOE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __UnsupportedOperationException
);
export var ExecutionIds = 64 | 0;

export var FlowExecutionList = list(n0, _FEL, 0, () => ExecutionRecord);
export var FlowList = list(n0, _FL, 0, () => FlowDefinition);
export var MetadataCatalogDetails = list(n0, _MCDe, 0, () => MetadataCatalogDetail);
export var CancelFlowExecutions = op(
  n0,
  _CFE,
  {
    [_h]: ["POST", "/cancel-flow-executions", 200],
  },
  () => CancelFlowExecutionsRequest,
  () => CancelFlowExecutionsResponse
);
export var DeleteFlow = op(
  n0,
  _DF,
  {
    [_h]: ["POST", "/delete-flow", 200],
  },
  () => DeleteFlowRequest,
  () => DeleteFlowResponse
);
export var DescribeFlowExecutionRecords = op(
  n0,
  _DFER,
  {
    [_h]: ["POST", "/describe-flow-execution-records", 200],
  },
  () => DescribeFlowExecutionRecordsRequest,
  () => DescribeFlowExecutionRecordsResponse
);
export var ListFlows = op(
  n0,
  _LF,
  {
    [_h]: ["POST", "/list-flows", 200],
  },
  () => ListFlowsRequest,
  () => ListFlowsResponse
);
export var StartFlow = op(
  n0,
  _SF,
  {
    [_h]: ["POST", "/start-flow", 200],
  },
  () => StartFlowRequest,
  () => StartFlowResponse
);
export var StopFlow = op(
  n0,
  _SFt,
  {
    [_h]: ["POST", "/stop-flow", 200],
  },
  () => StopFlowRequest,
  () => StopFlowResponse
);
