const _AA = "AuthorizedActions";
const _AET = "AlignedEndTime";
const _AL = "AcceptLanguage";
const _AM = "AdditionalMetrics";
const _AR = "AnalysisReport";
const _ARI = "AnalysisReportId";
const _ARS = "AnalysisReportSummary";
const _ARSL = "AnalysisReportSummaryList";
const _ARn = "AnalysisReports";
const _AST = "AlignedStartTime";
const _BD = "BaselineData";
const _C = "Context";
const _CPAR = "CreatePerformanceAnalysisReport";
const _CPARR = "CreatePerformanceAnalysisReportRequest";
const _CPARRr = "CreatePerformanceAnalysisReportResponse";
const _CT = "CreateTime";
const _D = "Data";
const _DD = "DimensionDetail";
const _DDK = "DescribeDimensionKeys";
const _DDKR = "DescribeDimensionKeysRequest";
const _DDKRe = "DescribeDimensionKeysResponse";
const _DDL = "DimensionDetailList";
const _DG = "DimensionGroup";
const _DGD = "DimensionGroupDetail";
const _DGDL = "DimensionGroupDetailList";
const _DKD = "DimensionKeyDescription";
const _DKDL = "DimensionKeyDescriptionList";
const _DKDLi = "DimensionKeyDetailList";
const _DKDi = "DimensionKeyDetail";
const _DL = "DataList";
const _DN = "DisplayName";
const _DP = "DataPoint";
const _DPAR = "DeletePerformanceAnalysisReport";
const _DPARR = "DeletePerformanceAnalysisReportRequest";
const _DPARRe = "DeletePerformanceAnalysisReportResponse";
const _DPL = "DataPointsList";
const _DPa = "DataPoints";
const _De = "Description";
const _Di = "Dimensions";
const _Dim = "Dimension";
const _ET = "EndTime";
const _F = "Filter";
const _FM = "FeatureMetadata";
const _FMM = "FeatureMetadataMap";
const _Fe = "Features";
const _G = "Group";
const _GB = "GroupBy";
const _GDKD = "GetDimensionKeyDetails";
const _GDKDR = "GetDimensionKeyDetailsRequest";
const _GDKDRe = "GetDimensionKeyDetailsResponse";
const _GI = "GroupIdentifier";
const _GPAR = "GetPerformanceAnalysisReport";
const _GPARR = "GetPerformanceAnalysisReportRequest";
const _GPARRe = "GetPerformanceAnalysisReportResponse";
const _GRM = "GetResourceMetadata";
const _GRMR = "GetResourceMetadataRequest";
const _GRMRe = "GetResourceMetadataResponse";
const _GRMRet = "GetResourceMetricsRequest";
const _GRMRete = "GetResourceMetricsResponse";
const _GRMe = "GetResourceMetrics";
const _Gr = "Groups";
const _I = "Identifier";
const _IAE = "InvalidArgumentException";
const _ID = "InsightData";
const _II = "InsightId";
const _IL = "InsightList";
const _ISE = "InternalServiceError";
const _IT = "InsightType";
const _In = "Insights";
const _Ins = "Insight";
const _K = "Keys";
const _Ke = "Key";
const _L = "Limit";
const _LARD = "ListAvailableResourceDimensions";
const _LARDR = "ListAvailableResourceDimensionsRequest";
const _LARDRi = "ListAvailableResourceDimensionsResponse";
const _LARM = "ListAvailableResourceMetrics";
const _LARMR = "ListAvailableResourceMetricsRequest";
const _LARMRi = "ListAvailableResourceMetricsResponse";
const _LPAR = "ListPerformanceAnalysisReports";
const _LPARR = "ListPerformanceAnalysisReportsRequest";
const _LPARRi = "ListPerformanceAnalysisReportsResponse";
const _LT = "ListTags";
const _LTFR = "ListTagsForResource";
const _LTFRR = "ListTagsForResourceRequest";
const _LTFRRi = "ListTagsForResourceResponse";
const _M = "Metric";
const _MD = "MetricDimensions";
const _MDG = "MetricDimensionGroups";
const _MDL = "MetricDimensionsList";
const _MKDP = "MetricKeyDataPoints";
const _MKDPL = "MetricKeyDataPointsList";
const _ML = "MetricList";
const _MQ = "MetricQueries";
const _MQL = "MetricQueryList";
const _MQe = "MetricQuery";
const _MR = "MaxResults";
const _MS = "MarkdownString";
const _MT = "MetricTypes";
const _Me = "Message";
const _Met = "Metrics";
const _NAE = "NotAuthorizedException";
const _NT = "NextToken";
const _P = "Partitions";
const _PA = "PeriodAlignment";
const _PB = "PartitionBy";
const _PIM = "PerformanceInsightsMetric";
const _PIS = "PeriodInSeconds";
const _PK = "PartitionKeys";
const _R = "Recommendations";
const _RARN = "ResourceARN";
const _RD = "RequestedDimensions";
const _RDe = "RecommendationDescription";
const _RI = "RecommendationId";
const _RL = "RecommendationList";
const _RPK = "ResponsePartitionKey";
const _RPKL = "ResponsePartitionKeyList";
const _RRM = "ResponseResourceMetric";
const _RRMK = "ResponseResourceMetricKey";
const _RRML = "ResponseResourceMetricList";
const _Re = "Recommendation";
const _S = "Status";
const _SI = "SupportingInsights";
const _ST = "ServiceType";
const _STt = "StartTime";
const _Se = "Severity";
const _T = "Tags";
const _TF = "TextFormat";
const _TK = "TagKeys";
const _TL = "TagList";
const _TR = "TagResource";
const _TRR = "TagResourceRequest";
const _TRRa = "TagResourceResponse";
const _Ta = "Tag";
const _Ti = "Timestamp";
const _To = "Total";
const _U = "Unit";
const _UR = "UntagResource";
const _URR = "UntagResourceRequest";
const _URRn = "UntagResourceResponse";
const _V = "Value";
const _c = "client";
const _e = "error";
const _s = "server";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.pi";
const n0 = "com.amazonaws.pi";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type {
  StaticErrorSchema,
  StaticListSchema,
  StaticMapSchema,
  StaticOperationSchema,
  StaticSimpleSchema,
  StaticStructureSchema,
} from "@smithy/types";

