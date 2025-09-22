// smithy-typescript generated code
import { error, list, map, op, struct } from "@smithy/core/schema";

import {
  BillExpirationException as __BillExpirationException,
  RequestChangedException as __RequestChangedException,
  UnresolvableUsageUnitException as __UnresolvableUsageUnitException,
} from "../models/index";
import {
  _Am,
  _At,
  _BEE,
  _BTP,
  _BTPA,
  _BVA,
  _c,
  _CAUC,
  _CAUCo,
  _CAUS,
  _CCD,
  _CCDo,
  _CCN,
  _CCNo,
  _CCV,
  _CDo,
  _CDos,
  _CM,
  _CMV,
  _Con,
  _CSo,
  _CTP,
  _CTPA,
  _D,
  _Dim,
  _DVA,
  _DVi,
  _DVWA,
  _DVWAL,
  _e,
  _Es,
  _Fi,
  _FR,
  _FRBT,
  _G,
  _GB,
  _GCAU,
  _GCAUC,
  _GCAUCR,
  _GCAUCRe,
  _GCAUR,
  _GCAURe,
  _GCAUWR,
  _GCAUWRR,
  _GCAUWRRe,
  _GCC,
  _GCCD,
  _GCCDR,
  _GCCDRe,
  _GCCR,
  _GCCRe,
  _GCF,
  _GCFR,
  _GCFRe,
  _GD,
  _GDV,
  _GDVR,
  _GDVRe,
  _Gr,
  _Gro,
  _GTe,
  _GTR,
  _GTRe,
  _GUF,
  _GUFR,
  _GUFRe,
  _Ke,
  _M,
  _Me,
  _Metr,
  _MFC,
  _MR,
  _MV,
  _MVe,
  _N,
  _NPT,
  _PIL,
  _PILB,
  _PIUB,
  _RBT,
  _RBTe,
  _RCE,
  _RS,
  _SB,
  _SDor,
  _SS,
  _Tag,
  _TCAU,
  _TK,
  _To,
  _TP,
  _TS,
  _Ty,
  _U,
  _UUUE,
  _Va,
  DateInterval,
  Expression,
  n0,
} from "./schemas_0";
import { SortDefinition } from "./schemas_2_Get";
import { GroupDefinitions } from "./schemas_12_Get";

/* eslint no-var: 0 */

export var BillExpirationException = error(
  n0,
  _BEE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __BillExpirationException
);
export var ComparisonMetricValue = struct(n0, _CMV, 0, [_BTPA, _CTPA, _D, _U], [0, 0, 0, 0]);
export var CostAndUsageComparison = struct(n0, _CAUC, 0, [_CAUS, _Me], [() => Expression, () => ComparisonMetrics]);
export var CostComparisonDriver = struct(
  n0,
  _CCD,
  0,
  [_CSo, _Me, _CDo],
  [() => Expression, () => ComparisonMetrics, () => CostDrivers]
);
export var CostDriver = struct(n0, _CDos, 0, [_Ty, _N, _Me], [0, 0, () => ComparisonMetrics]);
export var DimensionValuesWithAttributes = struct(n0, _DVWA, 0, [_Va, _At], [0, 128 | 0]);
export var ForecastResult = struct(n0, _FR, 0, [_TP, _MV, _PILB, _PIUB], [() => DateInterval, 0, 0, 0]);
export var GetCostAndUsageComparisonsRequest = struct(
  n0,
  _GCAUCR,
  0,
  [_BVA, _BTP, _CTP, _MFC, _Fi, _GB, _MR, _NPT],
  [0, () => DateInterval, () => DateInterval, 0, () => Expression, () => GroupDefinitions, 1, 0]
);
export var GetCostAndUsageComparisonsResponse = struct(
  n0,
  _GCAUCRe,
  0,
  [_CAUCo, _TCAU, _NPT],
  [() => CostAndUsageComparisons, () => ComparisonMetrics, 0]
);
export var GetCostAndUsageRequest = struct(
  n0,
  _GCAUR,
  0,
  [_TP, _Gr, _Fi, _Me, _GB, _BVA, _NPT],
  [() => DateInterval, 0, () => Expression, 64 | 0, () => GroupDefinitions, 0, 0]
);
export var GetCostAndUsageResponse = struct(
  n0,
  _GCAURe,
  0,
  [_NPT, _GD, _RBT, _DVA],
  [0, () => GroupDefinitions, () => ResultsByTime, () => DimensionValuesWithAttributesList]
);
export var GetCostAndUsageWithResourcesRequest = struct(
  n0,
  _GCAUWRR,
  0,
  [_TP, _Gr, _Fi, _Me, _GB, _BVA, _NPT],
  [() => DateInterval, 0, () => Expression, 64 | 0, () => GroupDefinitions, 0, 0]
);
export var GetCostAndUsageWithResourcesResponse = struct(
  n0,
  _GCAUWRRe,
  0,
  [_NPT, _GD, _RBT, _DVA],
  [0, () => GroupDefinitions, () => ResultsByTime, () => DimensionValuesWithAttributesList]
);
export var GetCostCategoriesRequest = struct(
  n0,
  _GCCR,
  0,
  [_SS, _TP, _CCN, _Fi, _SB, _BVA, _MR, _NPT],
  [0, () => DateInterval, 0, () => Expression, () => SortDefinitions, 0, 1, 0]
);
export var GetCostCategoriesResponse = struct(n0, _GCCRe, 0, [_NPT, _CCNo, _CCV, _RS, _TS], [0, 64 | 0, 64 | 0, 1, 1]);
export var GetCostComparisonDriversRequest = struct(
  n0,
  _GCCDR,
  0,
  [_BVA, _BTP, _CTP, _MFC, _Fi, _GB, _MR, _NPT],
  [0, () => DateInterval, () => DateInterval, 0, () => Expression, () => GroupDefinitions, 1, 0]
);
export var GetCostComparisonDriversResponse = struct(n0, _GCCDRe, 0, [_CCDo, _NPT], [() => CostComparisonDrivers, 0]);
export var GetCostForecastRequest = struct(
  n0,
  _GCFR,
  0,
  [_TP, _Metr, _Gr, _Fi, _BVA, _PIL],
  [() => DateInterval, 0, 0, () => Expression, 0, 1]
);
export var GetCostForecastResponse = struct(
  n0,
  _GCFRe,
  0,
  [_To, _FRBT],
  [() => MetricValue, () => ForecastResultsByTime]
);
export var GetDimensionValuesRequest = struct(
  n0,
  _GDVR,
  0,
  [_SS, _TP, _Dim, _Con, _Fi, _SB, _BVA, _MR, _NPT],
  [0, () => DateInterval, 0, 0, () => Expression, () => SortDefinitions, 0, 1, 0]
);
export var GetDimensionValuesResponse = struct(
  n0,
  _GDVRe,
  0,
  [_DVi, _RS, _TS, _NPT],
  [() => DimensionValuesWithAttributesList, 1, 1, 0]
);
export var GetTagsRequest = struct(
  n0,
  _GTR,
  0,
  [_SS, _TP, _TK, _Fi, _SB, _BVA, _MR, _NPT],
  [0, () => DateInterval, 0, () => Expression, () => SortDefinitions, 0, 1, 0]
);
export var GetTagsResponse = struct(n0, _GTRe, 0, [_NPT, _Tag, _RS, _TS], [0, 64 | 0, 1, 1]);
export var GetUsageForecastRequest = struct(
  n0,
  _GUFR,
  0,
  [_TP, _Metr, _Gr, _Fi, _BVA, _PIL],
  [() => DateInterval, 0, 0, () => Expression, 0, 1]
);
export var GetUsageForecastResponse = struct(
  n0,
  _GUFRe,
  0,
  [_To, _FRBT],
  [() => MetricValue, () => ForecastResultsByTime]
);
export var Group = struct(n0, _Gro, 0, [_Ke, _Me], [64 | 0, () => Metrics]);
export var MetricValue = struct(n0, _MVe, 0, [_Am, _U], [0, 0]);
export var RequestChangedException = error(
  n0,
  _RCE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __RequestChangedException
);
export var ResultByTime = struct(
  n0,
  _RBTe,
  0,
  [_TP, _To, _G, _Es],
  [() => DateInterval, () => Metrics, () => Groups, 2]
);
export var UnresolvableUsageUnitException = error(
  n0,
  _UUUE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __UnresolvableUsageUnitException
);
export var CostAndUsageComparisons = list(n0, _CAUCo, 0, () => CostAndUsageComparison);
export var CostCategoryNamesList = 64 | 0;

