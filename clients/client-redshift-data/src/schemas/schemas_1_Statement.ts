// smithy-typescript generated code
import { error, list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  ActiveSessionsExceededException as __ActiveSessionsExceededException,
  ActiveStatementsExceededException as __ActiveStatementsExceededException,
  BatchExecuteStatementException as __BatchExecuteStatementException,
  DatabaseConnectionException as __DatabaseConnectionException,
  ExecuteStatementException as __ExecuteStatementException,
  InternalServerException as __InternalServerException,
  QueryTimeoutException as __QueryTimeoutException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ValidationException as __ValidationException,
} from "../models/index";
import {
  _ASEE,
  _ASEEc,
  _BES,
  _BESE,
  _BESI,
  _BESO,
  _bV,
  _bVl,
  _c,
  _CA,
  _CD,
  _cD,
  _CI,
  _CL,
  _CM,
  _CML,
  _CS,
  _CSR,
  _CSRa,
  _CSVR,
  _CT,
  _D,
  _Da,
  _DCE,
  _DG,
  _DS,
  _DSR,
  _DSRe,
  _DT,
  _DTR,
  _DTRe,
  _DU,
  _Du,
  _dV,
  _E,
  _e,
  _ES,
  _ESE,
  _ESI,
  _ESO,
  _F,
  _FL,
  _FSR,
  _GSR,
  _GSRR,
  _GSRRe,
  _GSRV,
  _GSRVR,
  _GSRVRe,
  _hE,
  _HRS,
  _I,
  _IBS,
  _iC,
  _iCS,
  _iN,
  _iS,
  _ISE,
  _l,
  _LD,
  _LDR,
  _LDRi,
  _le,
  _LS,
  _LSi,
  _LSR,
  _LSRi,
  _LSRis,
  _LSRist,
  _LT,
  _LTR,
  _LTRi,
  _lV,
  _M,
  _MR,
  _n,
  _NT,
  _nu,
  _P,
  _p,
  _QP,
  _QR,
  _QS,
  _QSu,
  _QTE,
  _R,
  _RF,
  _RI,
  _RL,
  _RNFE,
  _RP,
  _RQI,
  _RR,
  _RS,
  _S,
  _s,
  _SA,
  _Sc,
  _sc,
  _Sch,
  _sch,
  _SD,
  _SI,
  _SIe,
  _SKAS,
  _SL,
  _SN,
  _sN,
  _SP,
  _SPL,
  _SPq,
  _Sq,
  _SR,
  _SS,
  _SSD,
  _SSL,
  _St,
  _Sta,
  _sV,
  _T,
  _t,
  _Ta,
  _TL,
  _TM,
  _TN,
  _tN,
  _TNR,
  _tNy,
  _TP,
  _UA,
  _v,
  _VE,
  _WE,
  _WN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ActiveSessionsExceededException = error(
  n0,
  _ASEE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __ActiveSessionsExceededException
);
export var ActiveStatementsExceededException = error(
  n0,
  _ASEEc,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __ActiveStatementsExceededException
);
export var BatchExecuteStatementException = error(
  n0,
  _BESE,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_M, _SI],
  [0, 0],

  __BatchExecuteStatementException
);
export var BatchExecuteStatementInput = struct(
  n0,
  _BESI,
  0,
  [_S, _CI, _SA, _DU, _D, _WE, _SN, _WN, _CT, _SKAS, _SIe, _RF],
  [64 | 0, 0, 0, 0, 0, 2, 0, 0, [0, 4], 1, 0, 0]
);
export var BatchExecuteStatementOutput = struct(
  n0,
  _BESO,
  0,
  [_I, _CA, _CI, _DU, _DG, _D, _SA, _WN, _SIe],
  [0, 4, 0, 0, 64 | 0, 0, 0, 0, 0]
);
export var CancelStatementRequest = struct(n0, _CSR, 0, [_I], [0]);
export var CancelStatementResponse = struct(n0, _CSRa, 0, [_St], [2]);
export var ColumnMetadata = struct(
  n0,
  _CM,
  0,
  [_iCS, _iC, _iS, _l, _n, _nu, _p, _sc, _sN, _tN, _tNy, _le, _cD],
  [2, 2, 2, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0]
);
export var DatabaseConnectionException = error(
  n0,
  _DCE,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_M],
  [0],

  __DatabaseConnectionException
);
export var DescribeStatementRequest = struct(n0, _DSR, 0, [_I], [0]);
export var DescribeStatementResponse = struct(
  n0,
  _DSRe,
  0,
  [_I, _SA, _DU, _D, _CI, _Du, _E, _St, _CA, _UA, _RP, _HRS, _QS, _RR, _RS, _RQI, _QP, _SS, _WN, _SIe, _RF],
  [0, 0, 0, 0, 0, 1, 0, 0, 4, 4, 1, 2, 0, 1, 1, 1, () => SqlParametersList, () => SubStatementList, 0, 0, 0]
);
export var DescribeTableRequest = struct(
  n0,
  _DTR,
  0,
  [_CI, _SA, _DU, _D, _CD, _Sc, _T, _NT, _MR, _WN],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0]
);
export var DescribeTableResponse = struct(n0, _DTRe, 0, [_TN, _CL, _NT], [0, () => ColumnList, 0]);
export var ExecuteStatementException = error(
  n0,
  _ESE,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_M, _SI],
  [0, 0],

  __ExecuteStatementException
);
export var ExecuteStatementInput = struct(
  n0,
  _ESI,
  0,
  [_Sq, _CI, _SA, _DU, _D, _WE, _SN, _P, _WN, _CT, _SKAS, _SIe, _RF],
  [0, 0, 0, 0, 0, 2, 0, () => SqlParametersList, 0, [0, 4], 1, 0, 0]
);
export var ExecuteStatementOutput = struct(
  n0,
  _ESO,
  0,
  [_I, _CA, _CI, _DU, _DG, _D, _SA, _WN, _SIe],
  [0, 4, 0, 0, 64 | 0, 0, 0, 0, 0]
);
export var GetStatementResultRequest = struct(n0, _GSRR, 0, [_I, _NT], [0, 0]);
export var GetStatementResultResponse = struct(
  n0,
  _GSRRe,
  0,
  [_R, _CM, _TNR, _NT],
  [() => SqlRecords, () => ColumnMetadataList, 1, 0]
);
export var GetStatementResultV2Request = struct(n0, _GSRVR, 0, [_I, _NT], [0, 0]);
export var GetStatementResultV2Response = struct(
  n0,
  _GSRVRe,
  0,
  [_R, _CM, _TNR, _RF, _NT],
  [() => FormattedSqlRecords, () => ColumnMetadataList, 1, 0, 0]
);
export var InternalServerException = error(
  n0,
  _ISE,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_M],
  [0],

  __InternalServerException
);
export var ListDatabasesRequest = struct(n0, _LDR, 0, [_CI, _D, _SA, _DU, _NT, _MR, _WN], [0, 0, 0, 0, 0, 1, 0]);
export var ListDatabasesResponse = struct(n0, _LDRi, 0, [_Da, _NT], [64 | 0, 0]);
export var ListSchemasRequest = struct(
  n0,
  _LSR,
  0,
  [_CI, _SA, _DU, _D, _CD, _SP, _NT, _MR, _WN],
  [0, 0, 0, 0, 0, 0, 0, 1, 0]
);
export var ListSchemasResponse = struct(n0, _LSRi, 0, [_Sch, _NT], [64 | 0, 0]);
export var ListStatementsRequest = struct(
  n0,
  _LSRis,
  0,
  [_NT, _MR, _SN, _St, _RL, _D, _CI, _WN],
  [0, 1, 0, 0, 2, 0, 0, 0]
);
export var ListStatementsResponse = struct(n0, _LSRist, 0, [_Sta, _NT], [() => StatementList, 0]);
export var ListTablesRequest = struct(
  n0,
  _LTR,
  0,
  [_CI, _SA, _DU, _D, _CD, _SP, _TP, _NT, _MR, _WN],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0]
);
export var ListTablesResponse = struct(n0, _LTRi, 0, [_Ta, _NT], [() => TableList, 0]);
export var QueryTimeoutException = error(
  n0,
  _QTE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __QueryTimeoutException
);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M, _RI],
  [0, 0],

  __ResourceNotFoundException
);
export var SqlParameter = struct(n0, _SPq, 0, [_n, _v], [0, 0]);
export var StatementData = struct(
  n0,
  _SD,
  0,
  [_I, _QS, _QSu, _SA, _St, _SN, _CA, _UA, _QP, _IBS, _RF, _SIe],
  [0, 0, 64 | 0, 0, 0, 0, 4, 4, () => SqlParametersList, 2, 0, 0]
);
export var SubStatementData = struct(
  n0,
  _SSD,
  0,
  [_I, _Du, _E, _St, _CA, _UA, _QS, _RR, _RS, _RQI, _HRS],
  [0, 1, 0, 0, 4, 4, 0, 1, 1, 1, 2]
);
export var TableMember = struct(n0, _TM, 0, [_n, _t, _sch], [0, 0, 0]);
export var ValidationException = error(
  n0,
  _VE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __ValidationException
);
export var ColumnList = list(n0, _CL, 0, () => ColumnMetadata);
export var ColumnMetadataList = list(n0, _CML, 0, () => ColumnMetadata);
export var DatabaseList = 64 | 0;

