// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  ConditionalCheckFailedException as __ConditionalCheckFailedException,
  IdempotentParameterMismatchException as __IdempotentParameterMismatchException,
  TransactionConflictException as __TransactionConflictException,
  TransactionInProgressException as __TransactionInProgressException,
} from "../models/index";
import {
  _BES,
  _BESI,
  _BESO,
  _BSE,
  _BSR,
  _BSRa,
  _C,
  _c,
  _CC,
  _CCFE,
  _CR,
  _CRT,
  _E,
  _e,
  _ETI,
  _ETO,
  _ETxe,
  _I,
  _IPME,
  _M,
  _m,
  _P,
  _PQLBR,
  _PQLBRa,
  _PSa,
  _PSar,
  _PSP,
  _R,
  _RCC,
  _RVOCCF,
  _S,
  _St,
  _TCEr,
  _TIPE,
  _TN,
  _TS,
  AttributeValue,
  n0,
} from "./schemas_0";
import { ConsumedCapacityMultiple, ItemResponseList } from "./schemas_15_Item";
import { AttributeMap } from "./schemas_30_Item";

/* eslint no-var: 0 */

export var BatchExecuteStatementInput = struct(n0, _BESI, 0, [_S, _RCC], [() => PartiQLBatchRequest, 0]);
export var BatchExecuteStatementOutput = struct(
  n0,
  _BESO,
  0,
  [_R, _CC],
  [() => PartiQLBatchResponse, () => ConsumedCapacityMultiple]
);
export var BatchStatementError = struct(n0, _BSE, 0, [_C, _M, _I], [0, 0, () => AttributeMap]);
export var BatchStatementRequest = struct(
  n0,
  _BSR,
  0,
  [_St, _P, _CR, _RVOCCF],
  [0, () => PreparedStatementParameters, 2, 0]
);
export var BatchStatementResponse = struct(
  n0,
  _BSRa,
  0,
  [_E, _TN, _I],
  [() => BatchStatementError, 0, () => AttributeMap]
);
export var ConditionalCheckFailedException = error(
  n0,
  _CCFE,
  {
    [_e]: _c,
  },
  [_m, _I],
  [0, () => AttributeMap],

  __ConditionalCheckFailedException
);
export var ExecuteTransactionInput = struct(n0, _ETI, 0, [_TS, _CRT, _RCC], [() => ParameterizedStatements, [0, 4], 0]);
export var ExecuteTransactionOutput = struct(
  n0,
  _ETO,
  0,
  [_R, _CC],
  [() => ItemResponseList, () => ConsumedCapacityMultiple]
);
export var IdempotentParameterMismatchException = error(
  n0,
  _IPME,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __IdempotentParameterMismatchException
);
export var ParameterizedStatement = struct(n0, _PSa, 0, [_St, _P, _RVOCCF], [0, () => PreparedStatementParameters, 0]);
export var TransactionConflictException = error(
  n0,
  _TCEr,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __TransactionConflictException
);
export var TransactionInProgressException = error(
  n0,
  _TIPE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __TransactionInProgressException
);
export var ParameterizedStatements = list(n0, _PSar, 0, () => ParameterizedStatement);
export var PartiQLBatchRequest = list(n0, _PQLBR, 0, () => BatchStatementRequest);
export var PartiQLBatchResponse = list(n0, _PQLBRa, 0, () => BatchStatementResponse);
export var PreparedStatementParameters = list(n0, _PSP, 0, () => AttributeValue);
export var BatchExecuteStatement = op(
  n0,
  _BES,
  0,
  () => BatchExecuteStatementInput,
  () => BatchExecuteStatementOutput
);
export var ExecuteTransaction = op(
  n0,
  _ETxe,
  0,
  () => ExecuteTransactionInput,
  () => ExecuteTransactionOutput
);
