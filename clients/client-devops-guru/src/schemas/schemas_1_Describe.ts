// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _AH,
  _AHc,
  _AI,
  _AIc,
  _AIH,
  _AII,
  _AIn,
  _AR,
  _Ar,
  _ARn,
  _ARTR,
  _ASD,
  _ASM,
  _ATR,
  _Ca,
  _CAI,
  _CF,
  _CT,
  _CV,
  _CWM,
  _CWMD,
  _CWMDl,
  _CWMDlo,
  _CWMDlou,
  _CWMDS,
  _D,
  _DA,
  _DAR,
  _DARe,
  _De,
  _DIe,
  _DIRes,
  _DIResc,
  _DOH,
  _DOHR,
  _DOHRe,
  _DOO,
  _DOOR,
  _DOORe,
  _DORCH,
  _DORCHR,
  _DORCHRe,
  _DS,
  _E,
  _EC,
  _ER,
  _ERv,
  _ESv,
  _ET,
  _ETRv,
  _Ev,
  _Fi,
  _Fil,
  _FT,
  _G,
  _GB,
  _h,
  _hQ,
  _I,
  _Id,
  _II,
  _ITR,
  _L,
  _LAFI,
  _LAFIF,
  _LAFIR,
  _LAFIRi,
  _LE,
  _LEF,
  _LER,
  _LERi,
  _Li,
  _Lin,
  _LOI,
  _LOIR,
  _LOIRi,
  _LR,
  _LRR,
  _LRRi,
  _MA,
  _MDN,
  _MDS,
  _Me,
  _MN,
  _MQ,
  _MR,
  _MV,
  _N,
  _Na,
  _NT,
  _OPI,
  _ORCT,
  _ORI,
  _OT,
  _OUI,
  _OUIr,
  _P,
  _PA,
  _PAr,
  _PAS,
  _PI,
  _PIM,
  _PIMD,
  _PIMDe,
  _PIMDG,
  _PIMQ,
  _PIr,
  _PIRCV,
  _PIRD,
  _PIRDL,
  _PIRM,
  _PIRS,
  _PIS,
  _PISe,
  _POI,
  _POIS,
  _PTR,
  _R,
  _RA,
  _RAe,
  _RAel,
  _RASD,
  _RASe,
  _RC,
  _RD,
  _RE,
  _Re,
  _Rea,
  _Rec,
  _RH,
  _RIe,
  _RIea,
  _RM,
  _ROI,
  _ROIS,
  _RRA,
  _RRAe,
  _RRAR,
  _RRARe,
  _RRASD,
  _RRCWMSD,
  _RRCWMSDe,
  _RRE,
  _RREe,
  _RRER,
  _RRERe,
  _RS,
  _S,
  _SAA,
  _SAB,
  _SC,
  _SCe,
  _SD,
  _Se,
  _Sev,
  _Seve,
  _SF,
  _SM,
  _So,
  _SOI,
  _SOIF,
  _SOII,
  _SOIR,
  _SOIRe,
  _SRN,
  _SRT,
  _ST,
  _St,
  _Sta,
  _STR,
  _T,
  _Ta,
  _Ti,
  _Tim,
  _TMVP,
  _TMVPL,
  _TT,
  _U,
  _UT,
  _V,
  n0,
} from "./schemas_0";
import {
  InsightTimeRange,
  ListInsightsStatusFilter,
  PredictionTimeRange,
  ProactiveInsights,
  ReactiveInsights,
  ResourceCollection,
  ServiceCollection,
  StartTimeRange,
} from "./schemas_3_List";
import { CloudFormationHealths, ServiceHealths, TagHealths } from "./schemas_10_Insights";

/* eslint no-var: 0 */