export var CostComparisonDrivers = list(n0, _CCDo, 0, () => CostComparisonDriver);
export var CostDrivers = list(n0, _CDo, 0, () => CostDriver);
export var DimensionValuesWithAttributesList = list(n0, _DVWAL, 0, () => DimensionValuesWithAttributes);
export var ForecastResultsByTime = list(n0, _FRBT, 0, () => ForecastResult);
export var Groups = list(n0, _G, 0, () => Group);
export var Keys = 64 | 0;

export var ResultsByTime = list(n0, _RBT, 0, () => ResultByTime);
export var SortDefinitions = list(n0, _SDor, 0, () => SortDefinition);
export var TagList = 64 | 0;

export var ComparisonMetrics = map(n0, _CM, 0, 0, () => ComparisonMetricValue);
export var Metrics = map(n0, _Me, 0, 0, () => MetricValue);
export var GetCostAndUsage = op(
  n0,
  _GCAU,
  0,
  () => GetCostAndUsageRequest,
  () => GetCostAndUsageResponse
);
export var GetCostAndUsageComparisons = op(
  n0,
  _GCAUC,
  0,
  () => GetCostAndUsageComparisonsRequest,
  () => GetCostAndUsageComparisonsResponse
);
export var GetCostAndUsageWithResources = op(
  n0,
  _GCAUWR,
  0,
  () => GetCostAndUsageWithResourcesRequest,
  () => GetCostAndUsageWithResourcesResponse
);
export var GetCostCategories = op(
  n0,
  _GCC,
  0,
  () => GetCostCategoriesRequest,
  () => GetCostCategoriesResponse
);
export var GetCostComparisonDrivers = op(
  n0,
  _GCCD,
  0,
  () => GetCostComparisonDriversRequest,
  () => GetCostComparisonDriversResponse
);
export var GetCostForecast = op(
  n0,
  _GCF,
  0,
  () => GetCostForecastRequest,
  () => GetCostForecastResponse
);
export var GetDimensionValues = op(
  n0,
  _GDV,
  0,
  () => GetDimensionValuesRequest,
  () => GetDimensionValuesResponse
);
export var GetTags = op(
  n0,
  _GTe,
  0,
  () => GetTagsRequest,
  () => GetTagsResponse
);
export var GetUsageForecast = op(
  n0,
  _GUF,
  0,
  () => GetUsageForecastRequest,
  () => GetUsageForecastResponse
);
