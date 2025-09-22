// smithy-typescript generated code
import { error, list, op, sim, struct } from "@smithy/core/schema";

import {
  AccessDeniedException as __AccessDeniedException,
  ConflictException as __ConflictException,
  QueryExecutionException as __QueryExecutionException,
} from "../models/index";
import {
  _A,
  _ACI,
  _ADE,
  _Al,
  _aQE,
  _AQTCU,
  _ASNC,
  _AV,
  _BM,
  _BN,
  _C,
  _c,
  _CBM,
  _CBS,
  _CE,
  _CI,
  _CIL,
  _CM,
  _CMo,
  _CQ,
  _CQR,
  _CQRa,
  _CRT,
  _CSQ,
  _CSQR,
  _CSQRr,
  _CT,
  _CTr,
  _D,
  _Da,
  _DAS,
  _DASR,
  _DASRe,
  _DL,
  _DM,
  _DMi,
  _DML,
  _DN,
  _DSQ,
  _DSQe,
  _DSQR,
  _DSQRe,
  _DSQRes,
  _DVT,
  _DW,
  _e,
  _EO,
  _ERC,
  _ERL,
  _ES,
  _ESQ,
  _ESQR,
  _ETIM,
  _FR,
  _hE,
  _IT,
  _KKI,
  _LRS,
  _LRSa,
  _LSQ,
  _LSQR,
  _LSQRi,
  _LU,
  _M,
  _Ma,
  _MMAM,
  _MMAML,
  _MMAMu,
  _MMM,
  _MMMi,
  _MMML,
  _MMMu,
  _MN,
  _MNC,
  _Mo,
  _MQTCU,
  _MR,
  _MRa,
  _MVT,
  _N,
  _NC,
  _NIT,
  _NT,
  _NV,
  _OB,
  _OK,
  _OKP,
  _OR,
  _P,
  _PC,
  _PCR,
  _PCRr,
  _PIT,
  _PK,
  _PM,
  _PML,
  _PP,
  _PQ,
  _PQR,
  _PQRr,
  _Q,
  _QC,
  _QCR,
  _QCRu,
  _QEE,
  _QI,
  _QIR,
  _QIu,
  _QPM,
  _QR,
  _QRR,
  _QRu,
  _QS,
  _QSC,
  _QSCM,
  _QSu,
  _QTC,
  _QTR,
  _QTRM,
  _R,
  _RA,
  _RCI,
  _RFR,
  _RI,
  _RL,
  _Ro,
  _RS,
  _RV,
  _S,
  _SC,
  _SCc,
  _SCe,
  _SCL,
  _SCo,
  _SCou,
  _SE,
  _SM,
  _SQ,
  _SQA,
  _SQc,
  _SQD,
  _SQERA,
  _SQI,
  _SQIR,
  _SQL,
  _SQRS,
  _SQRSL,
  _SRL,
  _ST,
  _St,
  _SV,
  _T,
  _TA,
  _Ta,
  _TAo,
  _TC,
  _TCi,
  _TCim,
  _TD,
  _TDi,
  _Ti,
  _TMMAN,
  _TMMN,
  _TMN,
  _TN,
  _TQTCU,
  _TSDP,
  _TSDPL,
  _TSMVCI,
  _TSV,
  _TT,
  _UAS,
  _UASR,
  _UASRp,
  _UPC,
  _USQ,
  _USQR,
  _UWB,
  _UWR,
  _V,
  _VO,
  n0,
} from "./schemas_0";
import { TagList } from "./schemas_3_Resource";

/* eslint no-var: 0 */

