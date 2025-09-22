// smithy-typescript generated code
import { list, map, op, sim, struct } from "@smithy/core/schema";

import {
  _AA,
  _AET,
  _AL,
  _AM,
  _AR,
  _ARI,
  _ARn,
  _ARS,
  _ARSL,
  _AST,
  _BD,
  _C,
  _CPAR,
  _CPARR,
  _CPARRr,
  _CT,
  _D,
  _DD,
  _DDK,
  _DDKR,
  _DDKRe,
  _DDL,
  _De,
  _DG,
  _DGD,
  _DGDL,
  _Di,
  _Dim,
  _DKD,
  _DKDi,
  _DKDL,
  _DKDLi,
  _DL,
  _DN,
  _DP,
  _DPa,
  _DPAR,
  _DPARR,
  _DPARRe,
  _DPL,
  _ET,
  _F,
  _Fe,
  _FM,
  _FMM,
  _G,
  _GB,
  _GDKD,
  _GDKDR,
  _GDKDRe,
  _GI,
  _GPAR,
  _GPARR,
  _GPARRe,
  _Gr,
  _GRM,
  _GRMe,
  _GRMR,
  _GRMRe,
  _GRMRet,
  _GRMRete,
  _I,
  _ID,
  _II,
  _IL,
  _In,
  _Ins,
  _IT,
  _K,
  _Ke,
  _L,
  _LARD,
  _LARDR,
  _LARDRi,
  _LARM,
  _LARMR,
  _LARMRi,
  _LPAR,
  _LPARR,
  _LPARRi,
  _LT,
  _M,
  _MD,
  _MDG,
  _MDL,
  _Met,
  _MKDP,
  _MKDPL,
  _ML,
  _MQ,
  _MQe,
  _MQL,
  _MR,
  _MS,
  _MT,
  _NT,
  _P,
  _PA,
  _PB,
  _PIM,
  _PIS,
  _PK,
  _R,
  _RD,
  _RDe,
  _Re,
  _RI,
  _RL,
  _RPK,
  _RPKL,
  _RRM,
  _RRMK,
  _RRML,
  _S,
  _Se,
  _SI,
  _ST,
  _STt,
  _T,
  _TF,
  _Ti,
  _To,
  _U,
  _V,
  n0,
} from "./schemas_0";
import { TagList } from "./schemas_2_Resource";

/* eslint no-var: 0 */

