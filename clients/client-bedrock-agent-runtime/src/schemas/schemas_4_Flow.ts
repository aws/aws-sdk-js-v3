// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _aDE,
  _bGE,
  _cE,
  _cEKA,
  _cNo,
  _cNRT,
  _co,
  _cR,
  _de,
  _dFE,
  _do,
  _e,
  _eA,
  _eAn,
  _eI,
  _eIx,
  _er,
  _eRA,
  _eTn,
  _fAI,
  _FCE,
  _fCE,
  _FEE,
  _FEEl,
  _fEN,
  _FI,
  _fI,
  _FIC,
  _fie,
  _FIl,
  _FMTIC,
  _FMTIRE,
  _fMTIRE,
  _FOC,
  _FOE,
  _fOE,
  _FRSl,
  _FTC,
  _FTCl,
  _FTCNRE,
  _FTE,
  _fTE,
  _FTl,
  _FTNAE,
  _FTNIC,
  _FTNIE,
  _FTNIF,
  _FTNIFl,
  _FTNOC,
  _FTNOE,
  _FTNOF,
  _FTNOFl,
  _fV,
  _GEFS,
  _GEFSR,
  _GEFSRe,
  _GFE,
  _GFER,
  _GFERe,
  _h,
  _hH,
  _IFnv,
  _IFR,
  _IFRn,
  _inp,
  _iSE,
  _m,
  _MPC,
  _mPC,
  _nAT,
  _nIN,
  _nIT,
  _nN,
  _nON,
  _nOT,
  _nT,
  _oN,
  _pC,
  _rI,
  _rNFE,
  _rSe,
  _sAt,
  _sC,
  _SFE,
  _SFER,
  _SFERt,
  _SFERto,
  _SFERtop,
  _SFEt,
  _sN,
  _sQEE,
  _st,
  _stre,
  _tE,
  _ti,
  _tr,
  _vE,
  _xabfei,
  AccessDeniedException,
  BadGatewayException,
  ConflictException,
  DependencyFailedException,
  InternalServerException,
  n0,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  ThrottlingException,
  ValidationException,
} from "./schemas_0";
import { PerformanceConfiguration } from "./schemas_9_Invoke";

/* eslint no-var: 0 */