export var ClientRequestToken = sim(n0, _CRT, 0, 8);
export var ClientToken = sim(n0, _CT, 0, 8);
export var QueryString = sim(n0, _QS, 0, 8);
export var AccessDeniedException = error(
  n0,
  _ADE,
  {
    [_e]: _c,
    [_hE]: 403,
    [_aQE]: [`AccessDenied`, 403],
  },
  [_M],
  [0],

  __AccessDeniedException
);
export var AccountSettingsNotificationConfiguration = struct(n0, _ASNC, 0, [_SC, _RA], [() => SnsConfiguration, 0]);
export var CancelQueryRequest = struct(n0, _CQR, 0, [_QI], [0]);
export var CancelQueryResponse = struct(n0, _CQRa, 0, [_CM], [0]);
export var ColumnInfo = struct(n0, _CI, 0, [_N, _T], [0, () => Type]);
export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __ConflictException
);
export var CreateScheduledQueryRequest = struct(
  n0,
  _CSQR,
  0,
  [_N, _QS, _SCc, _NC, _TC, _CT, _SQERA, _Ta, _KKI, _ERC],
  [
    0,
    [() => QueryString, 0],
    () => ScheduleConfiguration,
    () => NotificationConfiguration,
    () => TargetConfiguration,
    [() => ClientToken, 4],
    0,
    () => TagList,
    0,
    () => ErrorReportConfiguration,
  ]
);
export var CreateScheduledQueryResponse = struct(n0, _CSQRr, 0, [_A], [0]);
export var Datum = struct(
  n0,
  _D,
  0,
  [_SV, _TSV, _AV, _RV, _NV],
  [0, () => TimeSeriesDataPointList, () => DatumList, () => Row, 2]
);
export var DeleteScheduledQueryRequest = struct(n0, _DSQR, 0, [_SQA], [0]);
export var DescribeAccountSettingsRequest = struct(n0, _DASR, 0, [], []);
export var DescribeAccountSettingsResponse = struct(
  n0,
  _DASRe,
  0,
  [_MQTCU, _QPM, _QC],
  [1, 0, () => QueryComputeResponse]
);
export var DescribeScheduledQueryRequest = struct(n0, _DSQRe, 0, [_SQA], [0]);
export var DescribeScheduledQueryResponse = struct(n0, _DSQRes, 0, [_SQ], [[() => ScheduledQueryDescription, 0]]);
export var DimensionMapping = struct(n0, _DM, 0, [_N, _DVT], [0, 0]);
export var ErrorReportConfiguration = struct(n0, _ERC, 0, [_SCo], [() => S3Configuration]);
export var ErrorReportLocation = struct(n0, _ERL, 0, [_SRL], [() => S3ReportLocation]);
export var ExecuteScheduledQueryRequest = struct(
  n0,
  _ESQR,
  0,
  [_SQA, _IT, _CT, _QIu],
  [0, 4, [() => ClientToken, 4], () => ScheduledQueryInsights]
);
export var ExecutionStats = struct(n0, _ES, 0, [_ETIM, _DW, _BM, _CBS, _RI, _QRR], [1, 1, 1, 1, 1, 1]);
export var LastUpdate = struct(n0, _LU, 0, [_TQTCU, _S, _SM], [1, 0, 0]);
export var ListScheduledQueriesRequest = struct(n0, _LSQR, 0, [_MR, _NT], [1, 0]);
export var ListScheduledQueriesResponse = struct(n0, _LSQRi, 0, [_SQc, _NT], [() => ScheduledQueryList, 0]);
export var MixedMeasureMapping = struct(
  n0,
  _MMM,
  0,
  [_MN, _SCou, _TMN, _MVT, _MMAM],
  [0, 0, 0, 0, () => MultiMeasureAttributeMappingList]
);
export var MultiMeasureAttributeMapping = struct(n0, _MMAMu, 0, [_SCou, _TMMAN, _MVT], [0, 0, 0]);
export var MultiMeasureMappings = struct(n0, _MMMu, 0, [_TMMN, _MMAM], [0, () => MultiMeasureAttributeMappingList]);
export var NotificationConfiguration = struct(n0, _NC, 0, [_SC], [() => SnsConfiguration]);
export var ParameterMapping = struct(n0, _PM, 0, [_N, _T], [0, () => Type]);
export var PrepareQueryRequest = struct(n0, _PQR, 0, [_QS, _VO], [[() => QueryString, 0], 2]);
export var PrepareQueryResponse = struct(
  n0,
  _PQRr,
  0,
  [_QS, _C, _P],
  [[() => QueryString, 0], () => SelectColumnList, () => ParameterMappingList]
);
export var ProvisionedCapacityRequest = struct(
  n0,
  _PCR,
  0,
  [_TQTCU, _NC],
  [1, () => AccountSettingsNotificationConfiguration]
);
export var ProvisionedCapacityResponse = struct(
  n0,
  _PCRr,
  0,
  [_AQTCU, _NC, _LU],
  [1, () => AccountSettingsNotificationConfiguration, () => LastUpdate]
);
export var QueryComputeRequest = struct(n0, _QCR, 0, [_CMo, _PC], [0, () => ProvisionedCapacityRequest]);
export var QueryComputeResponse = struct(n0, _QCRu, 0, [_CMo, _PC], [0, () => ProvisionedCapacityResponse]);
export var QueryExecutionException = error(
  n0,
  _QEE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __QueryExecutionException
);
export var QueryInsights = struct(n0, _QIu, 0, [_Mo], [0]);
export var QueryInsightsResponse = struct(
  n0,
  _QIR,
  0,
  [_QSC, _QTR, _QTC, _OR, _OB, _UPC, _UWR, _UWB],
  [() => QuerySpatialCoverage, () => QueryTemporalRange, 1, 1, 1, 1, 1, 1]
);
export var QueryRequest = struct(
  n0,
  _QR,
  0,
  [_QS, _CT, _NT, _MRa, _QIu],
  [[() => QueryString, 0], [() => ClientRequestToken, 4], 0, 1, () => QueryInsights]
);
export var QueryResponse = struct(
  n0,
  _QRu,
  0,
  [_QI, _NT, _R, _CI, _QSu, _QIR],
  [0, 0, () => RowList, () => ColumnInfoList, () => QueryStatus, () => QueryInsightsResponse]
);
export var QuerySpatialCoverage = struct(n0, _QSC, 0, [_Ma], [() => QuerySpatialCoverageMax]);
export var QuerySpatialCoverageMax = struct(n0, _QSCM, 0, [_V, _TA, _PK], [1, 0, 64 | 0]);
export var QueryStatus = struct(n0, _QSu, 0, [_PP, _CBS, _CBM], [1, 1, 1]);
export var QueryTemporalRange = struct(n0, _QTR, 0, [_Ma], [() => QueryTemporalRangeMax]);
export var QueryTemporalRangeMax = struct(n0, _QTRM, 0, [_V, _TA], [1, 0]);
export var Row = struct(n0, _Ro, 0, [_Da], [() => DatumList]);
export var S3Configuration = struct(n0, _SCo, 0, [_BN, _OKP, _EO], [0, 0, 0]);
export var S3ReportLocation = struct(n0, _SRL, 0, [_BN, _OK], [0, 0]);
export var ScheduleConfiguration = struct(n0, _SCc, 0, [_SE], [0]);
export var ScheduledQuery = struct(
  n0,
  _SQ,
  0,
  [_A, _N, _CTr, _St, _PIT, _NIT, _ERC, _TD, _LRS],
  [0, 0, 4, 0, 4, 4, () => ErrorReportConfiguration, () => TargetDestination, 0]
);
export var ScheduledQueryDescription = struct(
  n0,
  _SQD,
  0,
  [_A, _N, _QS, _CTr, _St, _PIT, _NIT, _SCc, _NC, _TC, _SQERA, _KKI, _ERC, _LRSa, _RFR],
  [
    0,
    0,
    [() => QueryString, 0],
    4,
    0,
    4,
    4,
    () => ScheduleConfiguration,
    () => NotificationConfiguration,
    () => TargetConfiguration,
    0,
    0,
    () => ErrorReportConfiguration,
    () => ScheduledQueryRunSummary,
    () => ScheduledQueryRunSummaryList,
  ]
);
export var ScheduledQueryInsights = struct(n0, _SQI, 0, [_Mo], [0]);
export var ScheduledQueryInsightsResponse = struct(
  n0,
  _SQIR,
  0,
  [_QSC, _QTR, _QTC, _OR, _OB],
  [() => QuerySpatialCoverage, () => QueryTemporalRange, 1, 1, 1]
);
export var ScheduledQueryRunSummary = struct(
  n0,
  _SQRS,
  0,
  [_IT, _TT, _RS, _ES, _QIR, _ERL, _FR],
  [4, 4, 0, () => ExecutionStats, () => ScheduledQueryInsightsResponse, () => ErrorReportLocation, 0]
);
export var SelectColumn = struct(n0, _SCe, 0, [_N, _T, _DN, _TN, _Al], [0, () => Type, 0, 0, 2]);
export var SnsConfiguration = struct(n0, _SC, 0, [_TAo], [0]);
export var TargetConfiguration = struct(n0, _TC, 0, [_TCi], [() => TimestreamConfiguration]);
export var TargetDestination = struct(n0, _TD, 0, [_TDi], [() => TimestreamDestination]);
export var TimeSeriesDataPoint = struct(n0, _TSDP, 0, [_Ti, _V], [0, () => Datum]);
export var TimestreamConfiguration = struct(
  n0,
  _TCi,
  0,
  [_DN, _TN, _TCim, _DMi, _MMMu, _MMMi, _MNC],
  [0, 0, 0, () => DimensionMappingList, () => MultiMeasureMappings, () => MixedMeasureMappingList, 0]
);
export var TimestreamDestination = struct(n0, _TDi, 0, [_DN, _TN], [0, 0]);
export var Type = struct(
  n0,
  _T,
  0,
  [_ST, _ACI, _TSMVCI, _RCI],
  [0, () => ColumnInfo, () => ColumnInfo, () => ColumnInfoList]
);
export var UpdateAccountSettingsRequest = struct(n0, _UASR, 0, [_MQTCU, _QPM, _QC], [1, 0, () => QueryComputeRequest]);
export var UpdateAccountSettingsResponse = struct(
  n0,
  _UASRp,
  0,
  [_MQTCU, _QPM, _QC],
  [1, 0, () => QueryComputeResponse]
);
export var UpdateScheduledQueryRequest = struct(n0, _USQR, 0, [_SQA, _St], [0, 0]);
export var Unit = "unit" as const;