import {
  InternalServiceError as __InternalServiceError,
  InvalidArgumentException as __InvalidArgumentException,
  NotAuthorizedException as __NotAuthorizedException,
} from "../models/errors";
import { PIServiceException as __PIServiceException } from "../models/PIServiceException";

/* eslint no-var: 0 */
export var MarkdownString: StaticSimpleSchema = [0, n0, _MS, 8, 0];
export var AnalysisReport: StaticStructureSchema = [
  3,
  n0,
  _AR,
  0,
  [_ARI, _I, _ST, _CT, _STt, _ET, _S, _In],
  [0, 0, 0, 4, 4, 4, 0, [() => InsightList, 0]],
];
export var AnalysisReportSummary: StaticStructureSchema = [
  3,
  n0,
  _ARS,
  0,
  [_ARI, _CT, _STt, _ET, _S, _T],
  [0, 4, 4, 4, 0, () => TagList],
];
export var CreatePerformanceAnalysisReportRequest: StaticStructureSchema = [
  3,
  n0,
  _CPARR,
  0,
  [_ST, _I, _STt, _ET, _T],
  [0, 0, 4, 4, () => TagList],
];
export var CreatePerformanceAnalysisReportResponse: StaticStructureSchema = [3, n0, _CPARRr, 0, [_ARI], [0]];
export var Data: StaticStructureSchema = [3, n0, _D, 0, [_PIM], [() => PerformanceInsightsMetric]];
export var DataPoint: StaticStructureSchema = [3, n0, _DP, 0, [_Ti, _V], [4, 1]];
export var DeletePerformanceAnalysisReportRequest: StaticStructureSchema = [
  3,
  n0,
  _DPARR,
  0,
  [_ST, _I, _ARI],
  [0, 0, 0],
];
export var DeletePerformanceAnalysisReportResponse: StaticStructureSchema = [3, n0, _DPARRe, 0, [], []];
export var DescribeDimensionKeysRequest: StaticStructureSchema = [
  3,
  n0,
  _DDKR,
  0,
  [_ST, _I, _STt, _ET, _M, _PIS, _GB, _AM, _PB, _F, _MR, _NT],
  [0, 0, 4, 4, 0, 1, () => DimensionGroup, 64 | 0, () => DimensionGroup, 128 | 0, 1, 0],
];
export var DescribeDimensionKeysResponse: StaticStructureSchema = [
  3,
  n0,
  _DDKRe,
  0,
  [_AST, _AET, _PK, _K, _NT],
  [4, 4, () => ResponsePartitionKeyList, () => DimensionKeyDescriptionList, 0],
];
export var DimensionDetail: StaticStructureSchema = [3, n0, _DD, 0, [_I], [0]];
export var DimensionGroup: StaticStructureSchema = [3, n0, _DG, 0, [_G, _Di, _L], [0, 64 | 0, 1]];
export var DimensionGroupDetail: StaticStructureSchema = [3, n0, _DGD, 0, [_G, _Di], [0, () => DimensionDetailList]];
export var DimensionKeyDescription: StaticStructureSchema = [
  3,
  n0,
  _DKD,
  0,
  [_Di, _To, _AM, _P],
  [128 | 0, 1, 128 | 1, 64 | 1],
];
export var DimensionKeyDetail: StaticStructureSchema = [3, n0, _DKDi, 0, [_V, _Dim, _S], [0, 0, 0]];
export var FeatureMetadata: StaticStructureSchema = [3, n0, _FM, 0, [_S], [0]];
export var GetDimensionKeyDetailsRequest: StaticStructureSchema = [
  3,
  n0,
  _GDKDR,
  0,
  [_ST, _I, _G, _GI, _RD],
  [0, 0, 0, 0, 64 | 0],
];
export var GetDimensionKeyDetailsResponse: StaticStructureSchema = [
  3,
  n0,
  _GDKDRe,
  0,
  [_Di],
  [() => DimensionKeyDetailList],
];
export var GetPerformanceAnalysisReportRequest: StaticStructureSchema = [
  3,
  n0,
  _GPARR,
  0,
  [_ST, _I, _ARI, _TF, _AL],
  [0, 0, 0, 0, 0],
];
export var GetPerformanceAnalysisReportResponse: StaticStructureSchema = [
  3,
  n0,
  _GPARRe,
  0,
  [_AR],
  [[() => AnalysisReport, 0]],
];
export var GetResourceMetadataRequest: StaticStructureSchema = [3, n0, _GRMR, 0, [_ST, _I], [0, 0]];
export var GetResourceMetadataResponse: StaticStructureSchema = [
  3,
  n0,
  _GRMRe,
  0,
  [_I, _Fe],
  [0, () => FeatureMetadataMap],
];
export var GetResourceMetricsRequest: StaticStructureSchema = [
  3,
  n0,
  _GRMRet,
  0,
  [_ST, _I, _MQ, _STt, _ET, _PIS, _MR, _NT, _PA],
  [0, 0, () => MetricQueryList, 4, 4, 1, 1, 0, 0],
];
export var GetResourceMetricsResponse: StaticStructureSchema = [
  3,
  n0,
  _GRMRete,
  0,
  [_AST, _AET, _I, _ML, _NT],
  [4, 4, 0, () => MetricKeyDataPointsList, 0],
];
export var Insight: StaticStructureSchema = [
  3,
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
  ],
];
export var InternalServiceError: StaticErrorSchema = [-3, n0, _ISE, { [_e]: _s }, [_Me], [0]];
TypeRegistry.for(n0).registerError(InternalServiceError, __InternalServiceError);
export var InvalidArgumentException: StaticErrorSchema = [-3, n0, _IAE, { [_e]: _c }, [_Me], [0]];
TypeRegistry.for(n0).registerError(InvalidArgumentException, __InvalidArgumentException);
export var ListAvailableResourceDimensionsRequest: StaticStructureSchema = [
  3,
  n0,
  _LARDR,
  0,
  [_ST, _I, _Met, _MR, _NT, _AA],
  [0, 0, 64 | 0, 1, 0, 64 | 0],
];
export var ListAvailableResourceDimensionsResponse: StaticStructureSchema = [
  3,
  n0,
  _LARDRi,
  0,
  [_MD, _NT],
  [() => MetricDimensionsList, 0],
];
export var ListAvailableResourceMetricsRequest: StaticStructureSchema = [
  3,
  n0,
  _LARMR,
  0,
  [_ST, _I, _MT, _NT, _MR],
  [0, 0, 64 | 0, 0, 1],
];
export var ListAvailableResourceMetricsResponse: StaticStructureSchema = [
  3,
  n0,
  _LARMRi,
  0,
  [_Met, _NT],
  [() => ResponseResourceMetricList, 0],
];
export var ListPerformanceAnalysisReportsRequest: StaticStructureSchema = [
  3,
  n0,
  _LPARR,
  0,
  [_ST, _I, _NT, _MR, _LT],
  [0, 0, 0, 1, 2],
];
export var ListPerformanceAnalysisReportsResponse: StaticStructureSchema = [
  3,
  n0,
  _LPARRi,
  0,
  [_ARn, _NT],
  [() => AnalysisReportSummaryList, 0],
];
export var ListTagsForResourceRequest: StaticStructureSchema = [3, n0, _LTFRR, 0, [_ST, _RARN], [0, 0]];
export var ListTagsForResourceResponse: StaticStructureSchema = [3, n0, _LTFRRi, 0, [_T], [() => TagList]];
export var MetricDimensionGroups: StaticStructureSchema = [
  3,
  n0,
  _MDG,
  0,
  [_M, _Gr],
  [0, () => DimensionGroupDetailList],
];
export var MetricKeyDataPoints: StaticStructureSchema = [
  3,
  n0,
  _MKDP,
  0,
  [_Ke, _DPa],
  [() => ResponseResourceMetricKey, () => DataPointsList],
];
export var MetricQuery: StaticStructureSchema = [3, n0, _MQe, 0, [_M, _GB, _F], [0, () => DimensionGroup, 128 | 0]];
export var NotAuthorizedException: StaticErrorSchema = [-3, n0, _NAE, { [_e]: _c }, [_Me], [0]];
TypeRegistry.for(n0).registerError(NotAuthorizedException, __NotAuthorizedException);
export var PerformanceInsightsMetric: StaticStructureSchema = [
  3,
  n0,
  _PIM,
  0,
  [_M, _DN, _Di, _F, _V],
  [0, 0, 128 | 0, 128 | 0, 1],
];
export var Recommendation: StaticStructureSchema = [3, n0, _Re, 0, [_RI, _RDe], [0, [() => MarkdownString, 0]]];
export var ResponsePartitionKey: StaticStructureSchema = [3, n0, _RPK, 0, [_Di], [128 | 0]];
export var ResponseResourceMetric: StaticStructureSchema = [3, n0, _RRM, 0, [_M, _De, _U], [0, 0, 0]];
export var ResponseResourceMetricKey: StaticStructureSchema = [3, n0, _RRMK, 0, [_M, _Di], [0, 128 | 0]];
export var Tag: StaticStructureSchema = [3, n0, _Ta, 0, [_Ke, _V], [0, 0]];
export var TagResourceRequest: StaticStructureSchema = [3, n0, _TRR, 0, [_ST, _RARN, _T], [0, 0, () => TagList]];
export var TagResourceResponse: StaticStructureSchema = [3, n0, _TRRa, 0, [], []];
export var UntagResourceRequest: StaticStructureSchema = [3, n0, _URR, 0, [_ST, _RARN, _TK], [0, 0, 64 | 0]];
export var UntagResourceResponse: StaticStructureSchema = [3, n0, _URRn, 0, [], []];
export var PIServiceException: StaticErrorSchema = [-3, _sm, "PIServiceException", 0, [], []];
TypeRegistry.for(_sm).registerError(PIServiceException, __PIServiceException);
export var AdditionalMetricsList = 64 | 0;
export var AnalysisReportSummaryList: StaticListSchema = [1, n0, _ARSL, 0, () => AnalysisReportSummary];
export var AuthorizedActionsList = 64 | 0;
export var DataList: StaticListSchema = [1, n0, _DL, 0, () => Data];
export var DataPointsList: StaticListSchema = [1, n0, _DPL, 0, () => DataPoint];
export var DimensionDetailList: StaticListSchema = [1, n0, _DDL, 0, () => DimensionDetail];
export var DimensionGroupDetailList: StaticListSchema = [1, n0, _DGDL, 0, () => DimensionGroupDetail];
export var DimensionKeyDescriptionList: StaticListSchema = [1, n0, _DKDL, 0, () => DimensionKeyDescription];
export var DimensionKeyDetailList: StaticListSchema = [1, n0, _DKDLi, 0, () => DimensionKeyDetail];
export var DimensionsMetricList = 64 | 0;
export var InsightList: StaticListSchema = [1, n0, _IL, 0, [() => Insight, 0]];
export var MetricDimensionsList: StaticListSchema = [1, n0, _MDL, 0, () => MetricDimensionGroups];
export var MetricKeyDataPointsList: StaticListSchema = [1, n0, _MKDPL, 0, () => MetricKeyDataPoints];
export var MetricQueryList: StaticListSchema = [1, n0, _MQL, 0, () => MetricQuery];
export var MetricTypeList = 64 | 0;
export var MetricValuesList = 64 | 1;
export var RecommendationList: StaticListSchema = [1, n0, _RL, 0, [() => Recommendation, 0]];
export var RequestedDimensionList = 64 | 0;
export var ResponsePartitionKeyList: StaticListSchema = [1, n0, _RPKL, 0, () => ResponsePartitionKey];
export var ResponseResourceMetricList: StaticListSchema = [1, n0, _RRML, 0, () => ResponseResourceMetric];
export var SanitizedStringList = 64 | 0;
export var TagKeyList = 64 | 0;
export var TagList: StaticListSchema = [1, n0, _TL, 0, () => Tag];
export var AdditionalMetricsMap = 128 | 1;
export var DescriptiveMap = 128 | 0;
export var DimensionMap = 128 | 0;
export var FeatureMetadataMap: StaticMapSchema = [2, n0, _FMM, 0, 0, () => FeatureMetadata];
export var MetricQueryFilterMap = 128 | 0;
export var CreatePerformanceAnalysisReport: StaticOperationSchema = [
  9,
  n0,
  _CPAR,
  0,
  () => CreatePerformanceAnalysisReportRequest,
  () => CreatePerformanceAnalysisReportResponse,
];
export var DeletePerformanceAnalysisReport: StaticOperationSchema = [
  9,
  n0,
  _DPAR,
  0,
  () => DeletePerformanceAnalysisReportRequest,
  () => DeletePerformanceAnalysisReportResponse,
];
export var DescribeDimensionKeys: StaticOperationSchema = [
  9,
  n0,
  _DDK,
  0,
  () => DescribeDimensionKeysRequest,
  () => DescribeDimensionKeysResponse,
];
export var GetDimensionKeyDetails: StaticOperationSchema = [
  9,
  n0,
  _GDKD,
  0,
  () => GetDimensionKeyDetailsRequest,
  () => GetDimensionKeyDetailsResponse,
];
export var GetPerformanceAnalysisReport: StaticOperationSchema = [
  9,
  n0,
  _GPAR,
  0,
  () => GetPerformanceAnalysisReportRequest,
  () => GetPerformanceAnalysisReportResponse,
];
export var GetResourceMetadata: StaticOperationSchema = [
  9,
  n0,
  _GRM,
  0,
  () => GetResourceMetadataRequest,
  () => GetResourceMetadataResponse,
];
export var GetResourceMetrics: StaticOperationSchema = [
  9,
  n0,
  _GRMe,
  0,
  () => GetResourceMetricsRequest,
  () => GetResourceMetricsResponse,
];
export var ListAvailableResourceDimensions: StaticOperationSchema = [
  9,
  n0,
  _LARD,
  0,
  () => ListAvailableResourceDimensionsRequest,
  () => ListAvailableResourceDimensionsResponse,
];
export var ListAvailableResourceMetrics: StaticOperationSchema = [
  9,
  n0,
  _LARM,
  0,
  () => ListAvailableResourceMetricsRequest,
  () => ListAvailableResourceMetricsResponse,
];
export var ListPerformanceAnalysisReports: StaticOperationSchema = [
  9,
  n0,
  _LPAR,
  0,
  () => ListPerformanceAnalysisReportsRequest,
  () => ListPerformanceAnalysisReportsResponse,
];
export var ListTagsForResource: StaticOperationSchema = [
  9,
  n0,
  _LTFR,
  0,
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse,
];
export var TagResource: StaticOperationSchema = [9, n0, _TR, 0, () => TagResourceRequest, () => TagResourceResponse];
export var UntagResource: StaticOperationSchema = [
  9,
  n0,
  _UR,
  0,
  () => UntagResourceRequest,
  () => UntagResourceResponse,
];
