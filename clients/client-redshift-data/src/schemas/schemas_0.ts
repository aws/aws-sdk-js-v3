const _ASEE = "ActiveSessionsExceededException";
const _ASEEc = "ActiveStatementsExceededException";
const _BES = "BatchExecuteStatement";
const _BESE = "BatchExecuteStatementException";
const _BESI = "BatchExecuteStatementInput";
const _BESO = "BatchExecuteStatementOutput";
const _CA = "CreatedAt";
const _CD = "ConnectedDatabase";
const _CI = "ClusterIdentifier";
const _CL = "ColumnList";
const _CM = "ColumnMetadata";
const _CML = "ColumnMetadataList";
const _CS = "CancelStatement";
const _CSR = "CancelStatementRequest";
const _CSRa = "CancelStatementResponse";
const _CSVR = "CSVRecords";
const _CT = "ClientToken";
const _D = "Database";
const _DCE = "DatabaseConnectionException";
const _DG = "DbGroups";
const _DS = "DescribeStatement";
const _DSR = "DescribeStatementRequest";
const _DSRe = "DescribeStatementResponse";
const _DT = "DescribeTable";
const _DTR = "DescribeTableRequest";
const _DTRe = "DescribeTableResponse";
const _DU = "DbUser";
const _Da = "Databases";
const _Du = "Duration";
const _E = "Error";
const _ES = "ExecuteStatement";
const _ESE = "ExecuteStatementException";
const _ESI = "ExecuteStatementInput";
const _ESO = "ExecuteStatementOutput";
const _F = "Field";
const _FL = "FieldList";
const _FSR = "FormattedSqlRecords";
const _GSR = "GetStatementResult";
const _GSRR = "GetStatementResultRequest";
const _GSRRe = "GetStatementResultResponse";
const _GSRV = "GetStatementResultV2";
const _GSRVR = "GetStatementResultV2Request";
const _GSRVRe = "GetStatementResultV2Response";
const _HRS = "HasResultSet";
const _I = "Id";
const _IBS = "IsBatchStatement";
const _ISE = "InternalServerException";
const _LD = "ListDatabases";
const _LDR = "ListDatabasesRequest";
const _LDRi = "ListDatabasesResponse";
const _LS = "ListSchemas";
const _LSR = "ListSchemasRequest";
const _LSRi = "ListSchemasResponse";
const _LSRis = "ListStatementsRequest";
const _LSRist = "ListStatementsResponse";
const _LSi = "ListStatements";
const _LT = "ListTables";
const _LTR = "ListTablesRequest";
const _LTRi = "ListTablesResponse";
const _M = "Message";
const _MR = "MaxResults";
const _NT = "NextToken";
const _P = "Parameters";
const _QP = "QueryParameters";
const _QR = "QueryRecords";
const _QS = "QueryString";
const _QSu = "QueryStrings";
const _QTE = "QueryTimeoutException";
const _R = "Records";
const _RF = "ResultFormat";
const _RI = "ResourceId";
const _RL = "RoleLevel";
const _RNFE = "ResourceNotFoundException";
const _RP = "RedshiftPid";
const _RQI = "RedshiftQueryId";
const _RR = "ResultRows";
const _RS = "ResultSize";
const _S = "Sqls";
const _SA = "SecretArn";
const _SD = "StatementData";
const _SI = "StatementId";
const _SIe = "SessionId";
const _SKAS = "SessionKeepAliveSeconds";
const _SL = "StatementList";
const _SN = "StatementName";
const _SP = "SchemaPattern";
const _SPL = "SqlParametersList";
const _SPq = "SqlParameter";
const _SR = "SqlRecords";
const _SS = "SubStatements";
const _SSD = "SubStatementData";
const _SSL = "SubStatementList";
const _Sc = "Schema";
const _Sch = "Schemas";
const _Sq = "Sql";
const _St = "Status";
const _Sta = "Statements";
const _T = "Table";
const _TL = "TableList";
const _TM = "TableMember";
const _TN = "TableName";
const _TNR = "TotalNumRows";
const _TP = "TablePattern";
const _Ta = "Tables";
const _UA = "UpdatedAt";
const _VE = "ValidationException";
const _WE = "WithEvent";
const _WN = "WorkgroupName";
const _bV = "booleanValue";
const _bVl = "blobValue";
const _c = "client";
const _cD = "columnDefault";
const _dV = "doubleValue";
const _e = "error";
const _hE = "httpError";
const _iC = "isCurrency";
const _iCS = "isCaseSensitive";
const _iN = "isNull";
const _iS = "isSigned";
const _l = "label";
const _lV = "longValue";
const _le = "length";
const _n = "name";
const _nu = "nullable";
const _p = "precision";
const _s = "server";
const _sN = "schemaName";
const _sV = "stringValue";
const _sc = "scale";
const _sch = "schema";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.redshiftdata";
const _t = "type";
const _tN = "tableName";
const _tNy = "typeName";
const _v = "value";
const n0 = "com.amazonaws.redshiftdata";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type { StaticErrorSchema, StaticListSchema, StaticOperationSchema, StaticStructureSchema } from "@smithy/types";

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
} from "../models/errors";
import { RedshiftDataServiceException as __RedshiftDataServiceException } from "../models/RedshiftDataServiceException";