export var ColumnInfoList = list(n0, _CIL, 0, () => ColumnInfo);
export var DatumList = list(n0, _DL, 0, () => Datum);
export var DimensionMappingList = list(n0, _DML, 0, () => DimensionMapping);
export var MixedMeasureMappingList = list(n0, _MMML, 0, () => MixedMeasureMapping);
export var MultiMeasureAttributeMappingList = list(n0, _MMAML, 0, () => MultiMeasureAttributeMapping);
export var ParameterMappingList = list(n0, _PML, 0, () => ParameterMapping);
export var PartitionKeyList = 64 | 0;

export var RowList = list(n0, _RL, 0, () => Row);
export var ScheduledQueryList = list(n0, _SQL, 0, () => ScheduledQuery);
export var ScheduledQueryRunSummaryList = list(n0, _SQRSL, 0, () => ScheduledQueryRunSummary);
export var SelectColumnList = list(n0, _SCL, 0, () => SelectColumn);
export var TimeSeriesDataPointList = list(n0, _TSDPL, 0, () => TimeSeriesDataPoint);
export var CancelQuery = op(
  n0,
  _CQ,
  2,
  () => CancelQueryRequest,
  () => CancelQueryResponse
);
export var CreateScheduledQuery = op(
  n0,
  _CSQ,
  2,
  () => CreateScheduledQueryRequest,
  () => CreateScheduledQueryResponse
);
export var DeleteScheduledQuery = op(
  n0,
  _DSQ,
  2,
  () => DeleteScheduledQueryRequest,
  () => Unit
);
export var DescribeAccountSettings = op(
  n0,
  _DAS,
  0,
  () => DescribeAccountSettingsRequest,
  () => DescribeAccountSettingsResponse
);
export var DescribeScheduledQuery = op(
  n0,
  _DSQe,
  0,
  () => DescribeScheduledQueryRequest,
  () => DescribeScheduledQueryResponse
);
export var ExecuteScheduledQuery = op(
  n0,
  _ESQ,
  2,
  () => ExecuteScheduledQueryRequest,
  () => Unit
);
export var ListScheduledQueries = op(
  n0,
  _LSQ,
  0,
  () => ListScheduledQueriesRequest,
  () => ListScheduledQueriesResponse
);
export var PrepareQuery = op(
  n0,
  _PQ,
  2,
  () => PrepareQueryRequest,
  () => PrepareQueryResponse
);
export var Query = op(
  n0,
  _Q,
  2,
  () => QueryRequest,
  () => QueryResponse
);
export var UpdateAccountSettings = op(
  n0,
  _UAS,
  2,
  () => UpdateAccountSettingsRequest,
  () => UpdateAccountSettingsResponse
);
export var UpdateScheduledQuery = op(
  n0,
  _USQ,
  0,
  () => UpdateScheduledQueryRequest,
  () => Unit
);
