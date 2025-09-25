// smithy-typescript generated code
import { error, list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  AccessDeniedException as __AccessDeniedException,
  BadRequestException as __BadRequestException,
  DatabaseErrorException as __DatabaseErrorException,
  DatabaseNotFoundException as __DatabaseNotFoundException,
  DatabaseResumingException as __DatabaseResumingException,
  DatabaseUnavailableException as __DatabaseUnavailableException,
  ForbiddenException as __ForbiddenException,
  HttpEndpointNotEnabledException as __HttpEndpointNotEnabledException,
  InternalServerErrorException as __InternalServerErrorException,
  InvalidResourceStateException as __InvalidResourceStateException,
  InvalidSecretException as __InvalidSecretException,
  NotFoundException as __NotFoundException,
  SecretsErrorException as __SecretsErrorException,
  ServiceUnavailableError as __ServiceUnavailableError,
  StatementTimeoutException as __StatementTimeoutException,
  TransactionNotFoundException as __TransactionNotFoundException,
  UnsupportedResultException as __UnsupportedResultException,
} from "../models/index";
import {
  _a,
  _aBCT,
  _ADE,
  _AOA,
  _aSSA,
  _AV,
  _aV,
  _AVL,
  _aVr,
  _BES,
  _BESR,
  _BESRa,
  _bIV,
  _BRE,
  _BT,
  _BTR,
  _BTRe,
  _bV,
  _bVi,
  _bVl,
  _bVo,
  _c,
  _cAT,
  _cC,
  _CM,
  _cM,
  _CT,
  _CTR,
  _CTRo,
  _d,
  _dCI,
  _dCOIA,
  _DEE,
  _DNFE,
  _DRE,
  _dRT,
  _DUE,
  _dV,
  _dVo,
  _e,
  _ES,
  _ESR,
  _ESRx,
  _ESRxe,
  _ESRxec,
  _ESx,
  _F,
  _FE,
  _FL,
  _fR,
  _fRA,
  _gF,
  _h,
  _hE,
  _HENEE,
  _iAI,
  _iC,
  _iCS,
  _iN,
  _iRM,
  _IRSE,
  _iS,
  _ISE,
  _ISEE,
  _iV,
  _l,
  _lRT,
  _lV,
  _lVo,
  _M,
  _m,
  _n,
  _NFE,
  _nORU,
  _nu,
  _p,
  _pa,
  _pS,
  _R,
  _r,
  _rA,
  _Re,
  _RF,
  _rF,
  _Ro,
  _RSM,
  _rSM,
  _RSO,
  _rSO,
  _RT,
  _RTR,
  _RTRo,
  _rV,
  _s,
  _sA,
  _sc,
  _sca,
  _se,
  _SEE,
  _sN,
  _SP,
  _SPL,
  _SPS,
  _SR,
  _sS,
  _SSR,
  _sSR,
  _SSRq,
  _STE,
  _SUE,
  _SV,
  _sV,
  _sVt,
  _sVtr,
  _t,
  _tH,
  _tI,
  _tN,
  _tNa,
  _TNFE,
  _tS,
  _UR,
  _uR,
  _URE,
  _URp,
  _V,
  _v,
  _va,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AccessDeniedException = error(
  n0,
  _ADE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_m],
  [0],

  __AccessDeniedException
);
export var BadRequestException = error(
  n0,
  _BRE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __BadRequestException
);
export var BatchExecuteStatementRequest = struct(
  n0,
  _BESR,
  0,
  [_rA, _sA, _s, _d, _sc, _pS, _tI],
  [0, 0, 0, 0, 0, () => SqlParameterSets, 0]
);
export var BatchExecuteStatementResponse = struct(n0, _BESRa, 0, [_uR], [() => UpdateResults]);
export var BeginTransactionRequest = struct(n0, _BTR, 0, [_rA, _sA, _d, _sc], [0, 0, 0, 0]);
export var BeginTransactionResponse = struct(n0, _BTRe, 0, [_tI], [0]);
export var ColumnMetadata = struct(
  n0,
  _CM,
  0,
  [_n, _t, _tN, _l, _sN, _tNa, _iAI, _iS, _iC, _iCS, _nu, _p, _sca, _aBCT],
  [0, 1, 0, 0, 0, 0, 2, 2, 2, 2, 1, 1, 1, 1]
);
export var CommitTransactionRequest = struct(n0, _CTR, 0, [_rA, _sA, _tI], [0, 0, 0]);
export var CommitTransactionResponse = struct(n0, _CTRo, 0, [_tS], [0]);
export var DatabaseErrorException = error(
  n0,
  _DEE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __DatabaseErrorException
);
export var DatabaseNotFoundException = error(
  n0,
  _DNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_m],
  [0],

  __DatabaseNotFoundException
);
export var DatabaseResumingException = error(
  n0,
  _DRE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __DatabaseResumingException
);
export var DatabaseUnavailableException = error(
  n0,
  _DUE,
  {
    [_e]: _se,
    [_hE]: 504,
  },
  [],
  [],

  __DatabaseUnavailableException
);
export var ExecuteSqlRequest = struct(n0, _ESR, 0, [_dCOIA, _aSSA, _sS, _d, _sc], [0, 0, 0, 0, 0]);
export var ExecuteSqlResponse = struct(n0, _ESRx, 0, [_sSR], [() => SqlStatementResults]);
export var ExecuteStatementRequest = struct(
  n0,
  _ESRxe,
  0,
  [_rA, _sA, _s, _d, _sc, _pa, _tI, _iRM, _cAT, _rSO, _fRA],
  [0, 0, 0, 0, 0, () => SqlParametersList, 0, 2, 2, () => ResultSetOptions, 0]
);
export var ExecuteStatementResponse = struct(
  n0,
  _ESRxec,
  0,
  [_r, _cM, _nORU, _gF, _fR],
  [() => SqlRecords, () => Metadata, 1, () => FieldList, 0]
);
export var ForbiddenException = error(
  n0,
  _FE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_m],
  [0],

  __ForbiddenException
);
export var HttpEndpointNotEnabledException = error(
  n0,
  _HENEE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __HttpEndpointNotEnabledException
);
export var InternalServerErrorException = error(
  n0,
  _ISEE,
  {
    [_e]: _se,
    [_hE]: 500,
  },
  [],
  [],

  __InternalServerErrorException
);
export var InvalidResourceStateException = error(
  n0,
  _IRSE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __InvalidResourceStateException
);
export var InvalidSecretException = error(
  n0,
  _ISE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __InvalidSecretException
);
export var NotFoundException = error(
  n0,
  _NFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_m],
  [0],

  __NotFoundException
);
export var _Record = struct(n0, _R, 0, [_v], [() => Row]);
export var ResultFrame = struct(n0, _RF, 0, [_rSM, _r], [() => ResultSetMetadata, () => Records]);
export var ResultSetMetadata = struct(n0, _RSM, 0, [_cC, _cM], [1, () => Metadata]);
export var ResultSetOptions = struct(n0, _RSO, 0, [_dRT, _lRT], [0, 0]);
export var RollbackTransactionRequest = struct(n0, _RTR, 0, [_rA, _sA, _tI], [0, 0, 0]);
export var RollbackTransactionResponse = struct(n0, _RTRo, 0, [_tS], [0]);
export var SecretsErrorException = error(
  n0,
  _SEE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __SecretsErrorException
);
export var ServiceUnavailableError = error(
  n0,
  _SUE,
  {
    [_e]: _se,
    [_hE]: 503,
  },
  [],
  [],

  __ServiceUnavailableError
);
export var SqlParameter = struct(n0, _SP, 0, [_n, _va, _tH], [0, () => Field, 0]);
export var SqlStatementResult = struct(n0, _SSR, 0, [_rF, _nORU], [() => ResultFrame, 1]);
export var StatementTimeoutException = error(
  n0,
  _STE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m, _dCI],
  [0, 1],

  __StatementTimeoutException
);
export var StructValue = struct(n0, _SV, 0, [_a], [() => ArrayValueList]);
export var TransactionNotFoundException = error(
  n0,
  _TNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_m],
  [0],

  __TransactionNotFoundException
);
export var UnsupportedResultException = error(
  n0,
  _URE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __UnsupportedResultException
);
export var UpdateResult = struct(n0, _UR, 0, [_gF], [() => FieldList]);
export var ArrayOfArray = list(n0, _AOA, 0, () => ArrayValue);
export var ArrayValueList = list(n0, _AVL, 0, () => Value);
export var BooleanArray = 64 | 2;

