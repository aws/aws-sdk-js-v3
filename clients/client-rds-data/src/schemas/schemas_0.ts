const _ADE = "AccessDeniedException";
const _AOA = "ArrayOfArray";
const _AV = "ArrayValue";
const _AVL = "ArrayValueList";
const _BES = "BatchExecuteStatement";
const _BESR = "BatchExecuteStatementRequest";
const _BESRa = "BatchExecuteStatementResponse";
const _BRE = "BadRequestException";
const _BT = "BeginTransaction";
const _BTR = "BeginTransactionRequest";
const _BTRe = "BeginTransactionResponse";
const _CM = "ColumnMetadata";
const _CT = "CommitTransaction";
const _CTR = "CommitTransactionRequest";
const _CTRo = "CommitTransactionResponse";
const _DEE = "DatabaseErrorException";
const _DNFE = "DatabaseNotFoundException";
const _DRE = "DatabaseResumingException";
const _DUE = "DatabaseUnavailableException";
const _ES = "ExecuteSql";
const _ESR = "ExecuteSqlRequest";
const _ESRx = "ExecuteSqlResponse";
const _ESRxe = "ExecuteStatementRequest";
const _ESRxec = "ExecuteStatementResponse";
const _ESx = "ExecuteStatement";
const _F = "Field";
const _FE = "ForbiddenException";
const _FL = "FieldList";
const _HENEE = "HttpEndpointNotEnabledException";
const _IRSE = "InvalidResourceStateException";
const _ISE = "InvalidSecretException";
const _ISEE = "InternalServerErrorException";
const _M = "Metadata";
const _NFE = "NotFoundException";
const _R = "Record";
const _RF = "ResultFrame";
const _RSM = "ResultSetMetadata";
const _RSO = "ResultSetOptions";
const _RT = "RollbackTransaction";
const _RTR = "RollbackTransactionRequest";
const _RTRo = "RollbackTransactionResponse";
const _Re = "Records";
const _Ro = "Row";
const _SEE = "SecretsErrorException";
const _SP = "SqlParameter";
const _SPL = "SqlParametersList";
const _SPS = "SqlParameterSets";
const _SR = "SqlRecords";
const _SSR = "SqlStatementResult";
const _SSRq = "SqlStatementResults";
const _STE = "StatementTimeoutException";
const _SUE = "ServiceUnavailableError";
const _SV = "StructValue";
const _TNFE = "TransactionNotFoundException";
const _UR = "UpdateResult";
const _URE = "UnsupportedResultException";
const _URp = "UpdateResults";
const _V = "Value";
const _a = "attributes";
const _aBCT = "arrayBaseColumnType";
const _aSSA = "awsSecretStoreArn";
const _aV = "arrayValues";
const _aVr = "arrayValue";
const _bIV = "bigIntValue";
const _bV = "booleanValues";
const _bVi = "bitValue";
const _bVl = "blobValue";
const _bVo = "booleanValue";
const _c = "client";
const _cAT = "continueAfterTimeout";
const _cC = "columnCount";
const _cM = "columnMetadata";
const _d = "database";
const _dCI = "dbConnectionId";
const _dCOIA = "dbClusterOrInstanceArn";
const _dRT = "decimalReturnType";
const _dV = "doubleValues";
const _dVo = "doubleValue";
const _e = "error";
const _fR = "formattedRecords";
const _fRA = "formatRecordsAs";
const _gF = "generatedFields";
const _h = "http";
const _hE = "httpError";
const _iAI = "isAutoIncrement";
const _iC = "isCurrency";
const _iCS = "isCaseSensitive";
const _iN = "isNull";
const _iRM = "includeResultMetadata";
const _iS = "isSigned";
const _iV = "intValue";
const _l = "label";
const _lRT = "longReturnType";
const _lV = "longValues";
const _lVo = "longValue";
const _m = "message";
const _n = "name";
const _nORU = "numberOfRecordsUpdated";
const _nu = "nullable";
const _p = "precision";
const _pS = "parameterSets";
const _pa = "parameters";
const _r = "records";
const _rA = "resourceArn";
const _rF = "resultFrame";
const _rSM = "resultSetMetadata";
const _rSO = "resultSetOptions";
const _rV = "realValue";
const _s = "sql";
const _sA = "secretArn";
const _sN = "schemaName";
const _sS = "sqlStatements";
const _sSR = "sqlStatementResults";
const _sV = "stringValues";
const _sVt = "stringValue";
const _sVtr = "structValue";
const _sc = "schema";
const _sca = "scale";
const _se = "server";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.rdsdata";
const _t = "type";
const _tH = "typeHint";
const _tI = "transactionId";
const _tN = "typeName";
const _tNa = "tableName";
const _tS = "transactionStatus";
const _uR = "updateResults";
const _v = "values";
const _va = "value";
const n0 = "com.amazonaws.rdsdata";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type { StaticErrorSchema, StaticListSchema, StaticOperationSchema, StaticStructureSchema } from "@smithy/types";

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
} from "../models/errors";
import { RDSDataServiceException as __RDSDataServiceException } from "../models/RDSDataServiceException";

