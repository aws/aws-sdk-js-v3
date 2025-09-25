// smithy-typescript generated code
import { error, list, op, sim, struct } from "@smithy/core/schema";

import {
  ResourceNotReadyException as __ResourceNotReadyException,
  TransactionCanceledException as __TransactionCanceledException,
  TransactionCommitInProgressException as __TransactionCommitInProgressException,
  TransactionCommittedException as __TransactionCommittedException,
} from "../models/index";
import {
  _AO,
  _AOI,
  _c,
  _CI,
  _CT,
  _CTo,
  _CTR,
  _CTRa,
  _CTRo,
  _CTRom,
  _DN,
  _DO,
  _DOI,
  _DOOC,
  _DOOCR,
  _DOOCRe,
  _DT,
  _DTR,
  _DTRe,
  _e,
  _en,
  _ET,
  _ETR,
  _ETRx,
  _ETx,
  _GTO,
  _GTOR,
  _GTORe,
  _h,
  _hE,
  _LT,
  _LTR,
  _LTRi,
  _M,
  _MR,
  _NT,
  _O,
  _PO,
  _PP,
  _PTOL,
  _PV,
  _QAOT,
  _QI,
  _QP,
  _QPC,
  _QS,
  _RNRE,
  _S,
  _SF,
  _SQP,
  _SQPR,
  _SQPRt,
  _SSQPRQS,
  _STR,
  _STRt,
  _STt,
  _TCE,
  _TCEr,
  _TCIPE,
  _TDL,
  _TDr,
  _TET,
  _TI,
  _TN,
  _TO,
  _TOL,
  _Tr,
  _TS,
  _TST,
  _TT,
  _U,
  _UTO,
  _UTOR,
  _UTORp,
  _VO,
  _VOL,
  _WO,
  _WOL,
  _WOr,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var SyntheticStartQueryPlanningRequestQueryString = sim(n0, _SSQPRQS, 0, 8);
export var AddObjectInput = struct(n0, _AOI, 0, [_U, _ET, _S, _PV], [0, 0, 1, 64 | 0]);
export var CancelTransactionRequest = struct(n0, _CTR, 0, [_TI], [0]);
export var CancelTransactionResponse = struct(n0, _CTRa, 0, [], []);
export var CommitTransactionRequest = struct(n0, _CTRo, 0, [_TI], [0]);
export var CommitTransactionResponse = struct(n0, _CTRom, 0, [_TS], [0]);
export var DeleteObjectInput = struct(n0, _DOI, 0, [_U, _ET, _PV], [0, 0, 64 | 0]);
export var DeleteObjectsOnCancelRequest = struct(
  n0,
  _DOOCR,
  0,
  [_CI, _DN, _TN, _TI, _O],
  [0, 0, 0, 0, () => VirtualObjectList]
);
export var DeleteObjectsOnCancelResponse = struct(n0, _DOOCRe, 0, [], []);
export var DescribeTransactionRequest = struct(n0, _DTR, 0, [_TI], [0]);
export var DescribeTransactionResponse = struct(n0, _DTRe, 0, [_TDr], [() => TransactionDescription]);
export var ExtendTransactionRequest = struct(n0, _ETR, 0, [_TI], [0]);
export var ExtendTransactionResponse = struct(n0, _ETRx, 0, [], []);
export var GetTableObjectsRequest = struct(
  n0,
  _GTOR,
  0,
  [_CI, _DN, _TN, _TI, _QAOT, _PP, _MR, _NT],
  [0, 0, 0, 0, 4, 0, 1, 0]
);
export var GetTableObjectsResponse = struct(n0, _GTORe, 0, [_O, _NT], [() => PartitionedTableObjectsList, 0]);
export var ListTransactionsRequest = struct(n0, _LTR, 0, [_CI, _SF, _MR, _NT], [0, 0, 1, 0]);
export var ListTransactionsResponse = struct(n0, _LTRi, 0, [_Tr, _NT], [() => TransactionDescriptionList, 0]);
export var PartitionObjects = struct(n0, _PO, 0, [_PV, _O], [64 | 0, () => TableObjectList]);
export var QueryPlanningContext = struct(n0, _QPC, 0, [_CI, _DN, _QAOT, _QP, _TI], [0, 0, 4, 128 | 0, 0]);
export var ResourceNotReadyException = error(
  n0,
  _RNRE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __ResourceNotReadyException
);
export var StartQueryPlanningRequest = struct(
  n0,
  _SQPR,
  0,
  [_QPC, _QS],
  [() => QueryPlanningContext, [() => SyntheticStartQueryPlanningRequestQueryString, 0]]
);
export var StartQueryPlanningResponse = struct(n0, _SQPRt, 0, [_QI], [0]);
export var StartTransactionRequest = struct(n0, _STR, 0, [_TT], [0]);
export var StartTransactionResponse = struct(n0, _STRt, 0, [_TI], [0]);
export var TableObject = struct(n0, _TO, 0, [_U, _ET, _S], [0, 0, 1]);
export var TransactionCanceledException = error(
  n0,
  _TCE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __TransactionCanceledException
);
export var TransactionCommitInProgressException = error(
  n0,
  _TCIPE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __TransactionCommitInProgressException
);
export var TransactionCommittedException = error(
  n0,
  _TCEr,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __TransactionCommittedException
);
export var TransactionDescription = struct(n0, _TDr, 0, [_TI, _TS, _TST, _TET], [0, 0, 4, 4]);
export var UpdateTableObjectsRequest = struct(
  n0,
  _UTOR,
  0,
  [_CI, _DN, _TN, _TI, _WO],
  [0, 0, 0, 0, () => WriteOperationList]
);
export var UpdateTableObjectsResponse = struct(n0, _UTORp, 0, [], []);
export var VirtualObject = struct(n0, _VO, 0, [_U, _ET], [0, 0]);
export var WriteOperation = struct(n0, _WOr, 0, [_AO, _DO], [() => AddObjectInput, () => DeleteObjectInput]);
export var PartitionedTableObjectsList = list(n0, _PTOL, 0, () => PartitionObjects);
export var PartitionValuesList = 64 | 0;

export var TableObjectList = list(n0, _TOL, 0, () => TableObject);
export var TransactionDescriptionList = list(n0, _TDL, 0, () => TransactionDescription);
export var VirtualObjectList = list(n0, _VOL, 0, () => VirtualObject);
export var WriteOperationList = list(n0, _WOL, 0, () => WriteOperation);
export var QueryParameterMap = 128 | 0;

export var CancelTransaction = op(
  n0,
  _CT,
  {
    [_h]: ["POST", "/CancelTransaction", 200],
  },
  () => CancelTransactionRequest,
  () => CancelTransactionResponse
);
export var CommitTransaction = op(
  n0,
  _CTo,
  {
    [_h]: ["POST", "/CommitTransaction", 200],
  },
  () => CommitTransactionRequest,
  () => CommitTransactionResponse
);
export var DeleteObjectsOnCancel = op(
  n0,
  _DOOC,
  {
    [_h]: ["POST", "/DeleteObjectsOnCancel", 200],
  },
  () => DeleteObjectsOnCancelRequest,
  () => DeleteObjectsOnCancelResponse
);
export var DescribeTransaction = op(
  n0,
  _DT,
  {
    [_h]: ["POST", "/DescribeTransaction", 200],
  },
  () => DescribeTransactionRequest,
  () => DescribeTransactionResponse
);
export var ExtendTransaction = op(
  n0,
  _ETx,
  {
    [_h]: ["POST", "/ExtendTransaction", 200],
  },
  () => ExtendTransactionRequest,
  () => ExtendTransactionResponse
);
export var GetTableObjects = op(
  n0,
  _GTO,
  {
    [_h]: ["POST", "/GetTableObjects", 200],
  },
  () => GetTableObjectsRequest,
  () => GetTableObjectsResponse
);
export var ListTransactions = op(
  n0,
  _LT,
  {
    [_h]: ["POST", "/ListTransactions", 200],
  },
  () => ListTransactionsRequest,
  () => ListTransactionsResponse
);
export var StartQueryPlanning = op(
  n0,
  _SQP,
  {
    [_h]: ["POST", "/StartQueryPlanning", 200],
    [_en]: ["query-"],
  },
  () => StartQueryPlanningRequest,
  () => StartQueryPlanningResponse
);
export var StartTransaction = op(
  n0,
  _STt,
  {
    [_h]: ["POST", "/StartTransaction", 200],
  },
  () => StartTransactionRequest,
  () => StartTransactionResponse
);
export var UpdateTableObjects = op(
  n0,
  _UTO,
  {
    [_h]: ["POST", "/UpdateTableObjects", 200],
  },
  () => UpdateTableObjectsRequest,
  () => UpdateTableObjectsResponse
);