/* eslint no-var: 0 */
export var ActiveSessionsExceededException: StaticErrorSchema = [-3, n0, _ASEE, { [_e]: _c, [_hE]: 400 }, [_M], [0]];
TypeRegistry.for(n0).registerError(ActiveSessionsExceededException, __ActiveSessionsExceededException);
export var ActiveStatementsExceededException: StaticErrorSchema = [-3, n0, _ASEEc, { [_e]: _c, [_hE]: 400 }, [_M], [0]];
TypeRegistry.for(n0).registerError(ActiveStatementsExceededException, __ActiveStatementsExceededException);
export var BatchExecuteStatementException: StaticErrorSchema = [
  -3,
  n0,
  _BESE,
  { [_e]: _s, [_hE]: 500 },
  [_M, _SI],
  [0, 0],
];
TypeRegistry.for(n0).registerError(BatchExecuteStatementException, __BatchExecuteStatementException);
export var BatchExecuteStatementInput: StaticStructureSchema = [
  3,
  n0,
  _BESI,
  0,
  [_S, _CI, _SA, _DU, _D, _WE, _SN, _WN, _CT, _RF, _SKAS, _SIe],
  [64 | 0, 0, 0, 0, 0, 2, 0, 0, [0, 4], 0, 1, 0],
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
export var DatabaseConnectionException: StaticErrorSchema = [-3, n0, _DCE, { [_e]: _s, [_hE]: 500 }, [_M], [0]];
TypeRegistry.for(n0).registerError(DatabaseConnectionException, __DatabaseConnectionException);
export var DescribeStatementRequest: StaticStructureSchema = [3, n0, _DSR, 0, [_I], [0]];
export var DescribeStatementResponse: StaticStructureSchema = [
  3,
  n0,
  _DSRe,
  0,
  [_I, _SA, _DU, _D, _CI, _Du, _E, _St, _CA, _UA, _RP, _HRS, _QS, _RR, _RS, _RQI, _QP, _SS, _WN, _RF, _SIe],
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
export var ExecuteStatementException: StaticErrorSchema = [-3, n0, _ESE, { [_e]: _s, [_hE]: 500 }, [_M, _SI], [0, 0]];
TypeRegistry.for(n0).registerError(ExecuteStatementException, __ExecuteStatementException);
export var ExecuteStatementInput: StaticStructureSchema = [
  3,
  n0,
  _ESI,
  0,
  [_Sq, _CI, _SA, _DU, _D, _WE, _SN, _P, _WN, _CT, _RF, _SKAS, _SIe],
  [0, 0, 0, 0, 0, 2, 0, () => SqlParametersList, 0, [0, 4], 0, 1, 0],
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
export var InternalServerException: StaticErrorSchema = [-3, n0, _ISE, { [_e]: _s, [_hE]: 500 }, [_M], [0]];
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
export var QueryTimeoutException: StaticErrorSchema = [-3, n0, _QTE, { [_e]: _c, [_hE]: 400 }, [_M], [0]];
TypeRegistry.for(n0).registerError(QueryTimeoutException, __QueryTimeoutException);
export var ResourceNotFoundException: StaticErrorSchema = [-3, n0, _RNFE, { [_e]: _c, [_hE]: 404 }, [_M, _RI], [0, 0]];
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
export var ValidationException: StaticErrorSchema = [-3, n0, _VE, { [_e]: _c, [_hE]: 400 }, [_M], [0]];
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
