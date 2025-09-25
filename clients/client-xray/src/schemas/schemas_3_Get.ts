// smithy-typescript generated code
import { list, map, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _A,
  _AI,
  _AL,
  _Al,
  _An,
  _ARN,
  _AT,
  _AV,
  _AZ,
  _AZD,
  _BGT,
  _BGTR,
  _BGTRa,
  _BV,
  _C,
  _CG,
  _CGR,
  _CGRr,
  _CI,
  _CIl,
  _Co,
  _COGV,
  _DH,
  _Do,
  _DTI,
  _Du,
  _E,
  _Ed,
  _EL,
  _EP,
  _EPn,
  _ERC,
  _ERCE,
  _ERCEP,
  _ERCr,
  _ERCS,
  _ERCSr,
  _ES,
  _ESE,
  _ESr,
  _ESS,
  _ET,
  _ETd,
  _Ex,
  _FCH,
  _FCL,
  _FE,
  _FRC,
  _FRCa,
  _FRCE,
  _FRCEP,
  _FRCS,
  _FRCSa,
  _FS,
  _FSo,
  _G,
  _GARN,
  _GG,
  _GGe,
  _GGR,
  _GGRe,
  _GGRet,
  _GGRetr,
  _GL,
  _GN,
  _Gr,
  _GRTG,
  _GRTGR,
  _GRTGRe,
  _GS,
  _GSG,
  _GSGR,
  _GSGRe,
  _GSL,
  _GTG,
  _GTGR,
  _GTGRe,
  _GTS,
  _GTSR,
  _GTSRe,
  _GTSSS,
  _GTSSSR,
  _GTSSSRe,
  _H,
  _h,
  _HE,
  _HEa,
  _HF,
  _Hi,
  _HM,
  _HS,
  _HT,
  _HURL,
  _I,
  _IC,
  _Id,
  _IEns,
  _IID,
  _IIn,
  _IP,
  _L,
  _LE,
  _LL,
  _M,
  _MET,
  _N,
  _Na,
  _NE,
  _NT,
  _NV,
  _OC,
  _OCk,
  _P,
  _R,
  _RARND,
  _RARNes,
  _RCE,
  _RCEo,
  _Re,
  _REAH,
  _RI,
  _Ro,
  _RS,
  _RSe,
  _RSL,
  _RT,
  _RTe,
  _RTes,
  _RTH,
  _RTRC,
  _RTRCE,
  _RTRCe,
  _RTRCEP,
  _RTRCS,
  _RTRCSe,
  _Sa,
  _Se,
  _Seg,
  _Segm,
  _Ser,
  _SFS,
  _SIe,
  _SL,
  _SLe,
  _SS,
  _SSa,
  _SSe,
  _SSSe,
  _ST,
  _Sta,
  _STI,
  _SV,
  _T,
  _Ta,
  _TAZ,
  _TCh,
  _TCo,
  _TI,
  _Ti,
  _TII,
  _TLr,
  _TPC,
  _Tr,
  _Tra,
  _TRARN,
  _TRT,
  _TRTi,
  _TS,
  _TSLr,
  _TSr,
  _TSSS,
  _TSSSL,
  _TU,
  _TUr,
  _U,
  _UA,
  _UG,
  _UGR,
  _UGRp,
  _UN,
  _UTI,
  _V,
  _VWSI,
  _VWSIa,
  n0,
} from "./schemas_0";
import { ServiceId } from "./schemas_6_Get";
import { TagList } from "./schemas_10_Resource";

/* eslint no-var: 0 */