/* eslint no-var: 0 */

export var AccessDeniedException: StaticErrorSchema = [
  -3,
  n0,
  _ADE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(AccessDeniedException, __AccessDeniedException);

export var BadRequestException: StaticErrorSchema = [
  -3,
  n0,
  _BRE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(BadRequestException, __BadRequestException);

export var BatchExecuteStatementRequest: StaticStructureSchema = [
  3,
  n0,
  _BESR,
  0,
  [_rA, _sA, _s, _d, _sc, _pS, _tI],
  [0, 0, 0, 0, 0, () => SqlParameterSets, 0],
];
export var BatchExecuteStatementResponse: StaticStructureSchema = [3, n0, _BESRa, 0, [_uR], [() => UpdateResults]];
export var BeginTransactionRequest: StaticStructureSchema = [3, n0, _BTR, 0, [_rA, _sA, _d, _sc], [0, 0, 0, 0]];
export var BeginTransactionResponse: StaticStructureSchema = [3, n0, _BTRe, 0, [_tI], [0]];
export var ColumnMetadata: StaticStructureSchema = [
  3,
  n0,
  _CM,
  0,
  [_n, _t, _tN, _l, _sN, _tNa, _iAI, _iS, _iC, _iCS, _nu, _p, _sca, _aBCT],
  [0, 1, 0, 0, 0, 0, 2, 2, 2, 2, 1, 1, 1, 1],
];
export var CommitTransactionRequest: StaticStructureSchema = [3, n0, _CTR, 0, [_rA, _sA, _tI], [0, 0, 0]];
export var CommitTransactionResponse: StaticStructureSchema = [3, n0, _CTRo, 0, [_tS], [0]];
export var DatabaseErrorException: StaticErrorSchema = [
  -3,
  n0,
  _DEE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(DatabaseErrorException, __DatabaseErrorException);

export var DatabaseNotFoundException: StaticErrorSchema = [
  -3,
  n0,
  _DNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(DatabaseNotFoundException, __DatabaseNotFoundException);

export var DatabaseResumingException: StaticErrorSchema = [
  -3,
  n0,
  _DRE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(DatabaseResumingException, __DatabaseResumingException);

export var DatabaseUnavailableException: StaticErrorSchema = [
  -3,
  n0,
  _DUE,
  {
    [_e]: _se,
    [_hE]: 504,
  },
  [],
  [],
];
TypeRegistry.for(n0).registerError(DatabaseUnavailableException, __DatabaseUnavailableException);

export var ExecuteSqlRequest: StaticStructureSchema = [3, n0, _ESR, 0, [_dCOIA, _aSSA, _sS, _d, _sc], [0, 0, 0, 0, 0]];
export var ExecuteSqlResponse: StaticStructureSchema = [3, n0, _ESRx, 0, [_sSR], [() => SqlStatementResults]];
export var ExecuteStatementRequest: StaticStructureSchema = [
  3,
  n0,
  _ESRxe,
  0,
  [_rA, _sA, _s, _d, _sc, _pa, _tI, _iRM, _cAT, _rSO, _fRA],
  [0, 0, 0, 0, 0, () => SqlParametersList, 0, 2, 2, () => ResultSetOptions, 0],
];
export var ExecuteStatementResponse: StaticStructureSchema = [
  3,
  n0,
  _ESRxec,
  0,
  [_r, _cM, _nORU, _gF, _fR],
  [() => SqlRecords, () => Metadata, 1, () => FieldList, 0],
];
export var ForbiddenException: StaticErrorSchema = [
  -3,
  n0,
  _FE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(ForbiddenException, __ForbiddenException);

export var HttpEndpointNotEnabledException: StaticErrorSchema = [
  -3,
  n0,
  _HENEE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(HttpEndpointNotEnabledException, __HttpEndpointNotEnabledException);

export var InternalServerErrorException: StaticErrorSchema = [
  -3,
  n0,
  _ISEE,
  {
    [_e]: _se,
    [_hE]: 500,
  },
  [],
  [],
];
TypeRegistry.for(n0).registerError(InternalServerErrorException, __InternalServerErrorException);

export var InvalidResourceStateException: StaticErrorSchema = [
  -3,
  n0,
  _IRSE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(InvalidResourceStateException, __InvalidResourceStateException);

export var InvalidSecretException: StaticErrorSchema = [
  -3,
  n0,
  _ISE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(InvalidSecretException, __InvalidSecretException);

export var NotFoundException: StaticErrorSchema = [
  -3,
  n0,
  _NFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(NotFoundException, __NotFoundException);

export var _Record: StaticStructureSchema = [3, n0, _R, 0, [_v], [() => Row]];
export var ResultFrame: StaticStructureSchema = [3, n0, _RF, 0, [_rSM, _r], [() => ResultSetMetadata, () => Records]];
export var ResultSetMetadata: StaticStructureSchema = [3, n0, _RSM, 0, [_cC, _cM], [1, () => Metadata]];
export var ResultSetOptions: StaticStructureSchema = [3, n0, _RSO, 0, [_dRT, _lRT], [0, 0]];
export var RollbackTransactionRequest: StaticStructureSchema = [3, n0, _RTR, 0, [_rA, _sA, _tI], [0, 0, 0]];
export var RollbackTransactionResponse: StaticStructureSchema = [3, n0, _RTRo, 0, [_tS], [0]];
export var SecretsErrorException: StaticErrorSchema = [
  -3,
  n0,
  _SEE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(SecretsErrorException, __SecretsErrorException);

export var ServiceUnavailableError: StaticErrorSchema = [
  -3,
  n0,
  _SUE,
  {
    [_e]: _se,
    [_hE]: 503,
  },
  [],
  [],
];
TypeRegistry.for(n0).registerError(ServiceUnavailableError, __ServiceUnavailableError);

export var SqlParameter: StaticStructureSchema = [3, n0, _SP, 0, [_n, _va, _tH], [0, () => Field, 0]];
export var SqlStatementResult: StaticStructureSchema = [3, n0, _SSR, 0, [_rF, _nORU], [() => ResultFrame, 1]];
export var StatementTimeoutException: StaticErrorSchema = [
  -3,
  n0,
  _STE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m, _dCI],
  [0, 1],
];
TypeRegistry.for(n0).registerError(StatementTimeoutException, __StatementTimeoutException);

export var StructValue: StaticStructureSchema = [3, n0, _SV, 0, [_a], [() => ArrayValueList]];
export var TransactionNotFoundException: StaticErrorSchema = [
  -3,
  n0,
  _TNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(TransactionNotFoundException, __TransactionNotFoundException);

export var UnsupportedResultException: StaticErrorSchema = [
  -3,
  n0,
  _URE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(UnsupportedResultException, __UnsupportedResultException);

export var UpdateResult: StaticStructureSchema = [3, n0, _UR, 0, [_gF], [() => FieldList]];
export var RDSDataServiceException: StaticErrorSchema = [-3, _sm, "RDSDataServiceException", 0, [], []];
TypeRegistry.for(_sm).registerError(RDSDataServiceException, __RDSDataServiceException);

export var ArrayOfArray: StaticListSchema = [1, n0, _AOA, 0, () => ArrayValue];
export var ArrayValueList: StaticListSchema = [1, n0, _AVL, 0, () => Value];
export var BooleanArray = 64 | 2;

export var DoubleArray = 64 | 1;

export var FieldList: StaticListSchema = [1, n0, _FL, 0, () => Field];
export var LongArray = 64 | 1;

export var Metadata: StaticListSchema = [1, n0, _M, 0, () => ColumnMetadata];
export var Records: StaticListSchema = [1, n0, _Re, 0, () => _Record];
export var Row: StaticListSchema = [1, n0, _Ro, 0, () => Value];
export var SqlParameterSets: StaticListSchema = [1, n0, _SPS, 0, () => SqlParametersList];
export var SqlParametersList: StaticListSchema = [1, n0, _SPL, 0, () => SqlParameter];
export var SqlRecords: StaticListSchema = [1, n0, _SR, 0, () => FieldList];
export var SqlStatementResults: StaticListSchema = [1, n0, _SSRq, 0, () => SqlStatementResult];
export var StringArray = 64 | 0;

export var UpdateResults: StaticListSchema = [1, n0, _URp, 0, () => UpdateResult];
export var ArrayValue: StaticStructureSchema = [
  3,
  n0,
  _AV,
  0,
  [_bV, _lV, _dV, _sV, _aV],
  [64 | 2, 64 | 1, 64 | 1, 64 | 0, () => ArrayOfArray],
];
export var Field: StaticStructureSchema = [
  3,
  n0,
  _F,
  0,
  [_iN, _bVo, _lVo, _dVo, _sVt, _bVl, _aVr],
  [2, 2, 1, 1, 0, 21, () => ArrayValue],
];
export var Value: StaticStructureSchema = [
  3,
  n0,
  _V,
  0,
  [_iN, _bVi, _bIV, _iV, _dVo, _rV, _sVt, _bVl, _aV, _sVtr],
  [2, 2, 1, 1, 1, 1, 0, 21, () => ArrayValueList, () => StructValue],
];
export var BatchExecuteStatement: StaticOperationSchema = [
  9,
  n0,
  _BES,
  {
    [_h]: ["POST", "/BatchExecute", 200],
  },
  () => BatchExecuteStatementRequest,
  () => BatchExecuteStatementResponse,
];
export var BeginTransaction: StaticOperationSchema = [
  9,
  n0,
  _BT,
  {
    [_h]: ["POST", "/BeginTransaction", 200],
  },
  () => BeginTransactionRequest,
  () => BeginTransactionResponse,
];
export var CommitTransaction: StaticOperationSchema = [
  9,
  n0,
  _CT,
  {
    [_h]: ["POST", "/CommitTransaction", 200],
  },
  () => CommitTransactionRequest,
  () => CommitTransactionResponse,
];
export var ExecuteSql: StaticOperationSchema = [
  9,
  n0,
  _ES,
  {
    [_h]: ["POST", "/ExecuteSql", 200],
  },
  () => ExecuteSqlRequest,
  () => ExecuteSqlResponse,
];
export var ExecuteStatement: StaticOperationSchema = [
  9,
  n0,
  _ESx,
  {
    [_h]: ["POST", "/Execute", 200],
  },
  () => ExecuteStatementRequest,
  () => ExecuteStatementResponse,
];
export var RollbackTransaction: StaticOperationSchema = [
  9,
  n0,
  _RT,
  {
    [_h]: ["POST", "/RollbackTransaction", 200],
  },
  () => RollbackTransactionRequest,
  () => RollbackTransactionResponse,
];
