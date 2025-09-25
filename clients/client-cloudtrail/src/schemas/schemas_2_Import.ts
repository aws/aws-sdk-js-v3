// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  AccountHasOngoingImportException as __AccountHasOngoingImportException,
  ImportNotFoundException as __ImportNotFoundException,
  InactiveQueryException as __InactiveQueryException,
  InvalidDateRangeException as __InvalidDateRangeException,
  InvalidImportSourceException as __InvalidImportSourceException,
  InvalidQueryStatusException as __InvalidQueryStatusException,
  MaxConcurrentQueriesException as __MaxConcurrentQueriesException,
  QueryIdNotFoundException as __QueryIdNotFoundException,
} from "../models/index";
import {
  _AESd,
  _AHOIE,
  _aQE,
  _ATAR,
  _BS,
  _C,
  _c,
  _CA,
  _CQ,
  _CQR,
  _CQRa,
  _CT,
  _CTr,
  _D,
  _De,
  _DQ,
  _DQR,
  _DQRe,
  _DS,
  _DSU,
  _e,
  _EC,
  _EDS,
  _EDSOAI,
  _EET,
  _EM,
  _EMv,
  _ESven,
  _ETIM,
  _ETn,
  _ETr,
  _Fa,
  _FC,
  _FE,
  _GC,
  _GCR,
  _GCRe,
  _GI,
  _GIR,
  _GIRe,
  _GQRet,
  _GQRR,
  _GQRRe,
  _hE,
  _I,
  _IDRE,
  _IFL,
  _IFLI,
  _II,
  _IISE,
  _ILI,
  _ILm,
  _INFE,
  _IQE,
  _IQSEn,
  _IS,
  _ISm,
  _ISmp,
  _ISmpo,
  _L,
  _LI,
  _LIAEID,
  _LIAT,
  _LIEC,
  _LIF,
  _LIFR,
  _LIFRi,
  _LIR,
  _LIRi,
  _LISEID,
  _LIST,
  _LQ,
  _LQR,
  _LQRi,
  _LUT,
  _M,
  _MCQE,
  _MQR,
  _MR,
  _N,
  _NT,
  _P,
  _PC,
  _PF,
  _Q,
  _QA,
  _QI,
  _QINFE,
  _QP,
  _QRR,
  _QRRu,
  _QS,
  _QSFDQ,
  _QSu,
  _QSue,
  _QSuer,
  _Qu,
  _RC,
  _RIe,
  _S,
  _S_,
  _SBARA,
  _SBR,
  _SC,
  _SET,
  _SIR,
  _SIRt,
  _SIRto,
  _SIRtop,
  _SIS,
  _SIt,
  _SIto,
  _SLU,
  _SQ,
  _SQR,
  _SQRt,
  _ST,
  _St,
  _TRC,
  _UT,
  n0,
} from "./schemas_0";
import { AdvancedEventSelectors } from "./schemas_13_Event";
import { Destinations } from "./schemas_20_Channel";

/* eslint no-var: 0 */