export var Alias = struct(n0, _A, 0, [_N, _Na, _T], [0, 64 | 0, 0]);
export var AvailabilityZoneDetail = struct(n0, _AZD, 0, [_N], [0]);
export var BatchGetTracesRequest = struct(n0, _BGTR, 0, [_TI, _NT], [64 | 0, 0]);
export var BatchGetTracesResult = struct(n0, _BGTRa, 0, [_Tr, _UTI, _NT], [() => TraceList, 64 | 0, 0]);
export var CreateGroupRequest = struct(
  n0,
  _CGR,
  0,
  [_GN, _FE, _IC, _Ta],
  [0, 0, () => InsightsConfiguration, () => TagList]
);
export var CreateGroupResult = struct(n0, _CGRr, 0, [_G], [() => Group]);
export var Edge = struct(
  n0,
  _E,
  0,
  [_RI, _ST, _ET, _SS, _RTH, _Al, _ETd, _REAH],
  [1, 4, 4, () => EdgeStatistics, () => Histogram, () => AliasList, 0, () => Histogram]
);
export var EdgeStatistics = struct(
  n0,
  _ES,
  0,
  [_OCk, _ESr, _FS, _TCo, _TRT],
  [1, () => ErrorStatistics, () => FaultStatistics, 1, 1]
);
export var ErrorRootCause = struct(n0, _ERC, 0, [_Se, _CI], [() => ErrorRootCauseServices, 2]);
export var ErrorRootCauseEntity = struct(n0, _ERCE, 0, [_N, _Ex, _R], [0, () => RootCauseExceptions, 2]);
export var ErrorRootCauseService = struct(
  n0,
  _ERCS,
  0,
  [_N, _Na, _T, _AI, _EP, _I],
  [0, 64 | 0, 0, 0, () => ErrorRootCauseEntityPath, 2]
);
export var ErrorStatistics = struct(n0, _ESr, 0, [_TCh, _OC, _TCo], [1, 1, 1]);
export var FaultRootCause = struct(n0, _FRC, 0, [_Se, _CI], [() => FaultRootCauseServices, 2]);
export var FaultRootCauseEntity = struct(n0, _FRCE, 0, [_N, _Ex, _R], [0, () => RootCauseExceptions, 2]);
export var FaultRootCauseService = struct(
  n0,
  _FRCS,
  0,
  [_N, _Na, _T, _AI, _EP, _I],
  [0, 64 | 0, 0, 0, () => FaultRootCauseEntityPath, 2]
);
export var FaultStatistics = struct(n0, _FS, 0, [_OC, _TCo], [1, 1]);
export var ForecastStatistics = struct(n0, _FSo, 0, [_FCH, _FCL], [1, 1]);
export var GetGroupRequest = struct(n0, _GGR, 0, [_GN, _GARN], [0, 0]);
export var GetGroupResult = struct(n0, _GGRe, 0, [_G], [() => Group]);
export var GetGroupsRequest = struct(n0, _GGRet, 0, [_NT], [0]);
export var GetGroupsResult = struct(n0, _GGRetr, 0, [_Gr, _NT], [() => GroupSummaryList, 0]);
export var GetRetrievedTracesGraphRequest = struct(n0, _GRTGR, 0, [_RT, _NT], [0, 0]);
export var GetRetrievedTracesGraphResult = struct(n0, _GRTGRe, 0, [_RS, _Se, _NT], [0, () => RetrievedServicesList, 0]);
export var GetServiceGraphRequest = struct(n0, _GSGR, 0, [_ST, _ET, _GN, _GARN, _NT], [4, 4, 0, 0, 0]);
export var GetServiceGraphResult = struct(n0, _GSGRe, 0, [_ST, _ET, _Se, _COGV, _NT], [4, 4, () => ServiceList, 2, 0]);
export var GetTimeSeriesServiceStatisticsRequest = struct(
  n0,
  _GTSSSR,
  0,
  [_ST, _ET, _GN, _GARN, _ESE, _P, _FSo, _NT],
  [4, 4, 0, 0, 0, 1, 2, 0]
);
export var GetTimeSeriesServiceStatisticsResult = struct(
  n0,
  _GTSSSRe,
  0,
  [_TSSS, _COGV, _NT],
  [() => TimeSeriesServiceStatisticsList, 2, 0]
);
export var GetTraceGraphRequest = struct(n0, _GTGR, 0, [_TI, _NT], [64 | 0, 0]);
export var GetTraceGraphResult = struct(n0, _GTGRe, 0, [_Se, _NT], [() => ServiceList, 0]);
export var GetTraceSummariesRequest = struct(
  n0,
  _GTSR,
  0,
  [_ST, _ET, _TRTi, _Sa, _SSa, _FE, _NT],
  [4, 4, 0, 2, () => SamplingStrategy, 0, 0]
);
export var GetTraceSummariesResult = struct(n0, _GTSRe, 0, [_TS, _AT, _TPC, _NT], [() => TraceSummaryList, 4, 1, 0]);
export var GraphLink = struct(n0, _GL, 0, [_RTe, _STI, _DTI], [0, 0, 64 | 0]);
export var Group = struct(n0, _G, 0, [_GN, _GARN, _FE, _IC], [0, 0, 0, () => InsightsConfiguration]);
export var GroupSummary = struct(n0, _GS, 0, [_GN, _GARN, _FE, _IC], [0, 0, 0, () => InsightsConfiguration]);
export var HistogramEntry = struct(n0, _HE, 0, [_V, _C], [1, 1]);
export var Http = struct(n0, _H, 0, [_HURL, _HS, _HM, _UA, _CIl], [0, 1, 0, 0, 0]);
export var InsightsConfiguration = struct(n0, _IC, 0, [_IEns, _NE], [2, 2]);
export var InstanceIdDetail = struct(n0, _IID, 0, [_Id], [0]);
export var ResourceARNDetail = struct(n0, _RARND, 0, [_ARN], [0]);
export var ResponseTimeRootCause = struct(n0, _RTRC, 0, [_Se, _CI], [() => ResponseTimeRootCauseServices, 2]);
export var ResponseTimeRootCauseEntity = struct(n0, _RTRCE, 0, [_N, _Co, _R], [0, 1, 2]);
export var ResponseTimeRootCauseService = struct(
  n0,
  _RTRCS,
  0,
  [_N, _Na, _T, _AI, _EP, _I],
  [0, 64 | 0, 0, 0, () => ResponseTimeRootCauseEntityPath, 2]
);
export var RetrievedService = struct(n0, _RSe, 0, [_Ser, _L], [() => Service, () => LinksList]);
export var RootCauseException = struct(n0, _RCE, 0, [_N, _M], [0, 0]);
export var SamplingStrategy = struct(n0, _SSa, 0, [_N, _V], [0, 1]);
export var Segment = struct(n0, _Seg, 0, [_Id, _Do], [0, 0]);
export var Service = struct(
  n0,
  _Ser,
  0,
  [_RI, _N, _Na, _Ro, _AI, _T, _Sta, _ST, _ET, _Ed, _SS, _DH, _RTH],
  [1, 0, 64 | 0, 2, 0, 0, 0, 4, 4, () => EdgeList, () => ServiceStatistics, () => Histogram, () => Histogram]
);
export var ServiceStatistics = struct(
  n0,
  _SSe,
  0,
  [_OCk, _ESr, _FS, _TCo, _TRT],
  [1, () => ErrorStatistics, () => FaultStatistics, 1, 1]
);
export var TimeSeriesServiceStatistics = struct(
  n0,
  _TSSS,
  0,
  [_Ti, _ESS, _SSSe, _SFS, _RTH],
  [4, () => EdgeStatistics, () => ServiceStatistics, () => ForecastStatistics, () => Histogram]
);
export var Trace = struct(n0, _Tra, 0, [_Id, _Du, _LE, _Segm], [0, 1, 2, () => SegmentList]);
export var TraceSummary = struct(
  n0,
  _TSr,
  0,
  [
    _Id,
    _ST,
    _Du,
    _RTes,
    _HF,
    _HEa,
    _HT,
    _IP,
    _H,
    _An,
    _U,
    _SIe,
    _RARNes,
    _IIn,
    _AZ,
    _EPn,
    _FRCa,
    _ERCr,
    _RTRCe,
    _Re,
    _MET,
  ],
  [
    0,
    4,
    1,
    1,
    2,
    2,
    2,
    2,
    () => Http,
    () => Annotations,
    () => TraceUsers,
    () => ServiceIds,
    () => TraceResourceARNs,
    () => TraceInstanceIds,
    () => TraceAvailabilityZones,
    () => ServiceId,
    () => FaultRootCauses,
    () => ErrorRootCauses,
    () => ResponseTimeRootCauses,
    1,
    4,
  ]
);
export var TraceUser = struct(n0, _TU, 0, [_UN, _SIe], [0, () => ServiceIds]);
export var UpdateGroupRequest = struct(n0, _UGR, 0, [_GN, _GARN, _FE, _IC], [0, 0, 0, () => InsightsConfiguration]);
export var UpdateGroupResult = struct(n0, _UGRp, 0, [_G], [() => Group]);
export var ValueWithServiceIds = struct(n0, _VWSI, 0, [_AV, _SIe], [() => AnnotationValue, () => ServiceIds]);
export var AliasList = list(n0, _AL, 0, () => Alias);
export var AliasNames = 64 | 0;