export var AccountHealth = struct(n0, _AH, 0, [_AI, _I], [0, () => AccountInsightHealth]);
export var AccountInsightHealth = struct(n0, _AIH, 0, [_OPI, _ORI], [1, 1]);
export var AnomalyReportedTimeRange = struct(n0, _ARTR, 0, [_OT, _CT], [4, 4]);
export var AnomalyResource = struct(n0, _AR, 0, [_N, _T], [0, 0]);
export var AnomalySourceDetails = struct(
  n0,
  _ASD,
  0,
  [_CWM, _PIM],
  [() => CloudWatchMetricsDetails, () => PerformanceInsightsMetricsDetails]
);
export var AnomalySourceMetadata = struct(n0, _ASM, 0, [_So, _SRN, _SRT], [0, 0, 0]);
export var AnomalyTimeRange = struct(n0, _ATR, 0, [_ST, _ET], [4, 4]);
export var CloudWatchMetricsDataSummary = struct(n0, _CWMDS, 0, [_TMVPL, _SC], [() => TimestampMetricValuePairList, 0]);
export var CloudWatchMetricsDetail = struct(
  n0,
  _CWMD,
  0,
  [_MN, _Na, _D, _St, _U, _P, _MDS],
  [0, 0, () => CloudWatchMetricsDimensions, 0, 0, 1, () => CloudWatchMetricsDataSummary]
);
export var CloudWatchMetricsDimension = struct(n0, _CWMDl, 0, [_N, _V], [0, 0]);
export var DescribeAnomalyRequest = struct(
  n0,
  _DAR,
  0,
  [_Id, _AI],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _AI,
      },
    ],
  ]
);
export var DescribeAnomalyResponse = struct(n0, _DARe, 0, [_PA, _RA], [() => ProactiveAnomaly, () => ReactiveAnomaly]);
export var DescribeInsightRequest = struct(
  n0,
  _DIRes,
  0,
  [_Id, _AI],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _AI,
      },
    ],
  ]
);
export var DescribeInsightResponse = struct(
  n0,
  _DIResc,
  0,
  [_PIr, _RIea],
  [() => ProactiveInsight, () => ReactiveInsight]
);
export var DescribeOrganizationHealthRequest = struct(n0, _DOHR, 0, [_AIc, _OUI], [64 | 0, 64 | 0]);
export var DescribeOrganizationHealthResponse = struct(n0, _DOHRe, 0, [_ORI, _OPI, _MA, _RH], [1, 1, 1, 1]);
export var DescribeOrganizationOverviewRequest = struct(n0, _DOOR, 0, [_FT, _TT, _AIc, _OUI], [4, 4, 64 | 0, 64 | 0]);
export var DescribeOrganizationOverviewResponse = struct(n0, _DOORe, 0, [_RIe, _PI], [1, 1]);
export var DescribeOrganizationResourceCollectionHealthRequest = struct(
  n0,
  _DORCHR,
  0,
  [_ORCT, _AIc, _OUI, _NT, _MR],
  [0, 64 | 0, 64 | 0, 0, 1]
);
export var DescribeOrganizationResourceCollectionHealthResponse = struct(
  n0,
  _DORCHRe,
  0,
  [_CF, _Se, _A, _NT, _Ta],
  [() => CloudFormationHealths, () => ServiceHealths, () => AccountHealths, 0, () => TagHealths]
);
export var Event = struct(
  n0,
  _E,
  0,
  [_RC, _Id, _Ti, _ESv, _N, _DS, _EC, _R],
  [() => ResourceCollection, 0, 4, 0, 0, 0, 0, () => EventResources]
);
export var EventResource = struct(n0, _ER, 0, [_T, _N, _Ar], [0, 0, 0]);
export var EventTimeRange = struct(n0, _ETRv, 0, [_FT, _TT], [4, 4]);
export var ListAnomaliesForInsightFilters = struct(n0, _LAFIF, 0, [_SCe], [() => ServiceCollection]);
export var ListAnomaliesForInsightRequest = struct(
  n0,
  _LAFIR,
  0,
  [_II, _STR, _MR, _NT, _AI, _Fi],
  [[0, 1], () => StartTimeRange, 1, 0, 0, () => ListAnomaliesForInsightFilters]
);
export var ListAnomaliesForInsightResponse = struct(
  n0,
  _LAFIRi,
  0,
  [_PAr, _RAe, _NT],
  [() => ProactiveAnomalies, () => ReactiveAnomalies, 0]
);
export var ListEventsFilters = struct(
  n0,
  _LEF,
  0,
  [_II, _ETRv, _EC, _ESv, _DS, _RC],
  [0, () => EventTimeRange, 0, 0, 0, () => ResourceCollection]
);
export var ListEventsRequest = struct(n0, _LER, 0, [_Fi, _MR, _NT, _AI], [() => ListEventsFilters, 1, 0, 0]);
export var ListEventsResponse = struct(n0, _LERi, 0, [_Ev, _NT], [() => Events, 0]);
export var ListOrganizationInsightsRequest = struct(
  n0,
  _LOIR,
  0,
  [_SF, _MR, _AIc, _OUI, _NT],
  [() => ListInsightsStatusFilter, 1, 64 | 0, 64 | 0, 0]
);
export var ListOrganizationInsightsResponse = struct(
  n0,
  _LOIRi,
  0,
  [_PI, _RIe, _NT],
  [() => ProactiveOrganizationInsights, () => ReactiveOrganizationInsights, 0]
);
export var ListRecommendationsRequest = struct(n0, _LRR, 0, [_II, _NT, _L, _AI], [0, 0, 0, 0]);
export var ListRecommendationsResponse = struct(n0, _LRRi, 0, [_Re, _NT], [() => Recommendations, 0]);
export var PerformanceInsightsMetricDimensionGroup = struct(n0, _PIMDG, 0, [_G, _D, _Li], [0, 64 | 0, 1]);
export var PerformanceInsightsMetricQuery = struct(
  n0,
  _PIMQ,
  0,
  [_Me, _GB, _Fil],
  [0, () => PerformanceInsightsMetricDimensionGroup, 128 | 0]
);
export var PerformanceInsightsMetricsDetail = struct(
  n0,
  _PIMD,
  0,
  [_MDN, _U, _MQ, _RD, _SAA, _SAB],
  [
    0,
    0,
    () => PerformanceInsightsMetricQuery,
    () => PerformanceInsightsReferenceDataList,
    () => PerformanceInsightsStats,
    () => PerformanceInsightsStats,
  ]
);
export var PerformanceInsightsReferenceComparisonValues = struct(
  n0,
  _PIRCV,
  0,
  [_RS, _RM],
  [() => PerformanceInsightsReferenceScalar, () => PerformanceInsightsReferenceMetric]
);
export var PerformanceInsightsReferenceData = struct(
  n0,
  _PIRD,
  0,
  [_N, _CV],
  [0, () => PerformanceInsightsReferenceComparisonValues]
);
export var PerformanceInsightsReferenceMetric = struct(n0, _PIRM, 0, [_MQ], [() => PerformanceInsightsMetricQuery]);
export var PerformanceInsightsReferenceScalar = struct(n0, _PIRS, 0, [_V], [1]);
export var PerformanceInsightsStat = struct(n0, _PIS, 0, [_T, _V], [0, 1]);
export var ProactiveAnomaly = struct(
  n0,
  _PA,
  0,
  [_Id, _Seve, _S, _UT, _ATR, _ARTR, _PTR, _SD, _AII, _RC, _Li, _SM, _ARn, _De],
  [
    0,
    0,
    0,
    4,
    () => AnomalyTimeRange,
    () => AnomalyReportedTimeRange,
    () => PredictionTimeRange,
    () => AnomalySourceDetails,
    0,
    () => ResourceCollection,
    1,
    () => AnomalySourceMetadata,
    () => AnomalyResources,
    0,
  ]
);
export var ProactiveAnomalySummary = struct(
  n0,
  _PAS,
  0,
  [_Id, _Seve, _S, _UT, _ATR, _ARTR, _PTR, _SD, _AII, _RC, _Li, _SM, _ARn, _De],
  [
    0,
    0,
    0,
    4,
    () => AnomalyTimeRange,
    () => AnomalyReportedTimeRange,
    () => PredictionTimeRange,
    () => AnomalySourceDetails,
    0,
    () => ResourceCollection,
    1,
    () => AnomalySourceMetadata,
    () => AnomalyResources,
    0,
  ]
);
export var ProactiveInsight = struct(
  n0,
  _PIr,
  0,
  [_Id, _N, _Seve, _S, _ITR, _PTR, _RC, _SOII, _De],
  [0, 0, 0, 0, () => InsightTimeRange, () => PredictionTimeRange, () => ResourceCollection, 0, 0]
);
export var ProactiveOrganizationInsightSummary = struct(
  n0,
  _POIS,
  0,
  [_Id, _AI, _OUIr, _N, _Seve, _S, _ITR, _PTR, _RC, _SCe],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    () => InsightTimeRange,
    () => PredictionTimeRange,
    () => ResourceCollection,
    () => ServiceCollection,
  ]
);
export var ReactiveAnomaly = struct(
  n0,
  _RA,
  0,
  [_Id, _Seve, _S, _ATR, _ARTR, _SD, _AII, _RC, _T, _N, _De, _CAI, _ARn],
  [
    0,
    0,
    0,
    () => AnomalyTimeRange,
    () => AnomalyReportedTimeRange,
    () => AnomalySourceDetails,
    0,
    () => ResourceCollection,
    0,
    0,
    0,
    0,
    () => AnomalyResources,
  ]
);
export var ReactiveAnomalySummary = struct(
  n0,
  _RASe,
  0,
  [_Id, _Seve, _S, _ATR, _ARTR, _SD, _AII, _RC, _T, _N, _De, _CAI, _ARn],
  [
    0,
    0,
    0,
    () => AnomalyTimeRange,
    () => AnomalyReportedTimeRange,
    () => AnomalySourceDetails,
    0,
    () => ResourceCollection,
    0,
    0,
    0,
    0,
    () => AnomalyResources,
  ]
);
export var ReactiveInsight = struct(
  n0,
  _RIea,
  0,
  [_Id, _N, _Seve, _S, _ITR, _RC, _SOII, _De],
  [0, 0, 0, 0, () => InsightTimeRange, () => ResourceCollection, 0, 0]
);
export var ReactiveOrganizationInsightSummary = struct(
  n0,
  _ROIS,
  0,
  [_Id, _AI, _OUIr, _N, _Seve, _S, _ITR, _RC, _SCe],
  [0, 0, 0, 0, 0, 0, () => InsightTimeRange, () => ResourceCollection, () => ServiceCollection]
);
export var Recommendation = struct(
  n0,
  _Rec,
  0,
  [_De, _Lin, _N, _Rea, _RE, _RAel, _Ca],
  [0, 0, 0, 0, () => RecommendationRelatedEvents, () => RecommendationRelatedAnomalies, 0]
);
export var RecommendationRelatedAnomaly = struct(
  n0,
  _RRA,
  0,
  [_R, _SD, _AIn],
  [() => RecommendationRelatedAnomalyResources, () => RelatedAnomalySourceDetails, 0]
);
export var RecommendationRelatedAnomalyResource = struct(n0, _RRAR, 0, [_N, _T], [0, 0]);
export var RecommendationRelatedAnomalySourceDetail = struct(
  n0,
  _RRASD,
  0,
  [_CWM],
  [() => RecommendationRelatedCloudWatchMetricsSourceDetails]
);
export var RecommendationRelatedCloudWatchMetricsSourceDetail = struct(n0, _RRCWMSD, 0, [_MN, _Na], [0, 0]);
export var RecommendationRelatedEvent = struct(n0, _RRE, 0, [_N, _R], [0, () => RecommendationRelatedEventResources]);
export var RecommendationRelatedEventResource = struct(n0, _RRER, 0, [_N, _T], [0, 0]);
export var SearchOrganizationInsightsFilters = struct(
  n0,
  _SOIF,
  0,
  [_Sev, _Sta, _RC, _SCe],
  [64 | 0, 64 | 0, () => ResourceCollection, () => ServiceCollection]
);
export var SearchOrganizationInsightsRequest = struct(
  n0,
  _SOIR,
  0,
  [_AIc, _STR, _Fi, _MR, _NT, _T],
  [64 | 0, () => StartTimeRange, () => SearchOrganizationInsightsFilters, 1, 0, 0]
);
export var SearchOrganizationInsightsResponse = struct(
  n0,
  _SOIRe,
  0,
  [_PI, _RIe, _NT],
  [() => ProactiveInsights, () => ReactiveInsights, 0]
);
export var TimestampMetricValuePair = struct(n0, _TMVP, 0, [_Tim, _MV], [4, 1]);
export var AccountHealths = list(n0, _AHc, 0, () => AccountHealth);
export var AccountIdList = 64 | 0;