export var AccountHasOngoingImportException = error(
  n0,
  _AHOIE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`AccountHasOngoingImport`, 400],
  },
  [_M],
  [0],

  __AccountHasOngoingImportException
);
export var CancelQueryRequest = struct(n0, _CQR, 0, [_EDS, _QI, _EDSOAI], [0, 0, 0]);
export var CancelQueryResponse = struct(n0, _CQRa, 0, [_QI, _QS, _EDSOAI], [0, 0, 0]);
export var DescribeQueryRequest = struct(n0, _DQR, 0, [_EDS, _QI, _QA, _RIe, _EDSOAI], [0, 0, 0, 0, 0]);
export var DescribeQueryResponse = struct(
  n0,
  _DQRe,
  0,
  [_QI, _QSu, _QS, _QSue, _EM, _DSU, _DS, _P, _EDSOAI],
  [0, 0, 0, () => QueryStatisticsForDescribeQuery, 0, 0, 0, 0, 0]
);
export var GetChannelRequest = struct(n0, _GCR, 0, [_C], [0]);
export var GetChannelResponse = struct(
  n0,
  _GCRe,
  0,
  [_CA, _N, _S, _SC, _D, _IS],
  [0, 0, 0, () => SourceConfig, () => Destinations, () => IngestionStatus]
);
export var GetImportRequest = struct(n0, _GIR, 0, [_II], [0]);
export var GetImportResponse = struct(
  n0,
  _GIRe,
  0,
  [_II, _D, _ISm, _SET, _EET, _ISmp, _CT, _UT, _ISmpo],
  [0, 64 | 0, () => ImportSource, 4, 4, 0, 4, 4, () => ImportStatistics]
);
export var GetQueryResultsRequest = struct(n0, _GQRR, 0, [_EDS, _QI, _NT, _MQR, _EDSOAI], [0, 0, 0, 1, 0]);
export var GetQueryResultsResponse = struct(
  n0,
  _GQRRe,
  0,
  [_QS, _QSue, _QRR, _NT, _EM],
  [0, () => QueryStatistics, list(n0, _QRR, 0, list(n0, _QRRu, 0, 128 | 0)), 0, 0]
);
export var ImportFailureListItem = struct(n0, _IFLI, 0, [_L, _St, _ETr, _EM, _LUT], [0, 0, 0, 0, 4]);
export var ImportNotFoundException = error(
  n0,
  _INFE,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`ImportNotFound`, 404],
  },
  [_M],
  [0],

  __ImportNotFoundException
);
export var ImportsListItem = struct(n0, _ILI, 0, [_II, _ISmp, _D, _CT, _UT], [0, 0, 64 | 0, 4, 4]);
export var ImportSource = struct(n0, _ISm, 0, [_S_], [() => S3ImportSource]);
export var ImportStatistics = struct(n0, _ISmpo, 0, [_PF, _PC, _FC, _EC, _FE], [1, 1, 1, 1, 1]);
export var InactiveQueryException = error(
  n0,
  _IQE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InactiveQuery`, 400],
  },
  [_M],
  [0],

  __InactiveQueryException
);
export var IngestionStatus = struct(n0, _IS, 0, [_LIST, _LISEID, _LIEC, _LIAT, _LIAEID], [4, 0, 0, 4, 0]);
export var InvalidDateRangeException = error(
  n0,
  _IDRE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidDateRange`, 400],
  },
  [_M],
  [0],

  __InvalidDateRangeException
);
export var InvalidImportSourceException = error(
  n0,
  _IISE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidImportSource`, 400],
  },
  [_M],
  [0],

  __InvalidImportSourceException
);
export var InvalidQueryStatusException = error(
  n0,
  _IQSEn,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidQueryStatus`, 400],
  },
  [_M],
  [0],

  __InvalidQueryStatusException
);
export var ListImportFailuresRequest = struct(n0, _LIFR, 0, [_II, _MR, _NT], [0, 1, 0]);
export var ListImportFailuresResponse = struct(n0, _LIFRi, 0, [_Fa, _NT], [() => ImportFailureList, 0]);
export var ListImportsRequest = struct(n0, _LIR, 0, [_MR, _De, _ISmp, _NT], [1, 0, 0, 0]);
export var ListImportsResponse = struct(n0, _LIRi, 0, [_I, _NT], [() => ImportsList, 0]);
export var ListQueriesRequest = struct(n0, _LQR, 0, [_EDS, _NT, _MR, _ST, _ETn, _QS], [0, 0, 1, 4, 4, 0]);
export var ListQueriesResponse = struct(n0, _LQRi, 0, [_Q, _NT], [() => Queries, 0]);
export var MaxConcurrentQueriesException = error(
  n0,
  _MCQE,
  {
    [_e]: _c,
    [_hE]: 429,
    [_aQE]: [`MaxConcurrentQueries`, 429],
  },
  [_M],
  [0],

  __MaxConcurrentQueriesException
);
export var Query = struct(n0, _Qu, 0, [_QI, _QS, _CTr], [0, 0, 4]);
export var QueryIdNotFoundException = error(
  n0,
  _QINFE,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`QueryIdNotFound`, 404],
  },
  [_M],
  [0],

  __QueryIdNotFoundException
);
export var QueryStatistics = struct(n0, _QSue, 0, [_RC, _TRC, _BS], [1, 1, 1]);
export var QueryStatisticsForDescribeQuery = struct(n0, _QSFDQ, 0, [_EMv, _ESven, _BS, _ETIM, _CTr], [1, 1, 1, 1, 4]);
export var S3ImportSource = struct(n0, _SIS, 0, [_SLU, _SBR, _SBARA], [0, 0, 0]);
export var SourceConfig = struct(n0, _SC, 0, [_ATAR, _AESd], [2, () => AdvancedEventSelectors]);
export var StartImportRequest = struct(n0, _SIR, 0, [_D, _ISm, _SET, _EET, _II], [64 | 0, () => ImportSource, 4, 4, 0]);
export var StartImportResponse = struct(
  n0,
  _SIRt,
  0,
  [_II, _D, _ISm, _SET, _EET, _ISmp, _CT, _UT],
  [0, 64 | 0, () => ImportSource, 4, 4, 0, 4, 4]
);
export var StartQueryRequest = struct(n0, _SQR, 0, [_QSuer, _DSU, _QA, _QP, _EDSOAI], [0, 0, 0, 64 | 0, 0]);
export var StartQueryResponse = struct(n0, _SQRt, 0, [_QI, _EDSOAI], [0, 0]);
export var StopImportRequest = struct(n0, _SIRto, 0, [_II], [0]);
export var StopImportResponse = struct(
  n0,
  _SIRtop,
  0,
  [_II, _ISm, _D, _ISmp, _CT, _UT, _SET, _EET, _ISmpo],
  [0, () => ImportSource, 64 | 0, 0, 4, 4, 4, 4, () => ImportStatistics]
);
export var ImportDestinations = 64 | 0;