export var MarkdownString = sim(n0, _MS, 0, 8);
export var AnalysisReport = struct(
  n0,
  _AR,
  0,
  [_ARI, _I, _ST, _CT, _STt, _ET, _S, _In],
  [0, 0, 0, 4, 4, 4, 0, [() => InsightList, 0]]
);
export var AnalysisReportSummary = struct(n0, _ARS, 0, [_ARI, _CT, _STt, _ET, _S, _T], [0, 4, 4, 4, 0, () => TagList]);
export var CreatePerformanceAnalysisReportRequest = struct(
  n0,
  _CPARR,
  0,
  [_ST, _I, _STt, _ET, _T],
  [0, 0, 4, 4, () => TagList]
);
export var CreatePerformanceAnalysisReportResponse = struct(n0, _CPARRr, 0, [_ARI], [0]);
export var Data = struct(n0, _D, 0, [_PIM], [() => PerformanceInsightsMetric]);
export var DataPoint = struct(n0, _DP, 0, [_Ti, _V], [4, 1]);
export var DeletePerformanceAnalysisReportRequest = struct(n0, _DPARR, 0, [_ST, _I, _ARI], [0, 0, 0]);
export var DeletePerformanceAnalysisReportResponse = struct(n0, _DPARRe, 0, [], []);
export var DescribeDimensionKeysRequest = struct(
  n0,
  _DDKR,
  0,
  [_ST, _I, _STt, _ET, _M, _PIS, _GB, _AM, _PB, _F, _MR, _NT],
  [0, 0, 4, 4, 0, 1, () => DimensionGroup, 64 | 0, () => DimensionGroup, 128 | 0, 1, 0]
);
export var DescribeDimensionKeysResponse = struct(
  n0,
  _DDKRe,
  0,
  [_AST, _AET, _PK, _K, _NT],
  [4, 4, () => ResponsePartitionKeyList, () => DimensionKeyDescriptionList, 0]
);
export var DimensionDetail = struct(n0, _DD, 0, [_I], [0]);
export var DimensionGroup = struct(n0, _DG, 0, [_G, _Di, _L], [0, 64 | 0, 1]);
export var DimensionGroupDetail = struct(n0, _DGD, 0, [_G, _Di], [0, () => DimensionDetailList]);
export var DimensionKeyDescription = struct(n0, _DKD, 0, [_Di, _To, _AM, _P], [128 | 0, 1, 128 | 1, 64 | 1]);
export var DimensionKeyDetail = struct(n0, _DKDi, 0, [_V, _Dim, _S], [0, 0, 0]);
export var FeatureMetadata = struct(n0, _FM, 0, [_S], [0]);
export var GetDimensionKeyDetailsRequest = struct(n0, _GDKDR, 0, [_ST, _I, _G, _GI, _RD], [0, 0, 0, 0, 64 | 0]);
export var GetDimensionKeyDetailsResponse = struct(n0, _GDKDRe, 0, [_Di], [() => DimensionKeyDetailList]);
export var GetPerformanceAnalysisReportRequest = struct(n0, _GPARR, 0, [_ST, _I, _ARI, _TF, _AL], [0, 0, 0, 0, 0]);
export var GetPerformanceAnalysisReportResponse = struct(n0, _GPARRe, 0, [_AR], [[() => AnalysisReport, 0]]);
export var GetResourceMetadataRequest = struct(n0, _GRMR, 0, [_ST, _I], [0, 0]);
export var GetResourceMetadataResponse = struct(n0, _GRMRe, 0, [_I, _Fe], [0, () => FeatureMetadataMap]);
export var GetResourceMetricsRequest = struct(
  n0,
  _GRMRet,
  0,
  [_ST, _I, _MQ, _STt, _ET, _PIS, _MR, _NT, _PA],
  [0, 0, () => MetricQueryList, 4, 4, 1, 1, 0, 0]
);
export var GetResourceMetricsResponse = struct(
  n0,
  _GRMRete,
  0,
  [_AST, _AET, _I, _ML, _NT],
  [4, 4, 0, () => MetricKeyDataPointsList, 0]
);
export var Insight = struct(
  n0,
  _Ins,
  0,
  [_II, _IT, _C, _STt, _ET, _Se, _SI, _De, _R, _ID, _BD],
  [
    0,
    0,
    0,
    4,
    4,
    0,
    [() => InsightList, 0],
    [() => MarkdownString, 0],
    [() => RecommendationList, 0],
    () => DataList,
    () => DataList,
  ]
);
export var ListAvailableResourceDimensionsRequest = struct(
  n0,
  _LARDR,
  0,
  [_ST, _I, _Met, _MR, _NT, _AA],
  [0, 0, 64 | 0, 1, 0, 64 | 0]
);
export var ListAvailableResourceDimensionsResponse = struct(
  n0,
  _LARDRi,
  0,
  [_MD, _NT],
  [() => MetricDimensionsList, 0]
);
export var ListAvailableResourceMetricsRequest = struct(n0, _LARMR, 0, [_ST, _I, _MT, _NT, _MR], [0, 0, 64 | 0, 0, 1]);
export var ListAvailableResourceMetricsResponse = struct(
  n0,
  _LARMRi,
  0,
  [_Met, _NT],
  [() => ResponseResourceMetricList, 0]
);
export var ListPerformanceAnalysisReportsRequest = struct(n0, _LPARR, 0, [_ST, _I, _NT, _MR, _LT], [0, 0, 0, 1, 2]);
export var ListPerformanceAnalysisReportsResponse = struct(
  n0,
  _LPARRi,
  0,
  [_ARn, _NT],
  [() => AnalysisReportSummaryList, 0]
);
export var MetricDimensionGroups = struct(n0, _MDG, 0, [_M, _Gr], [0, () => DimensionGroupDetailList]);
export var MetricKeyDataPoints = struct(
  n0,
  _MKDP,
  0,
  [_Ke, _DPa],
  [() => ResponseResourceMetricKey, () => DataPointsList]
);
export var MetricQuery = struct(n0, _MQe, 0, [_M, _GB, _F], [0, () => DimensionGroup, 128 | 0]);
export var PerformanceInsightsMetric = struct(n0, _PIM, 0, [_M, _DN, _Di, _F, _V], [0, 0, 128 | 0, 128 | 0, 1]);
export var Recommendation = struct(n0, _Re, 0, [_RI, _RDe], [0, [() => MarkdownString, 0]]);
export var ResponsePartitionKey = struct(n0, _RPK, 0, [_Di], [128 | 0]);
export var ResponseResourceMetric = struct(n0, _RRM, 0, [_M, _De, _U], [0, 0, 0]);
export var ResponseResourceMetricKey = struct(n0, _RRMK, 0, [_M, _Di], [0, 128 | 0]);
export var AdditionalMetricsList = 64 | 0;