export var FlowCompletionEvent = struct(n0, _FCE, 8, [_cR], [0]);
export var FlowExecutionError = struct(n0, _FEE, 0, [_nN, _e, _m], [0, 0, 0]);
export var FlowInput = struct(n0, _FI, 0, [_nN, _nON, _co, _nIN], [0, 0, [() => FlowInputContent, 0], 0]);
export var FlowMultiTurnInputRequestEvent = struct(
  n0,
  _FMTIRE,
  8,
  [_nN, _nT, _co],
  [0, 0, () => FlowMultiTurnInputContent]
);
export var FlowOutputEvent = struct(n0, _FOE, 8, [_nN, _nT, _co], [0, 0, () => FlowOutputContent]);
export var FlowTraceCondition = struct(n0, _FTC, 8, [_cNo], [0]);
export var FlowTraceConditionNodeResultEvent = struct(
  n0,
  _FTCNRE,
  8,
  [_nN, _ti, _sC],
  [0, 5, [() => FlowTraceConditions, 0]]
);
export var FlowTraceEvent = struct(n0, _FTE, 0, [_tr], [[() => FlowTrace, 0]]);
export var FlowTraceNodeActionEvent = struct(n0, _FTNAE, 8, [_nN, _ti, _rI, _sN, _oN], [0, 5, 0, 0, 0]);
export var FlowTraceNodeInputEvent = struct(
  n0,
  _FTNIE,
  8,
  [_nN, _ti, _fie],
  [0, 5, [() => FlowTraceNodeInputFields, 0]]
);
export var FlowTraceNodeInputField = struct(n0, _FTNIF, 8, [_nIN, _co], [0, [() => FlowTraceNodeInputContent, 0]]);
export var FlowTraceNodeOutputEvent = struct(
  n0,
  _FTNOE,
  8,
  [_nN, _ti, _fie],
  [0, 5, [() => FlowTraceNodeOutputFields, 0]]
);
export var FlowTraceNodeOutputField = struct(n0, _FTNOF, 8, [_nON, _co], [0, () => FlowTraceNodeOutputContent]);
export var GetExecutionFlowSnapshotRequest = struct(
  n0,
  _GEFSR,
  0,
  [_fI, _fAI, _eI],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var GetExecutionFlowSnapshotResponse = struct(
  n0,
  _GEFSRe,
  0,
  [_fI, _fAI, _fV, _eRA, _de, _cEKA],
  [0, 0, 0, 0, 0, 0]
);
export var GetFlowExecutionRequest = struct(
  n0,
  _GFER,
  0,
  [_fI, _fAI, _eI],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var GetFlowExecutionResponse = struct(
  n0,
  _GFERe,
  0,
  [_eA, _st, _sAt, _eAn, _er, _fAI, _fI, _fV],
  [0, 0, 5, 5, () => FlowExecutionErrors, 0, 0, 0]
);
export var InvokeFlowRequest = struct(
  n0,
  _IFR,
  0,
  [_fI, _fAI, _inp, _eTn, _mPC, _eIx],
  [[0, 1], [0, 1], [() => FlowInputs, 0], 2, () => ModelPerformanceConfiguration, 0]
);
export var InvokeFlowResponse = struct(
  n0,
  _IFRn,
  0,
  [_rSe, _eIx],
  [
    [() => FlowResponseStream, 16],
    [
      0,
      {
        [_hH]: _xabfei,
      },
    ],
  ]
);
export var ModelPerformanceConfiguration = struct(n0, _MPC, 0, [_pC], [() => PerformanceConfiguration]);
export var StartFlowExecutionRequest = struct(
  n0,
  _SFER,
  0,
  [_fI, _fAI, _fEN, _inp, _mPC],
  [[0, 1], [0, 1], 0, [() => FlowInputs, 0], () => ModelPerformanceConfiguration]
);
export var StartFlowExecutionResponse = struct(n0, _SFERt, 0, [_eA], [0]);
export var StopFlowExecutionRequest = struct(
  n0,
  _SFERto,
  0,
  [_fI, _fAI, _eI],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var StopFlowExecutionResponse = struct(n0, _SFERtop, 0, [_eA, _st], [0, 0]);
export var FlowExecutionErrors = list(n0, _FEEl, 0, () => FlowExecutionError);
export var FlowInputs = list(n0, _FIl, 0, [() => FlowInput, 0]);
export var FlowTraceConditions = list(n0, _FTCl, 0, [() => FlowTraceCondition, 0]);
export var FlowTraceNodeInputFields = list(n0, _FTNIFl, 0, [() => FlowTraceNodeInputField, 0]);
export var FlowTraceNodeOutputFields = list(n0, _FTNOFl, 0, [() => FlowTraceNodeOutputField, 0]);
export var FlowInputContent = uni(n0, _FIC, 8, [_do], [15]);
export var FlowMultiTurnInputContent = uni(n0, _FMTIC, 0, [_do], [15]);
export var FlowOutputContent = uni(n0, _FOC, 0, [_do], [15]);
export var FlowResponseStream = uni(
  n0,
  _FRSl,
  {
    [_stre]: 1,
  },
  [_fOE, _fCE, _fTE, _iSE, _vE, _rNFE, _sQEE, _tE, _aDE, _cE, _dFE, _bGE, _fMTIRE],
  [
    [() => FlowOutputEvent, 0],
    [() => FlowCompletionEvent, 0],
    [() => FlowTraceEvent, 0],
    [() => InternalServerException, 0],
    [() => ValidationException, 0],
    [() => ResourceNotFoundException, 0],
    [() => ServiceQuotaExceededException, 0],
    [() => ThrottlingException, 0],
    [() => AccessDeniedException, 0],
    [() => ConflictException, 0],
    [() => DependencyFailedException, 0],
    [() => BadGatewayException, 0],
    [() => FlowMultiTurnInputRequestEvent, 0],
  ]
);
export var FlowTrace = uni(
  n0,
  _FTl,
  8,
  [_nIT, _nOT, _cNRT, _nAT],
  [
    [() => FlowTraceNodeInputEvent, 0],
    [() => FlowTraceNodeOutputEvent, 0],
    [() => FlowTraceConditionNodeResultEvent, 0],
    [() => FlowTraceNodeActionEvent, 0],
  ]
);
export var FlowTraceNodeInputContent = uni(n0, _FTNIC, 8, [_do], [15]);
export var FlowTraceNodeOutputContent = uni(n0, _FTNOC, 0, [_do], [15]);
export var GetExecutionFlowSnapshot = op(
  n0,
  _GEFS,
  {
    [_h]: [
      "GET",
      "/flows/{flowIdentifier}/aliases/{flowAliasIdentifier}/executions/{executionIdentifier}/flowsnapshot",
      200,
    ],
  },
  () => GetExecutionFlowSnapshotRequest,
  () => GetExecutionFlowSnapshotResponse
);
export var GetFlowExecution = op(
  n0,
  _GFE,
  {
    [_h]: ["GET", "/flows/{flowIdentifier}/aliases/{flowAliasIdentifier}/executions/{executionIdentifier}", 200],
  },
  () => GetFlowExecutionRequest,
  () => GetFlowExecutionResponse
);
export var InvokeFlow = op(
  n0,
  _IFnv,
  {
    [_h]: ["POST", "/flows/{flowIdentifier}/aliases/{flowAliasIdentifier}", 200],
  },
  () => InvokeFlowRequest,
  () => InvokeFlowResponse
);
export var StartFlowExecution = op(
  n0,
  _SFE,
  {
    [_h]: ["POST", "/flows/{flowIdentifier}/aliases/{flowAliasIdentifier}/executions", 200],
  },
  () => StartFlowExecutionRequest,
  () => StartFlowExecutionResponse
);
export var StopFlowExecution = op(
  n0,
  _SFEt,
  {
    [_h]: ["POST", "/flows/{flowIdentifier}/aliases/{flowAliasIdentifier}/executions/{executionIdentifier}/stop", 200],
  },
  () => StopFlowExecutionRequest,
  () => StopFlowExecutionResponse
);