export var ImportFailureList = list(n0, _IFL, 0, () => ImportFailureListItem);
export var ImportsList = list(n0, _ILm, 0, () => ImportsListItem);
export var Queries = list(n0, _Q, 0, () => Query);
export var QueryResultRow = list(n0, _QRRu, 0, 128 | 0);
export var QueryResultRows = list(n0, _QRR, 0, list(n0, _QRRu, 0, 128 | 0));
export var QueryResultColumn = 128 | 0;

export var CancelQuery = op(
  n0,
  _CQ,
  2,
  () => CancelQueryRequest,
  () => CancelQueryResponse
);
export var DescribeQuery = op(
  n0,
  _DQ,
  2,
  () => DescribeQueryRequest,
  () => DescribeQueryResponse
);
export var GetChannel = op(
  n0,
  _GC,
  2,
  () => GetChannelRequest,
  () => GetChannelResponse
);
export var GetImport = op(
  n0,
  _GI,
  0,
  () => GetImportRequest,
  () => GetImportResponse
);
export var GetQueryResults = op(
  n0,
  _GQRet,
  0,
  () => GetQueryResultsRequest,
  () => GetQueryResultsResponse
);
export var ListImportFailures = op(
  n0,
  _LIF,
  2,
  () => ListImportFailuresRequest,
  () => ListImportFailuresResponse
);
export var ListImports = op(
  n0,
  _LI,
  2,
  () => ListImportsRequest,
  () => ListImportsResponse
);
export var ListQueries = op(
  n0,
  _LQ,
  2,
  () => ListQueriesRequest,
  () => ListQueriesResponse
);
export var StartImport = op(
  n0,
  _SIt,
  0,
  () => StartImportRequest,
  () => StartImportResponse
);
export var StartQuery = op(
  n0,
  _SQ,
  2,
  () => StartQueryRequest,
  () => StartQueryResponse
);
export var StopImport = op(
  n0,
  _SIto,
  0,
  () => StopImportRequest,
  () => StopImportResponse
);