export var EdgeList = list(n0, _EL, 0, () => Edge);
export var ErrorRootCauseEntityPath = list(n0, _ERCEP, 0, () => ErrorRootCauseEntity);
export var ErrorRootCauses = list(n0, _ERCr, 0, () => ErrorRootCause);
export var ErrorRootCauseServices = list(n0, _ERCSr, 0, () => ErrorRootCauseService);
export var FaultRootCauseEntityPath = list(n0, _FRCEP, 0, () => FaultRootCauseEntity);
export var FaultRootCauses = list(n0, _FRCa, 0, () => FaultRootCause);
export var FaultRootCauseServices = list(n0, _FRCSa, 0, () => FaultRootCauseService);
export var GroupSummaryList = list(n0, _GSL, 0, () => GroupSummary);
export var Histogram = list(n0, _Hi, 0, () => HistogramEntry);
export var LinksList = list(n0, _LL, 0, () => GraphLink);
export var ResponseTimeRootCauseEntityPath = list(n0, _RTRCEP, 0, () => ResponseTimeRootCauseEntity);
export var ResponseTimeRootCauses = list(n0, _RTRCe, 0, () => ResponseTimeRootCause);
export var ResponseTimeRootCauseServices = list(n0, _RTRCSe, 0, () => ResponseTimeRootCauseService);
export var RetrievedServicesList = list(n0, _RSL, 0, () => RetrievedService);
export var RootCauseExceptions = list(n0, _RCEo, 0, () => RootCauseException);
export var SegmentList = list(n0, _SL, 0, () => Segment);
export var ServiceIds = list(n0, _SIe, 0, () => ServiceId);
export var ServiceList = list(n0, _SLe, 0, () => Service);
export var TimeSeriesServiceStatisticsList = list(n0, _TSSSL, 0, () => TimeSeriesServiceStatistics);
export var TraceAvailabilityZones = list(n0, _TAZ, 0, () => AvailabilityZoneDetail);
export var TraceIdList = 64 | 0;