export var DbGroupList = 64 | 0;

export var FieldList = list(n0, _FL, 0, () => Field);
export var FormattedSqlRecords = list(n0, _FSR, 0, () => QueryRecords);
export var SchemaList = 64 | 0;

export var SqlList = 64 | 0;

export var SqlParametersList = list(n0, _SPL, 0, () => SqlParameter);
export var SqlRecords = list(n0, _SR, 0, () => FieldList);
export var StatementList = list(n0, _SL, 0, () => StatementData);
export var StatementStringList = 64 | 0;

export var SubStatementList = list(n0, _SSL, 0, () => SubStatementData);
export var TableList = list(n0, _TL, 0, () => TableMember);
export var Field = uni(n0, _F, 0, [_iN, _bV, _lV, _dV, _sV, _bVl], [2, 2, 1, 1, 0, 21]);
export var QueryRecords = uni(n0, _QR, 0, [_CSVR], [0]);
export var BatchExecuteStatement = op(
  n0,
  _BES,
  0,
  () => BatchExecuteStatementInput,
  () => BatchExecuteStatementOutput
);
export var CancelStatement = op(
  n0,
  _CS,
  0,
  () => CancelStatementRequest,
  () => CancelStatementResponse
);
export var DescribeStatement = op(
  n0,
  _DS,
  0,
  () => DescribeStatementRequest,
  () => DescribeStatementResponse
);
export var DescribeTable = op(
  n0,
  _DT,
  0,
  () => DescribeTableRequest,
  () => DescribeTableResponse
);
export var ExecuteStatement = op(
  n0,
  _ES,
  0,
  () => ExecuteStatementInput,
  () => ExecuteStatementOutput
);
export var GetStatementResult = op(
  n0,
  _GSR,
  0,
  () => GetStatementResultRequest,
  () => GetStatementResultResponse
);
export var GetStatementResultV2 = op(
  n0,
  _GSRV,
  0,
  () => GetStatementResultV2Request,
  () => GetStatementResultV2Response
);
export var ListDatabases = op(
  n0,
  _LD,
  0,
  () => ListDatabasesRequest,
  () => ListDatabasesResponse
);
export var ListSchemas = op(
  n0,
  _LS,
  0,
  () => ListSchemasRequest,
  () => ListSchemasResponse
);
export var ListStatements = op(
  n0,
  _LSi,
  0,
  () => ListStatementsRequest,
  () => ListStatementsResponse
);
export var ListTables = op(
  n0,
  _LT,
  0,
  () => ListTablesRequest,
  () => ListTablesResponse
);
