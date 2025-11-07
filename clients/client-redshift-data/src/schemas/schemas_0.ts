export const _ASEE = "ActiveSessionsExceededException";
export const _ASEEc = "ActiveStatementsExceededException";
export const _BES = "BatchExecuteStatement";
export const _BESE = "BatchExecuteStatementException";
export const _BESI = "BatchExecuteStatementInput";
export const _BESO = "BatchExecuteStatementOutput";
export const _CA = "CreatedAt";
export const _CD = "ConnectedDatabase";
export const _CI = "ClusterIdentifier";
export const _CL = "ColumnList";
export const _CM = "ColumnMetadata";
export const _CML = "ColumnMetadataList";
export const _CS = "CancelStatement";
export const _CSR = "CancelStatementRequest";
export const _CSRa = "CancelStatementResponse";
export const _CSVR = "CSVRecords";
export const _CT = "ClientToken";
export const _D = "Database";
export const _DCE = "DatabaseConnectionException";
export const _DG = "DbGroups";
export const _DS = "DescribeStatement";
export const _DSR = "DescribeStatementRequest";
export const _DSRe = "DescribeStatementResponse";
export const _DT = "DescribeTable";
export const _DTR = "DescribeTableRequest";
export const _DTRe = "DescribeTableResponse";
export const _DU = "DbUser";
export const _Da = "Databases";
export const _Du = "Duration";
export const _E = "Error";
export const _ES = "ExecuteStatement";
export const _ESE = "ExecuteStatementException";
export const _ESI = "ExecuteStatementInput";
export const _ESO = "ExecuteStatementOutput";
export const _F = "Field";
export const _FL = "FieldList";
export const _FSR = "FormattedSqlRecords";
export const _GSR = "GetStatementResult";
export const _GSRR = "GetStatementResultRequest";
export const _GSRRe = "GetStatementResultResponse";
export const _GSRV = "GetStatementResultV2";
export const _GSRVR = "GetStatementResultV2Request";
export const _GSRVRe = "GetStatementResultV2Response";
export const _HRS = "HasResultSet";
export const _I = "Id";
export const _IBS = "IsBatchStatement";
export const _ISE = "InternalServerException";
export const _LD = "ListDatabases";
export const _LDR = "ListDatabasesRequest";
export const _LDRi = "ListDatabasesResponse";
export const _LS = "ListSchemas";
export const _LSR = "ListSchemasRequest";
export const _LSRi = "ListSchemasResponse";
export const _LSRis = "ListStatementsRequest";
export const _LSRist = "ListStatementsResponse";
export const _LSi = "ListStatements";
export const _LT = "ListTables";
export const _LTR = "ListTablesRequest";
export const _LTRi = "ListTablesResponse";
export const _M = "Message";
export const _MR = "MaxResults";
export const _NT = "NextToken";
export const _P = "Parameters";
export const _QP = "QueryParameters";
export const _QR = "QueryRecords";
export const _QS = "QueryString";
export const _QSu = "QueryStrings";
export const _QTE = "QueryTimeoutException";
export const _R = "Records";
export const _RF = "ResultFormat";
export const _RI = "ResourceId";
export const _RL = "RoleLevel";
export const _RNFE = "ResourceNotFoundException";
export const _RP = "RedshiftPid";
export const _RQI = "RedshiftQueryId";
export const _RR = "ResultRows";
export const _RS = "ResultSize";
export const _S = "Sqls";
export const _SA = "SecretArn";
export const _SD = "StatementData";
export const _SI = "StatementId";
export const _SIe = "SessionId";
export const _SKAS = "SessionKeepAliveSeconds";
export const _SL = "StatementList";
export const _SN = "StatementName";
export const _SP = "SchemaPattern";
export const _SPL = "SqlParametersList";
export const _SPq = "SqlParameter";
export const _SR = "SqlRecords";
export const _SS = "SubStatements";
export const _SSD = "SubStatementData";
export const _SSL = "SubStatementList";
export const _Sc = "Schema";
export const _Sch = "Schemas";
export const _Sq = "Sql";
export const _St = "Status";
export const _Sta = "Statements";
export const _T = "Table";
export const _TL = "TableList";
export const _TM = "TableMember";
export const _TN = "TableName";
export const _TNR = "TotalNumRows";
export const _TP = "TablePattern";
export const _Ta = "Tables";
export const _UA = "UpdatedAt";
export const _VE = "ValidationException";
export const _WE = "WithEvent";
export const _WN = "WorkgroupName";
export const _bV = "booleanValue";
export const _bVl = "blobValue";
export const _c = "client";
export const _cD = "columnDefault";
export const _dV = "doubleValue";
export const _e = "error";
export const _hE = "httpError";
export const _iC = "isCurrency";
export const _iCS = "isCaseSensitive";
export const _iN = "isNull";
export const _iS = "isSigned";
export const _l = "label";
export const _lV = "longValue";
export const _le = "length";
export const _n = "name";
export const _nu = "nullable";
export const _p = "precision";
export const _s = "server";
export const _sN = "schemaName";
export const _sV = "stringValue";
export const _sc = "scale";
export const _sch = "schema";
export const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.redshiftdata";
export const _t = "type";
export const _tN = "tableName";
export const _tNy = "typeName";
export const _v = "value";
export const n0 = "com.amazonaws.redshiftdata";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import { StaticErrorSchema, StaticListSchema, StaticOperationSchema, StaticStructureSchema } from "@smithy/types";

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
import { RedshiftDataServiceException as __RedshiftDataServiceException } from "../models/RedshiftDataServiceException";