export var AnomalyResources = list(n0, _ARn, 0, () => AnomalyResource);
export var CloudWatchMetricsDetails = list(n0, _CWMDlo, 0, () => CloudWatchMetricsDetail);
export var CloudWatchMetricsDimensions = list(n0, _CWMDlou, 0, () => CloudWatchMetricsDimension);
export var EventResources = list(n0, _ERv, 0, () => EventResource);
export var Events = list(n0, _Ev, 0, () => Event);
export var ListInsightsAccountIdList = 64 | 0;

export var ListInsightsOrganizationalUnitIdList = 64 | 0;

export var OrganizationalUnitIdList = 64 | 0;

export var PerformanceInsightsMetricDimensions = 64 | 0;

export var PerformanceInsightsMetricsDetails = list(n0, _PIMDe, 0, () => PerformanceInsightsMetricsDetail);
export var PerformanceInsightsReferenceDataList = list(n0, _PIRDL, 0, () => PerformanceInsightsReferenceData);
export var PerformanceInsightsStats = list(n0, _PISe, 0, () => PerformanceInsightsStat);
export var ProactiveAnomalies = list(n0, _PAr, 0, () => ProactiveAnomalySummary);
export var ProactiveOrganizationInsights = list(n0, _POI, 0, () => ProactiveOrganizationInsightSummary);
export var ReactiveAnomalies = list(n0, _RAe, 0, () => ReactiveAnomalySummary);
export var ReactiveOrganizationInsights = list(n0, _ROI, 0, () => ReactiveOrganizationInsightSummary);
export var RecommendationRelatedAnomalies = list(n0, _RRAe, 0, () => RecommendationRelatedAnomaly);
export var RecommendationRelatedAnomalyResources = list(n0, _RRARe, 0, () => RecommendationRelatedAnomalyResource);
export var RecommendationRelatedCloudWatchMetricsSourceDetails = list(
  n0,
  _RRCWMSDe,
  0,
  () => RecommendationRelatedCloudWatchMetricsSourceDetail
);
export var RecommendationRelatedEventResources = list(n0, _RRERe, 0, () => RecommendationRelatedEventResource);
export var RecommendationRelatedEvents = list(n0, _RREe, 0, () => RecommendationRelatedEvent);
export var Recommendations = list(n0, _Re, 0, () => Recommendation);
export var RelatedAnomalySourceDetails = list(n0, _RASD, 0, () => RecommendationRelatedAnomalySourceDetail);
export var SearchInsightsAccountIdList = 64 | 0;

