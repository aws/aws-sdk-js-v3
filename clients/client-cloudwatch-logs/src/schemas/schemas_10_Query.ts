// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { MalformedQueryException as __MalformedQueryException } from "../models/index";
import {
  _bS,
  _c,
  _cTl,
  _cTre,
  _DQ,
  _DQD,
  _DQDe,
  _DQDR,
  _DQDRe,
  _DQDRes,
  _DQDResc,
  _DQR,
  _DQRe,
  _e,
  _eBS,
  _eCO,
  _eK,
  _eRS,
  _eTn,
  _fi,
  _GQR,
  _GQRR,
  _GQRRe,
  _lGIo,
  _lGN,
  _lGNo,
  _lGS,
  _li,
  _LLGFQ,
  _LLGFQR,
  _LLGFQRi,
  _lM,
  _lo,
  _m,
  _MQE,
  _mR,
  _n,
  _nT,
  _PQD,
  _PQDR,
  _PQDRu,
  _q,
  _QCE,
  _qCE,
  _QCEL,
  _QD,
  _qD,
  _qDI,
  _QDL,
  _qDNP,
  _QI,
  _qI,
  _QIL,
  _qL,
  _QR,
  _QS,
  _qS,
  _r,
  _RFe,
  _rM,
  _RR,
  _rS,
  _sCO,
  _SQ,
  _SQR,
  _SQRt,
  _SQRto,
  _SQRtop,
  _SQt,
  _sta,
  _stat,
  _sTt,
  _suc,
  _v,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteQueryDefinitionRequest = struct(n0, _DQDR, 0, [_qDI], [0]);
export var DeleteQueryDefinitionResponse = struct(n0, _DQDRe, 0, [_suc], [2]);
export var DescribeQueriesRequest = struct(n0, _DQR, 0, [_lGN, _sta, _mR, _nT, _qL], [0, 0, 1, 0, 0]);
export var DescribeQueriesResponse = struct(n0, _DQRe, 0, [_q, _nT], [() => QueryInfoList, 0]);
export var DescribeQueryDefinitionsRequest = struct(n0, _DQDRes, 0, [_qL, _qDNP, _mR, _nT], [0, 0, 1, 0]);
export var DescribeQueryDefinitionsResponse = struct(n0, _DQDResc, 0, [_qD, _nT], [() => QueryDefinitionList, 0]);
export var GetQueryResultsRequest = struct(n0, _GQRR, 0, [_qI], [0]);
export var GetQueryResultsResponse = struct(
  n0,
  _GQRRe,
  0,
  [_qL, _r, _stat, _sta, _eK],
  [0, () => QueryResults, () => QueryStatistics, 0, 0]
);
export var ListLogGroupsForQueryRequest = struct(n0, _LLGFQR, 0, [_qI, _nT, _mR], [0, 0, 1]);
export var ListLogGroupsForQueryResponse = struct(n0, _LLGFQRi, 0, [_lGIo, _nT], [64 | 0, 0]);
export var MalformedQueryException = error(
  n0,
  _MQE,
  {
    [_e]: _c,
  },
  [_qCE, _m],
  [() => QueryCompileError, 0],

  __MalformedQueryException
);
export var PutQueryDefinitionRequest = struct(
  n0,
  _PQDR,
  0,
  [_qL, _n, _qDI, _lGNo, _qS, _cTl],
  [0, 0, 0, 64 | 0, 0, [0, 4]]
);
export var PutQueryDefinitionResponse = struct(n0, _PQDRu, 0, [_qDI], [0]);
export var QueryCompileError = struct(n0, _QCE, 0, [_lo, _m], [() => QueryCompileErrorLocation, 0]);
export var QueryCompileErrorLocation = struct(n0, _QCEL, 0, [_sCO, _eCO], [1, 1]);
export var QueryDefinition = struct(n0, _QD, 0, [_qL, _qDI, _n, _qS, _lM, _lGNo], [0, 0, 0, 0, 1, 64 | 0]);
export var QueryInfo = struct(n0, _QI, 0, [_qL, _qI, _qS, _sta, _cTre, _lGN], [0, 0, 0, 0, 1, 0]);
export var QueryStatistics = struct(n0, _QS, 0, [_rM, _rS, _eRS, _bS, _eBS, _lGS], [1, 1, 1, 1, 1, 1]);
export var ResultField = struct(n0, _RFe, 0, [_fi, _v], [0, 0]);
export var StartQueryRequest = struct(
  n0,
  _SQR,
  0,
  [_qL, _lGN, _lGNo, _lGIo, _sTt, _eTn, _qS, _li],
  [0, 0, 64 | 0, 64 | 0, 1, 1, 0, 1]
);
export var StartQueryResponse = struct(n0, _SQRt, 0, [_qI], [0]);
export var StopQueryRequest = struct(n0, _SQRto, 0, [_qI], [0]);
export var StopQueryResponse = struct(n0, _SQRtop, 0, [_suc], [2]);
export var LogGroupIdentifiers = 64 | 0;

export var LogGroupNames = 64 | 0;

export var QueryDefinitionList = list(n0, _QDL, 0, () => QueryDefinition);
export var QueryInfoList = list(n0, _QIL, 0, () => QueryInfo);
export var QueryResults = list(n0, _QR, 0, () => ResultRows);
export var ResultRows = list(n0, _RR, 0, () => ResultField);
export var DeleteQueryDefinition = op(
  n0,
  _DQD,
  0,
  () => DeleteQueryDefinitionRequest,
  () => DeleteQueryDefinitionResponse
);
export var DescribeQueries = op(
  n0,
  _DQ,
  0,
  () => DescribeQueriesRequest,
  () => DescribeQueriesResponse
);
export var DescribeQueryDefinitions = op(
  n0,
  _DQDe,
  0,
  () => DescribeQueryDefinitionsRequest,
  () => DescribeQueryDefinitionsResponse
);
export var GetQueryResults = op(
  n0,
  _GQR,
  0,
  () => GetQueryResultsRequest,
  () => GetQueryResultsResponse
);
export var ListLogGroupsForQuery = op(
  n0,
  _LLGFQ,
  0,
  () => ListLogGroupsForQueryRequest,
  () => ListLogGroupsForQueryResponse
);
export var PutQueryDefinition = op(
  n0,
  _PQD,
  0,
  () => PutQueryDefinitionRequest,
  () => PutQueryDefinitionResponse
);
export var StartQuery = op(
  n0,
  _SQ,
  0,
  () => StartQueryRequest,
  () => StartQueryResponse
);
export var StopQuery = op(
  n0,
  _SQt,
  0,
  () => StopQueryRequest,
  () => StopQueryResponse
);