/* eslint no-var: 0 */

export var ActiveSessionsExceededException: StaticErrorSchema = [
  -3,
  n0,
  _ASEE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(ActiveSessionsExceededException, __ActiveSessionsExceededException);

export var ActiveStatementsExceededException: StaticErrorSchema = [
  -3,
  n0,
  _ASEEc,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(ActiveStatementsExceededException, __ActiveStatementsExceededException);

export var BatchExecuteStatementException: StaticErrorSchema = [
  -3,
  n0,
  _BESE,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_M, _SI],
  [0, 0],
];
TypeRegistry.for(n0).registerError(BatchExecuteStatementException, __BatchExecuteStatementException);

export var BatchExecuteStatementInput: StaticStructureSchema = [
  3,
  n0,
  _BESI,
  0,
  [_S, _CI, _SA, _DU, _D, _WE, _SN, _WN, _CT, _SKAS, _SIe, _RF],
  [64 | 0, 0, 0, 0, 0, 2, 0, 0, [0, 4], 1, 0, 0],
];
export var BatchExecuteStatementOutput: StaticStructureSchema = [
  3,
  n0,
  _BESO,
  0,
  [_I, _CA, _CI, _DU, _DG, _D, _SA, _WN, _SIe],
  [0, 4, 0, 0, 64 | 0, 0, 0, 0, 0],
];
export var CancelStatementRequest: StaticStructureSchema = [3, n0, _CSR, 0, [_I], [0]];
export var CancelStatementResponse: StaticStructureSchema = [3, n0, _CSRa, 0, [_St], [2]];
export var ColumnMetadata: StaticStructureSchema = [
  3,
  n0,
  _CM,
  0,
  [_iCS, _iC, _iS, _l, _n, _nu, _p, _sc, _sN, _tN, _tNy, _le, _cD],
  [2, 2, 2, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0],
];
export var DatabaseConnectionException: StaticErrorSchema = [
  -3,
  n0,
  _DCE,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(DatabaseConnectionException, __DatabaseConnectionException);

export var DescribeStatementRequest: StaticStructureSchema = [3, n0, _DSR, 0, [_I], [0]];
export var DescribeStatementResponse: StaticStructureSchema = [
  3,
  n0,
  _DSRe,
  0,
  [_I, _SA, _DU, _D, _CI, _Du, _E, _St, _CA, _UA, _RP, _HRS, _QS, _RR, _RS, _RQI, _QP, _SS, _WN, _SIe, _RF],
  [0, 0, 0, 0, 0, 1, 0, 0, 4, 4, 1, 2, 0, 1, 1, 1, () => SqlParametersList, () => SubStatementList, 0, 0, 0],
];
export var DescribeTableRequest: StaticStructureSchema = [
  3,
  n0,
  _DTR,
  0,
  [_CI, _SA, _DU, _D, _CD, _Sc, _T, _NT, _MR, _WN],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
];
export var DescribeTableResponse: StaticStructureSchema = [3, n0, _DTRe, 0, [_TN, _CL, _NT], [0, () => ColumnList, 0]];
export var ExecuteStatementException: StaticErrorSchema = [
  -3,
  n0,
  _ESE,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_M, _SI],
  [0, 0],
];
TypeRegistry.for(n0).registerError(ExecuteStatementException, __ExecuteStatementException);

export var ExecuteStatementInput: StaticStructureSchema = [
  3,
  n0,
  _ESI,
  0,
  [_Sq, _CI, _SA, _DU, _D, _WE, _SN, _P, _WN, _CT, _SKAS, _SIe, _RF],
  [0, 0, 0, 0, 0, 2, 0, () => SqlParametersList, 0, [0, 4], 1, 0, 0],
];
export var ExecuteStatementOutput: StaticStructureSchema = [
  3,
  n0,
  _ESO,
  0,
  [_I, _CA, _CI, _DU, _DG, _D, _SA, _WN, _SIe],
  [0, 4, 0, 0, 64 | 0, 0, 0, 0, 0],
];
export var GetStatementResultRequest: StaticStructureSchema = [3, n0, _GSRR, 0, [_I, _NT], [0, 0]];
export var GetStatementResultResponse: StaticStructureSchema = [
  3,
  n0,
  _GSRRe,
  0,
  [_R, _CM, _TNR, _NT],
  [() => SqlRecords, () => ColumnMetadataList, 1, 0],
];
export var GetStatementResultV2Request: StaticStructureSchema = [3, n0, _GSRVR, 0, [_I, _NT], [0, 0]];
export var GetStatementResultV2Response: StaticStructureSchema = [
  3,
  n0,
  _GSRVRe,
  0,
  [_R, _CM, _TNR, _RF, _NT],
  [() => FormattedSqlRecords, () => ColumnMetadataList, 1, 0, 0],
];
export var InternalServerException: StaticErrorSchema = [
  -3,
  n0,
  _ISE,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(InternalServerException, __InternalServerException);

export var ListDatabasesRequest: StaticStructureSchema = [
  3,
  n0,
  _LDR,
  0,
  [_CI, _D, _SA, _DU, _NT, _MR, _WN],
  [0, 0, 0, 0, 0, 1, 0],
];
export var ListDatabasesResponse: StaticStructureSchema = [3, n0, _LDRi, 0, [_Da, _NT], [64 | 0, 0]];
export var ListSchemasRequest: StaticStructureSchema = [
  3,
  n0,
  _LSR,
  0,
  [_CI, _SA, _DU, _D, _CD, _SP, _NT, _MR, _WN],
  [0, 0, 0, 0, 0, 0, 0, 1, 0],
];
export var ListSchemasResponse: StaticStructureSchema = [3, n0, _LSRi, 0, [_Sch, _NT], [64 | 0, 0]];
export var ListStatementsRequest: StaticStructureSchema = [
  3,
  n0,
  _LSRis,
  0,
  [_NT, _MR, _SN, _St, _RL, _D, _CI, _WN],
  [0, 1, 0, 0, 2, 0, 0, 0],
];
export var ListStatementsResponse: StaticStructureSchema = [3, n0, _LSRist, 0, [_Sta, _NT], [() => StatementList, 0]];
export var ListTablesRequest: StaticStructureSchema = [
  3,
  n0,
  _LTR,
  0,
  [_CI, _SA, _DU, _D, _CD, _SP, _TP, _NT, _MR, _WN],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
];
export var ListTablesResponse: StaticStructureSchema = [3, n0, _LTRi, 0, [_Ta, _NT], [() => TableList, 0]];
export var QueryTimeoutException: StaticErrorSchema = [
  -3,
  n0,
  _QTE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(QueryTimeoutException, __QueryTimeoutException);

export var ResourceNotFoundException: StaticErrorSchema = [
  -3,
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M, _RI],
  [0, 0],
];
TypeRegistry.for(n0).registerError(ResourceNotFoundException, __ResourceNotFoundException);

export var SqlParameter: StaticStructureSchema = [3, n0, _SPq, 0, [_n, _v], [0, 0]];
export var StatementData: StaticStructureSchema = [
  3,
  n0,
  _SD,
  0,
  [_I, _QS, _QSu, _SA, _St, _SN, _CA, _UA, _QP, _IBS, _RF, _SIe],
  [0, 0, 64 | 0, 0, 0, 0, 4, 4, () => SqlParametersList, 2, 0, 0],
];
export var SubStatementData: StaticStructureSchema = [
  3,
  n0,
  _SSD,
  0,
  [_I, _Du, _E, _St, _CA, _UA, _QS, _RR, _RS, _RQI, _HRS],
  [0, 1, 0, 0, 4, 4, 0, 1, 1, 1, 2],
];
export var TableMember: StaticStructureSchema = [3, n0, _TM, 0, [_n, _t, _sch], [0, 0, 0]];
export var ValidationException: StaticErrorSchema = [
  -3,
  n0,
  _VE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(ValidationException, __ValidationException);

export var RedshiftDataServiceException: StaticErrorSchema = [-3, _sm, "RedshiftDataServiceException", 0, [], []];
TypeRegistry.for(_sm).registerError(RedshiftDataServiceException, __RedshiftDataServiceException);

export var ColumnList: StaticListSchema = [1, n0, _CL, 0, () => ColumnMetadata];
export var ColumnMetadataList: StaticListSchema = [1, n0, _CML, 0, () => ColumnMetadata];
export var DatabaseList = 64 | 0;

export var DbGroupList = 64 | 0;

export var FieldList: StaticListSchema = [1, n0, _FL, 0, () => Field];
export var FormattedSqlRecords: StaticListSchema = [1, n0, _FSR, 0, () => QueryRecords];
export var SchemaList = 64 | 0;

export var SqlList = 64 | 0;

export var SqlParametersList: StaticListSchema = [1, n0, _SPL, 0, () => SqlParameter];
export var SqlRecords: StaticListSchema = [1, n0, _SR, 0, () => FieldList];
export var StatementList: StaticListSchema = [1, n0, _SL, 0, () => StatementData];
export var StatementStringList = 64 | 0;

export var SubStatementList: StaticListSchema = [1, n0, _SSL, 0, () => SubStatementData];
export var TableList: StaticListSchema = [1, n0, _TL, 0, () => TableMember];
export var Field: StaticStructureSchema = [3, n0, _F, 0, [_iN, _bV, _lV, _dV, _sV, _bVl], [2, 2, 1, 1, 0, 21]];
export var QueryRecords: StaticStructureSchema = [3, n0, _QR, 0, [_CSVR], [0]];
export var BatchExecuteStatement: StaticOperationSchema = [
  9,
  n0,
  _BES,
  0,
  () => BatchExecuteStatementInput,
  () => BatchExecuteStatementOutput,
];
export var CancelStatement: StaticOperationSchema = [
  9,
  n0,
  _CS,
  0,
  () => CancelStatementRequest,
  () => CancelStatementResponse,
];
export var DescribeStatement: StaticOperationSchema = [
  9,
  n0,
  _DS,
  0,
  () => DescribeStatementRequest,
  () => DescribeStatementResponse,
];
export var DescribeTable: StaticOperationSchema = [
  9,
  n0,
  _DT,
  0,
  () => DescribeTableRequest,
  () => DescribeTableResponse,
];
export var ExecuteStatement: StaticOperationSchema = [
  9,
  n0,
  _ES,
  0,
  () => ExecuteStatementInput,
  () => ExecuteStatementOutput,
];
export var GetStatementResult: StaticOperationSchema = [
  9,
  n0,
  _GSR,
  0,
  () => GetStatementResultRequest,
  () => GetStatementResultResponse,
];
export var GetStatementResultV2: StaticOperationSchema = [
  9,
  n0,
  _GSRV,
  0,
  () => GetStatementResultV2Request,
  () => GetStatementResultV2Response,
];
export var ListDatabases: StaticOperationSchema = [
  9,
  n0,
  _LD,
  0,
  () => ListDatabasesRequest,
  () => ListDatabasesResponse,
];
export var ListSchemas: StaticOperationSchema = [9, n0, _LS, 0, () => ListSchemasRequest, () => ListSchemasResponse];
export var ListStatements: StaticOperationSchema = [
  9,
  n0,
  _LSi,
  0,
  () => ListStatementsRequest,
  () => ListStatementsResponse,
];
export var ListTables: StaticOperationSchema = [9, n0, _LT, 0, () => ListTablesRequest, () => ListTablesResponse];
