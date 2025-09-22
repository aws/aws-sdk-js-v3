// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ABK,
  _An,
  _ARA,
  _CF,
  _CFC,
  _CFCF,
  _Cl,
  _ET,
  _ETR,
  _Fi,
  _FT,
  _GRC,
  _GRCR,
  _GRCRe,
  _h,
  _hQ,
  _Id,
  _ITR,
  _LI,
  _LIASF,
  _LICSF,
  _LIOSF,
  _LIR,
  _LIRi,
  _LISF,
  _LMR,
  _LMRF,
  _LMRR,
  _LMRRi,
  _LU,
  _MR,
  _MRI,
  _MRIo,
  _MRN,
  _N,
  _NT,
  _O,
  _PI,
  _PISr,
  _PTR,
  _RC,
  _RCF,
  _RCT,
  _RIe,
  _RIS,
  _RP,
  _RTF,
  _S,
  _SCe,
  _Sev,
  _Seve,
  _SF,
  _SIe,
  _SIF,
  _SIR,
  _SIRe,
  _SN,
  _SNe,
  _ST,
  _Sta,
  _STR,
  _T,
  _Ta,
  _TCa,
  _TCag,
  _TCF,
  _TCFa,
  _TT,
  _TV,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CloudFormationCollection = struct(n0, _CFC, 0, [_SN], [64 | 0]);
export var CloudFormationCollectionFilter = struct(n0, _CFCF, 0, [_SN], [64 | 0]);
export var EndTimeRange = struct(n0, _ETR, 0, [_FT, _TT], [4, 4]);
export var GetResourceCollectionRequest = struct(
  n0,
  _GRCR,
  0,
  [_RCT, _NT],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
  ]
);
export var GetResourceCollectionResponse = struct(n0, _GRCRe, 0, [_RC, _NT], [() => ResourceCollectionFilter, 0]);
export var InsightTimeRange = struct(n0, _ITR, 0, [_ST, _ET], [4, 4]);
export var ListInsightsAnyStatusFilter = struct(n0, _LIASF, 0, [_T, _STR], [0, () => StartTimeRange]);
export var ListInsightsClosedStatusFilter = struct(n0, _LICSF, 0, [_T, _ETR], [0, () => EndTimeRange]);
export var ListInsightsOngoingStatusFilter = struct(n0, _LIOSF, 0, [_T], [0]);
export var ListInsightsRequest = struct(n0, _LIR, 0, [_SF, _MR, _NT], [() => ListInsightsStatusFilter, 1, 0]);
export var ListInsightsResponse = struct(
  n0,
  _LIRi,
  0,
  [_PI, _RIe, _NT],
  [() => ProactiveInsights, () => ReactiveInsights, 0]
);
export var ListInsightsStatusFilter = struct(
  n0,
  _LISF,
  0,
  [_O, _Cl, _An],
  [() => ListInsightsOngoingStatusFilter, () => ListInsightsClosedStatusFilter, () => ListInsightsAnyStatusFilter]
);
export var ListMonitoredResourcesFilters = struct(n0, _LMRF, 0, [_RP, _RTF], [0, 64 | 0]);
export var ListMonitoredResourcesRequest = struct(
  n0,
  _LMRR,
  0,
  [_Fi, _MR, _NT],
  [() => ListMonitoredResourcesFilters, 1, 0]
);
export var ListMonitoredResourcesResponse = struct(n0, _LMRRi, 0, [_MRI, _NT], [() => MonitoredResourceIdentifiers, 0]);
export var MonitoredResourceIdentifier = struct(
  n0,
  _MRIo,
  0,
  [_MRN, _T, _RP, _LU, _RC],
  [0, 0, 0, 4, () => ResourceCollection]
);
export var PredictionTimeRange = struct(n0, _PTR, 0, [_ST, _ET], [4, 4]);
export var ProactiveInsightSummary = struct(
  n0,
  _PISr,
  0,
  [_Id, _N, _Seve, _S, _ITR, _PTR, _RC, _SCe, _ARA],
  [
    0,
    0,
    0,
    0,
    () => InsightTimeRange,
    () => PredictionTimeRange,
    () => ResourceCollection,
    () => ServiceCollection,
    64 | 0,
  ]
);
export var ReactiveInsightSummary = struct(
  n0,
  _RIS,
  0,
  [_Id, _N, _Seve, _S, _ITR, _RC, _SCe, _ARA],
  [0, 0, 0, 0, () => InsightTimeRange, () => ResourceCollection, () => ServiceCollection, 64 | 0]
);
export var ResourceCollection = struct(n0, _RC, 0, [_CF, _Ta], [() => CloudFormationCollection, () => TagCollections]);
export var ResourceCollectionFilter = struct(
  n0,
  _RCF,
  0,
  [_CF, _Ta],
  [() => CloudFormationCollectionFilter, () => TagCollectionFilters]
);
export var SearchInsightsFilters = struct(
  n0,
  _SIF,
  0,
  [_Sev, _Sta, _RC, _SCe],
  [64 | 0, 64 | 0, () => ResourceCollection, () => ServiceCollection]
);
export var SearchInsightsRequest = struct(
  n0,
  _SIR,
  0,
  [_STR, _Fi, _MR, _NT, _T],
  [() => StartTimeRange, () => SearchInsightsFilters, 1, 0, 0]
);
export var SearchInsightsResponse = struct(
  n0,
  _SIRe,
  0,
  [_PI, _RIe, _NT],
  [() => ProactiveInsights, () => ReactiveInsights, 0]
);
export var ServiceCollection = struct(n0, _SCe, 0, [_SNe], [64 | 0]);
export var StartTimeRange = struct(n0, _STR, 0, [_FT, _TT], [4, 4]);
export var TagCollection = struct(n0, _TCa, 0, [_ABK, _TV], [0, 64 | 0]);
export var TagCollectionFilter = struct(n0, _TCF, 0, [_ABK, _TV], [0, 64 | 0]);
export var AssociatedResourceArns = 64 | 0;

export var InsightStatuses = 64 | 0;

export var MonitoredResourceIdentifiers = list(n0, _MRI, 0, () => MonitoredResourceIdentifier);
export var ProactiveInsights = list(n0, _PI, 0, () => ProactiveInsightSummary);
export var ReactiveInsights = list(n0, _RIe, 0, () => ReactiveInsightSummary);
export var ResourceTypeFilters = 64 | 0;

export var ServiceNames = 64 | 0;

export var StackNames = 64 | 0;

export var TagCollectionFilters = list(n0, _TCFa, 0, () => TagCollectionFilter);
export var TagCollections = list(n0, _TCag, 0, () => TagCollection);
export var TagValues = 64 | 0;

export var GetResourceCollection = op(
  n0,
  _GRC,
  {
    [_h]: ["GET", "/resource-collections/{ResourceCollectionType}", 200],
  },
  () => GetResourceCollectionRequest,
  () => GetResourceCollectionResponse
);
export var ListInsights = op(
  n0,
  _LI,
  {
    [_h]: ["POST", "/insights", 200],
  },
  () => ListInsightsRequest,
  () => ListInsightsResponse
);
export var ListMonitoredResources = op(
  n0,
  _LMR,
  {
    [_h]: ["POST", "/monitoredResources", 200],
  },
  () => ListMonitoredResourcesRequest,
  () => ListMonitoredResourcesResponse
);
export var SearchInsights = op(
  n0,
  _SIe,
  {
    [_h]: ["POST", "/insights/search", 200],
  },
  () => SearchInsightsRequest,
  () => SearchInsightsResponse
);