export var DoubleArray = 64 | 1;

export var FieldList = list(n0, _FL, 0, () => Field);
export var LongArray = 64 | 1;

export var Metadata = list(n0, _M, 0, () => ColumnMetadata);
export var Records = list(n0, _Re, 0, () => _Record);
export var Row = list(n0, _Ro, 0, () => Value);
export var SqlParameterSets = list(n0, _SPS, 0, () => SqlParametersList);
export var SqlParametersList = list(n0, _SPL, 0, () => SqlParameter);
export var SqlRecords = list(n0, _SR, 0, () => FieldList);
export var SqlStatementResults = list(n0, _SSRq, 0, () => SqlStatementResult);
export var StringArray = 64 | 0;

export var UpdateResults = list(n0, _URp, 0, () => UpdateResult);
export var ArrayValue = uni(
  n0,
  _AV,
  0,
  [_bV, _lV, _dV, _sV, _aV],
  [64 | 2, 64 | 1, 64 | 1, 64 | 0, () => ArrayOfArray]
);
export var Field = uni(n0, _F, 0, [_iN, _bVo, _lVo, _dVo, _sVt, _bVl, _aVr], [2, 2, 1, 1, 0, 21, () => ArrayValue]);
export var Value = uni(
  n0,
  _V,
  0,
  [_iN, _bVi, _bIV, _iV, _dVo, _rV, _sVt, _bVl, _aV, _sVtr],
  [2, 2, 1, 1, 1, 1, 0, 21, () => ArrayValueList, () => StructValue]
);
export var BatchExecuteStatement = op(
  n0,
  _BES,
  {
    [_h]: ["POST", "/BatchExecute", 200],
  },
  () => BatchExecuteStatementRequest,
  () => BatchExecuteStatementResponse
);
export var BeginTransaction = op(
  n0,
  _BT,
  {
    [_h]: ["POST", "/BeginTransaction", 200],
  },
  () => BeginTransactionRequest,
  () => BeginTransactionResponse
);
export var CommitTransaction = op(
  n0,
  _CT,
  {
    [_h]: ["POST", "/CommitTransaction", 200],
  },
  () => CommitTransactionRequest,
  () => CommitTransactionResponse
);
export var ExecuteSql = op(
  n0,
  _ES,
  {
    [_h]: ["POST", "/ExecuteSql", 200],
  },
  () => ExecuteSqlRequest,
  () => ExecuteSqlResponse
);
export var ExecuteStatement = op(
  n0,
  _ESx,
  {
    [_h]: ["POST", "/Execute", 200],
  },
  () => ExecuteStatementRequest,
  () => ExecuteStatementResponse
);
export var RollbackTransaction = op(
  n0,
  _RT,
  {
    [_h]: ["POST", "/RollbackTransaction", 200],
  },
  () => RollbackTransactionRequest,
  () => RollbackTransactionResponse
);