export var AnalysisReportSummaryList = list(n0, _ARSL, 0, () => AnalysisReportSummary);
export var AuthorizedActionsList = 64 | 0;

export var DataList = list(n0, _DL, 0, () => Data);
export var DataPointsList = list(n0, _DPL, 0, () => DataPoint);
export var DimensionDetailList = list(n0, _DDL, 0, () => DimensionDetail);
export var DimensionGroupDetailList = list(n0, _DGDL, 0, () => DimensionGroupDetail);
export var DimensionKeyDescriptionList = list(n0, _DKDL, 0, () => DimensionKeyDescription);
export var DimensionKeyDetailList = list(n0, _DKDLi, 0, () => DimensionKeyDetail);
export var DimensionsMetricList = 64 | 0;

export var InsightList = list(n0, _IL, 0, [() => Insight, 0]);
export var MetricDimensionsList = list(n0, _MDL, 0, () => MetricDimensionGroups);
export var MetricKeyDataPointsList = list(n0, _MKDPL, 0, () => MetricKeyDataPoints);
export var MetricQueryList = list(n0, _MQL, 0, () => MetricQuery);
export var MetricTypeList = 64 | 0;

export var MetricValuesList = 64 | 1;

export var RecommendationList = list(n0, _RL, 0, [() => Recommendation, 0]);
export var RequestedDimensionList = 64 | 0;

export var ResponsePartitionKeyList = list(n0, _RPKL, 0, () => ResponsePartitionKey);
export var ResponseResourceMetricList = list(n0, _RRML, 0, () => ResponseResourceMetric);
export var SanitizedStringList = 64 | 0;

export var AdditionalMetricsMap = 128 | 1;

export var DescriptiveMap = 128 | 0;

export var DimensionMap = 128 | 0;

export var FeatureMetadataMap = map(n0, _FMM, 0, 0, () => FeatureMetadata);
export var MetricQueryFilterMap = 128 | 0;

export var CreatePerformanceAnalysisReport = op(
  n0,
  _CPAR,
  0,
  () => CreatePerformanceAnalysisReportRequest,
  () => CreatePerformanceAnalysisReportResponse
);
export var DeletePerformanceAnalysisReport = op(
  n0,
  _DPAR,
  0,
  () => DeletePerformanceAnalysisReportRequest,
  () => DeletePerformanceAnalysisReportResponse
);
export var DescribeDimensionKeys = op(
  n0,
  _DDK,
  0,
  () => DescribeDimensionKeysRequest,
  () => DescribeDimensionKeysResponse
);
export var GetDimensionKeyDetails = op(
  n0,
  _GDKD,
  0,
  () => GetDimensionKeyDetailsRequest,
  () => GetDimensionKeyDetailsResponse
);
export var GetPerformanceAnalysisReport = op(
  n0,
  _GPAR,
  0,
  () => GetPerformanceAnalysisReportRequest,
  () => GetPerformanceAnalysisReportResponse
);
export var GetResourceMetadata = op(
  n0,
  _GRM,
  0,
  () => GetResourceMetadataRequest,
  () => GetResourceMetadataResponse
);
export var GetResourceMetrics = op(
  n0,
  _GRMe,
  0,
  () => GetResourceMetricsRequest,
  () => GetResourceMetricsResponse
);
export var ListAvailableResourceDimensions = op(
  n0,
  _LARD,
  0,
  () => ListAvailableResourceDimensionsRequest,
  () => ListAvailableResourceDimensionsResponse
);
export var ListAvailableResourceMetrics = op(
  n0,
  _LARM,
  0,
  () => ListAvailableResourceMetricsRequest,
  () => ListAvailableResourceMetricsResponse
);
export var ListPerformanceAnalysisReports = op(
  n0,
  _LPAR,
  0,
  () => ListPerformanceAnalysisReportsRequest,
  () => ListPerformanceAnalysisReportsResponse
);