export var TimestampMetricValuePairList = list(n0, _TMVPL, 0, () => TimestampMetricValuePair);
export var PerformanceInsightsMetricFilterMap = 128 | 0;

export var DescribeAnomaly = op(
  n0,
  _DA,
  {
    [_h]: ["GET", "/anomalies/{Id}", 200],
  },
  () => DescribeAnomalyRequest,
  () => DescribeAnomalyResponse
);
export var DescribeInsight = op(
  n0,
  _DIe,
  {
    [_h]: ["GET", "/insights/{Id}", 200],
  },
  () => DescribeInsightRequest,
  () => DescribeInsightResponse
);
export var DescribeOrganizationHealth = op(
  n0,
  _DOH,
  {
    [_h]: ["POST", "/organization/health", 200],
  },
  () => DescribeOrganizationHealthRequest,
  () => DescribeOrganizationHealthResponse
);
export var DescribeOrganizationOverview = op(
  n0,
  _DOO,
  {
    [_h]: ["POST", "/organization/overview", 200],
  },
  () => DescribeOrganizationOverviewRequest,
  () => DescribeOrganizationOverviewResponse
);
export var DescribeOrganizationResourceCollectionHealth = op(
  n0,
  _DORCH,
  {
    [_h]: ["POST", "/organization/health/resource-collection", 200],
  },
  () => DescribeOrganizationResourceCollectionHealthRequest,
  () => DescribeOrganizationResourceCollectionHealthResponse
);
export var ListAnomaliesForInsight = op(
  n0,
  _LAFI,
  {
    [_h]: ["POST", "/anomalies/insight/{InsightId}", 200],
  },
  () => ListAnomaliesForInsightRequest,
  () => ListAnomaliesForInsightResponse
);
export var ListEvents = op(
  n0,
  _LE,
  {
    [_h]: ["POST", "/events", 200],
  },
  () => ListEventsRequest,
  () => ListEventsResponse
);
export var ListOrganizationInsights = op(
  n0,
  _LOI,
  {
    [_h]: ["POST", "/organization/insights", 200],
  },
  () => ListOrganizationInsightsRequest,
  () => ListOrganizationInsightsResponse
);
export var ListRecommendations = op(
  n0,
  _LR,
  {
    [_h]: ["POST", "/recommendations", 200],
  },
  () => ListRecommendationsRequest,
  () => ListRecommendationsResponse
);
export var SearchOrganizationInsights = op(
  n0,
  _SOI,
  {
    [_h]: ["POST", "/organization/insights/search", 200],
  },
  () => SearchOrganizationInsightsRequest,
  () => SearchOrganizationInsightsResponse
);