export var TraceInstanceIds = list(n0, _TII, 0, () => InstanceIdDetail);
export var TraceList = list(n0, _TLr, 0, () => Trace);
export var TraceResourceARNs = list(n0, _TRARN, 0, () => ResourceARNDetail);
export var TraceSummaryList = list(n0, _TSLr, 0, () => TraceSummary);
export var TraceUsers = list(n0, _TUr, 0, () => TraceUser);
export var UnprocessedTraceIdList = 64 | 0;

export var ValuesWithServiceIds = list(n0, _VWSIa, 0, () => ValueWithServiceIds);
export var Annotations = map(n0, _An, 0, 0, () => ValuesWithServiceIds);
export var AnnotationValue = uni(n0, _AV, 0, [_NV, _BV, _SV], [1, 2, 0]);
export var BatchGetTraces = op(
  n0,
  _BGT,
  {
    [_h]: ["POST", "/Traces", 200],
  },
  () => BatchGetTracesRequest,
  () => BatchGetTracesResult
);
export var CreateGroup = op(
  n0,
  _CG,
  {
    [_h]: ["POST", "/CreateGroup", 200],
  },
  () => CreateGroupRequest,
  () => CreateGroupResult
);
export var GetGroup = op(
  n0,
  _GG,
  {
    [_h]: ["POST", "/GetGroup", 200],
  },
  () => GetGroupRequest,
  () => GetGroupResult
);
export var GetGroups = op(
  n0,
  _GGe,
  {
    [_h]: ["POST", "/Groups", 200],
  },
  () => GetGroupsRequest,
  () => GetGroupsResult
);
export var GetRetrievedTracesGraph = op(
  n0,
  _GRTG,
  {
    [_h]: ["POST", "/GetRetrievedTracesGraph", 200],
  },
  () => GetRetrievedTracesGraphRequest,
  () => GetRetrievedTracesGraphResult
);
export var GetServiceGraph = op(
  n0,
  _GSG,
  {
    [_h]: ["POST", "/ServiceGraph", 200],
  },
  () => GetServiceGraphRequest,
  () => GetServiceGraphResult
);
export var GetTimeSeriesServiceStatistics = op(
  n0,
  _GTSSS,
  {
    [_h]: ["POST", "/TimeSeriesServiceStatistics", 200],
  },
  () => GetTimeSeriesServiceStatisticsRequest,
  () => GetTimeSeriesServiceStatisticsResult
);
export var GetTraceGraph = op(
  n0,
  _GTG,
  {
    [_h]: ["POST", "/TraceGraph", 200],
  },
  () => GetTraceGraphRequest,
  () => GetTraceGraphResult
);
export var GetTraceSummaries = op(
  n0,
  _GTS,
  {
    [_h]: ["POST", "/TraceSummaries", 200],
  },
  () => GetTraceSummariesRequest,
  () => GetTraceSummariesResult
);
export var UpdateGroup = op(
  n0,
  _UG,
  {
    [_h]: ["POST", "/UpdateGroup", 200],
  },
  () => UpdateGroupRequest,
  () => UpdateGroupResult
);
