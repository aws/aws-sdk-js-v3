// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  BadRequestException as __BadRequestException,
  CapacityExceededException as __CapacityExceededException,
  InvalidSessionException as __InvalidSessionException,
  LimitExceededException as __LimitExceededException,
  OccConflictException as __OccConflictException,
  RateExceededException as __RateExceededException,
} from "../models/index";
import {
  _AT,
  _ATR,
  _ATRb,
  _BRE,
  _C,
  _c,
  _CD,
  _CEE,
  _CIO,
  _CT,
  _CTR,
  _CTRo,
  _e,
  _ES,
  _ESR,
  _ESRn,
  _ESRx,
  _ESRxe,
  _ESx,
  _FP,
  _FPe,
  _FPR,
  _FPRe,
  _hE,
  _IB,
  _IOU,
  _ISE,
  _IT,
  _LEE,
  _LN,
  _M,
  _NPT,
  _OCE,
  _P,
  _Pa,
  _PTM,
  _REE,
  _RIO,
  _S,
  _s,
  _SC,
  _SCR,
  _SCRe,
  _SP,
  _SS,
  _SSR,
  _SSRt,
  _ST,
  _STR,
  _STRt,
  _STt,
  _TI,
  _TIr,
  _V,
  _VH,
  _VHa,
  _WIO,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AbortTransactionRequest = struct(n0, _ATR, 0, [], []);
export var AbortTransactionResult = struct(n0, _ATRb, 0, [_TI], [() => TimingInformation]);
export var BadRequestException = error(
  n0,
  _BRE,
  {
    [_e]: _c,
  },
  [_M, _C],
  [0, 0],

  __BadRequestException
);
export var CapacityExceededException = error(
  n0,
  _CEE,
  {
    [_e]: _s,
    [_hE]: 503,
  },
  [_M],
  [0],

  __CapacityExceededException
);
export var CommitTransactionRequest = struct(n0, _CTR, 0, [_TIr, _CD], [0, 21]);
export var CommitTransactionResult = struct(
  n0,
  _CTRo,
  0,
  [_TIr, _CD, _TI, _CIO],
  [0, 21, () => TimingInformation, () => IOUsage]
);
export var EndSessionRequest = struct(n0, _ESR, 0, [], []);
export var EndSessionResult = struct(n0, _ESRn, 0, [_TI], [() => TimingInformation]);
export var ExecuteStatementRequest = struct(n0, _ESRx, 0, [_TIr, _S, _P], [0, 0, () => StatementParameters]);
export var ExecuteStatementResult = struct(
  n0,
  _ESRxe,
  0,
  [_FP, _TI, _CIO],
  [() => Page, () => TimingInformation, () => IOUsage]
);
export var FetchPageRequest = struct(n0, _FPR, 0, [_TIr, _NPT], [0, 0]);
export var FetchPageResult = struct(
  n0,
  _FPRe,
  0,
  [_Pa, _TI, _CIO],
  [() => Page, () => TimingInformation, () => IOUsage]
);
export var InvalidSessionException = error(
  n0,
  _ISE,
  {
    [_e]: _c,
  },
  [_M, _C],
  [0, 0],

  __InvalidSessionException
);
export var IOUsage = struct(n0, _IOU, 0, [_RIO, _WIO], [1, 1]);
export var LimitExceededException = error(
  n0,
  _LEE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __LimitExceededException
);
export var OccConflictException = error(
  n0,
  _OCE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __OccConflictException
);
export var Page = struct(n0, _Pa, 0, [_V, _NPT], [() => ValueHolders, 0]);
export var RateExceededException = error(
  n0,
  _REE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __RateExceededException
);
export var SendCommandRequest = struct(
  n0,
  _SCR,
  0,
  [_ST, _SS, _STt, _ES, _CT, _AT, _ESx, _FPe],
  [
    0,
    () => StartSessionRequest,
    () => StartTransactionRequest,
    () => EndSessionRequest,
    () => CommitTransactionRequest,
    () => AbortTransactionRequest,
    () => ExecuteStatementRequest,
    () => FetchPageRequest,
  ]
);
export var SendCommandResult = struct(
  n0,
  _SCRe,
  0,
  [_SS, _STt, _ES, _CT, _AT, _ESx, _FPe],
  [
    () => StartSessionResult,
    () => StartTransactionResult,
    () => EndSessionResult,
    () => CommitTransactionResult,
    () => AbortTransactionResult,
    () => ExecuteStatementResult,
    () => FetchPageResult,
  ]
);
export var StartSessionRequest = struct(n0, _SSR, 0, [_LN], [0]);
export var StartSessionResult = struct(n0, _SSRt, 0, [_ST, _TI], [0, () => TimingInformation]);
export var StartTransactionRequest = struct(n0, _STR, 0, [], []);
export var StartTransactionResult = struct(n0, _STRt, 0, [_TIr, _TI], [0, () => TimingInformation]);
export var TimingInformation = struct(n0, _TI, 0, [_PTM], [1]);
export var ValueHolder = struct(n0, _VH, 0, [_IB, _IT], [21, 0]);
export var StatementParameters = list(n0, _SP, 0, () => ValueHolder);
export var ValueHolders = list(n0, _VHa, 0, () => ValueHolder);
export var SendCommand = op(
  n0,
  _SC,
  0,
  () => SendCommandRequest,
  () => SendCommandResult
);
