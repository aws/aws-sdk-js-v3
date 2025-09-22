// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AE,
  _BGNQ,
  _BGNQI,
  _BGNQO,
  _BGPS,
  _BGPSI,
  _BGPSO,
  _BGQE,
  _BGQEI,
  _BGQEO,
  _Cat,
  _CDT,
  _CNQ,
  _CNQI,
  _CNQO,
  _CPS,
  _CPSI,
  _CPSO,
  _CRT,
  _D,
  _Da,
  _DML,
  _DSIB,
  _EC,
  _ECr,
  _EETIM,
  _EM,
  _En,
  _EP,
  _ET,
  _EV,
  _GNQ,
  _GNQI,
  _GNQO,
  _GPS,
  _GPSI,
  _GPSO,
  _GQE,
  _GQEI,
  _GQEO,
  _LMT,
  _MAIM,
  _MQRC,
  _N,
  _NQ,
  _NQa,
  _NQI,
  _NQIa,
  _NQL,
  _PS,
  _PSDL,
  _PSN,
  _PSr,
  _Q,
  _QE,
  _QEC,
  _QEI,
  _QEIu,
  _QEL,
  _QES,
  _QESu,
  _QEu,
  _QPTIM,
  _QQTIM,
  _QRSAGC,
  _QS,
  _QSu,
  _R,
  _RC,
  _RPR,
  _RRBAC,
  _RRC,
  _RRI,
  _S,
  _SCR,
  _SDT,
  _SNt,
  _SPPTIM,
  _SPTIM,
  _SQE,
  _SQEI,
  _SQEO,
  _ST,
  _St,
  _Sta,
  _STu,
  _TETIM,
  _UNQ,
  _UNQI,
  _UNQIL,
  _UNQIn,
  _UNQIp,
  _UNQO,
  _UPS,
  _UPSI,
  _UPSN,
  _UPSNL,
  _UPSNn,
  _UPSO,
  _UQEI,
  _UQEIL,
  _UQEIn,
  _WG,
  _WGNo,
  n0,
} from "./schemas_0";
import { ResultConfiguration } from "./schemas_5_Get";
import {
  EngineVersion,
  ManagedQueryResultsConfiguration,
  QueryResultsS3AccessGrantsConfiguration,
} from "./schemas_8_Work";

/* eslint no-var: 0 */

export var AthenaError = struct(n0, _AE, 0, [_EC, _ET, _R, _EM], [1, 1, 2, 0]);
export var BatchGetNamedQueryInput = struct(n0, _BGNQI, 0, [_NQI], [64 | 0]);
export var BatchGetNamedQueryOutput = struct(
  n0,
  _BGNQO,
  0,
  [_NQ, _UNQI],
  [() => NamedQueryList, () => UnprocessedNamedQueryIdList]
);
export var BatchGetPreparedStatementInput = struct(n0, _BGPSI, 0, [_PSN, _WG], [64 | 0, 0]);
export var BatchGetPreparedStatementOutput = struct(
  n0,
  _BGPSO,
  0,
  [_PS, _UPSN],
  [() => PreparedStatementDetailsList, () => UnprocessedPreparedStatementNameList]
);
export var BatchGetQueryExecutionInput = struct(n0, _BGQEI, 0, [_QEI], [64 | 0]);
export var BatchGetQueryExecutionOutput = struct(
  n0,
  _BGQEO,
  0,
  [_QE, _UQEI],
  [() => QueryExecutionList, () => UnprocessedQueryExecutionIdList]
);
export var CreateNamedQueryInput = struct(n0, _CNQI, 0, [_N, _D, _Da, _QS, _CRT, _WG], [0, 0, 0, 0, [0, 4], 0]);
export var CreateNamedQueryOutput = struct(n0, _CNQO, 0, [_NQIa], [0]);
export var CreatePreparedStatementInput = struct(n0, _CPSI, 0, [_SNt, _WG, _QSu, _D], [0, 0, 0, 0]);
export var CreatePreparedStatementOutput = struct(n0, _CPSO, 0, [], []);
export var GetNamedQueryInput = struct(n0, _GNQI, 0, [_NQIa], [0]);
export var GetNamedQueryOutput = struct(n0, _GNQO, 0, [_NQa], [() => NamedQuery]);
export var GetPreparedStatementInput = struct(n0, _GPSI, 0, [_SNt, _WG], [0, 0]);
export var GetPreparedStatementOutput = struct(n0, _GPSO, 0, [_PSr], [() => PreparedStatement]);
export var GetQueryExecutionInput = struct(n0, _GQEI, 0, [_QEIu], [0]);
export var GetQueryExecutionOutput = struct(n0, _GQEO, 0, [_QEu], [() => QueryExecution]);
export var NamedQuery = struct(n0, _NQa, 0, [_N, _D, _Da, _QS, _NQIa, _WG], [0, 0, 0, 0, 0, 0]);
export var PreparedStatement = struct(n0, _PSr, 0, [_SNt, _QSu, _WGNo, _D, _LMT], [0, 0, 0, 0, 4]);
export var QueryExecution = struct(
  n0,
  _QEu,
  0,
  [_QEIu, _Q, _ST, _MQRC, _RC, _RRC, _QEC, _St, _Sta, _WG, _EV, _EP, _STu, _QRSAGC],
  [
    0,
    0,
    0,
    () => ManagedQueryResultsConfiguration,
    () => ResultConfiguration,
    () => ResultReuseConfiguration,
    () => QueryExecutionContext,
    () => QueryExecutionStatus,
    () => QueryExecutionStatistics,
    0,
    () => EngineVersion,
    64 | 0,
    0,
    () => QueryResultsS3AccessGrantsConfiguration,
  ]
);
export var QueryExecutionContext = struct(n0, _QEC, 0, [_Da, _Cat], [0, 0]);
export var QueryExecutionStatistics = struct(
  n0,
  _QES,
  0,
  [_EETIM, _DSIB, _DML, _TETIM, _QQTIM, _SPPTIM, _QPTIM, _SPTIM, _RRI],
  [1, 1, 0, 1, 1, 1, 1, 1, () => ResultReuseInformation]
);
export var QueryExecutionStatus = struct(n0, _QESu, 0, [_S, _SCR, _SDT, _CDT, _AE], [0, 0, 4, 4, () => AthenaError]);
export var ResultReuseByAgeConfiguration = struct(n0, _RRBAC, 0, [_En, _MAIM], [2, 1]);
export var ResultReuseConfiguration = struct(n0, _RRC, 0, [_RRBAC], [() => ResultReuseByAgeConfiguration]);
export var ResultReuseInformation = struct(n0, _RRI, 0, [_RPR], [2]);
export var StartQueryExecutionInput = struct(
  n0,
  _SQEI,
  0,
  [_QS, _CRT, _QEC, _RC, _WG, _EP, _RRC],
  [0, [0, 4], () => QueryExecutionContext, () => ResultConfiguration, 0, 64 | 0, () => ResultReuseConfiguration]
);
export var StartQueryExecutionOutput = struct(n0, _SQEO, 0, [_QEIu], [0]);
export var UnprocessedNamedQueryId = struct(n0, _UNQIn, 0, [_NQIa, _ECr, _EM], [0, 0, 0]);
export var UnprocessedPreparedStatementName = struct(n0, _UPSNn, 0, [_SNt, _ECr, _EM], [0, 0, 0]);
export var UnprocessedQueryExecutionId = struct(n0, _UQEIn, 0, [_QEIu, _ECr, _EM], [0, 0, 0]);
export var UpdateNamedQueryInput = struct(n0, _UNQIp, 0, [_NQIa, _N, _D, _QS], [0, 0, 0, 0]);
export var UpdateNamedQueryOutput = struct(n0, _UNQO, 0, [], []);
export var UpdatePreparedStatementInput = struct(n0, _UPSI, 0, [_SNt, _WG, _QSu, _D], [0, 0, 0, 0]);
export var UpdatePreparedStatementOutput = struct(n0, _UPSO, 0, [], []);
export var ExecutionParameters = 64 | 0;

export var NamedQueryList = list(n0, _NQL, 0, () => NamedQuery);
export var PreparedStatementDetailsList = list(n0, _PSDL, 0, () => PreparedStatement);
export var PreparedStatementNameList = 64 | 0;

export var QueryExecutionList = list(n0, _QEL, 0, () => QueryExecution);
export var UnprocessedNamedQueryIdList = list(n0, _UNQIL, 0, () => UnprocessedNamedQueryId);
export var UnprocessedPreparedStatementNameList = list(n0, _UPSNL, 0, () => UnprocessedPreparedStatementName);
export var UnprocessedQueryExecutionIdList = list(n0, _UQEIL, 0, () => UnprocessedQueryExecutionId);
export var BatchGetNamedQuery = op(
  n0,
  _BGNQ,
  0,
  () => BatchGetNamedQueryInput,
  () => BatchGetNamedQueryOutput
);
export var BatchGetPreparedStatement = op(
  n0,
  _BGPS,
  0,
  () => BatchGetPreparedStatementInput,
  () => BatchGetPreparedStatementOutput
);
export var BatchGetQueryExecution = op(
  n0,
  _BGQE,
  0,
  () => BatchGetQueryExecutionInput,
  () => BatchGetQueryExecutionOutput
);
export var CreateNamedQuery = op(
  n0,
  _CNQ,
  2,
  () => CreateNamedQueryInput,
  () => CreateNamedQueryOutput
);
export var CreatePreparedStatement = op(
  n0,
  _CPS,
  0,
  () => CreatePreparedStatementInput,
  () => CreatePreparedStatementOutput
);
export var GetNamedQuery = op(
  n0,
  _GNQ,
  0,
  () => GetNamedQueryInput,
  () => GetNamedQueryOutput
);
export var GetPreparedStatement = op(
  n0,
  _GPS,
  0,
  () => GetPreparedStatementInput,
  () => GetPreparedStatementOutput
);
export var GetQueryExecution = op(
  n0,
  _GQE,
  0,
  () => GetQueryExecutionInput,
  () => GetQueryExecutionOutput
);
export var StartQueryExecution = op(
  n0,
  _SQE,
  2,
  () => StartQueryExecutionInput,
  () => StartQueryExecutionOutput
);
export var UpdateNamedQuery = op(
  n0,
  _UNQ,
  2,
  () => UpdateNamedQueryInput,
  () => UpdateNamedQueryOutput
);
export var UpdatePreparedStatement = op(
  n0,
  _UPS,
  0,
  () => UpdatePreparedStatementInput,
  () => UpdatePreparedStatementOutput
);
