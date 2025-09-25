// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AIc,
  _CFo,
  _COo,
  _Cou,
  _Crit,
  _DF,
  _Fat,
  _Fil,
  _Filt,
  _FNie,
  _FSi,
  _FT,
  _FV,
  _GBF,
  _GBR,
  _GBRr,
  _GBRro,
  _GBV,
  _GBVr,
  _GRSV,
  _GRSVR,
  _GRSVRe,
  _GRV,
  _GRVR,
  _GRVRe,
  _h,
  _Hi,
  _Inf,
  _K,
  _Low,
  _Med,
  _MF,
  _MRa,
  _MSR,
  _NF,
  _NTe,
  _Oper,
  _Ot,
  _PNr,
  _RAe,
  _RCeso,
  _RCesou,
  _RCF,
  _RCFL,
  _RCTD,
  _RDCTD,
  _RDF,
  _RDFL,
  _Reg,
  _Res,
  _RFes,
  _RFS,
  _RFSL,
  _RGBR,
  _RGBRe,
  _RI,
  _RMF,
  _RMFL,
  _RNes,
  _RNF,
  _RNFL,
  _RResou,
  _RSB,
  _RSF,
  _RSFL,
  _RT,
  _RTe,
  _RTeso,
  _RTL,
  _SCor,
  _Sev,
  _SF,
  _SOo,
  _TF,
  _Unk,
  _Val,
  DateFilter,
  MapFilter,
  n0,
  NumberFilter,
  StringFilter,
} from "./schemas_0";
import { SortCriteria } from "./schemas_58_Get";

/* eslint no-var: 0 */

export var GetResourcesStatisticsV2Request = struct(
  n0,
  _GRSVR,
  0,
  [_GBR, _SOo, _MSR],
  [() => ResourceGroupByRules, 0, 1]
);
export var GetResourcesStatisticsV2Response = struct(n0, _GRSVRe, 0, [_GBRr], [() => GroupByResults]);
export var GetResourcesV2Request = struct(
  n0,
  _GRVR,
  0,
  [_Filt, _SCor, _NTe, _MRa],
  [() => ResourcesFilters, () => SortCriteria, 0, 1]
);
export var GetResourcesV2Response = struct(n0, _GRVRe, 0, [_Res, _NTe], [() => Resources, 0]);
export var GroupByResult = struct(n0, _GBRro, 0, [_GBF, _GBV], [0, () => GroupByValues]);
export var GroupByValue = struct(n0, _GBVr, 0, [_FV, _Cou], [0, 1]);
export var ResourceFindingsSummary = struct(
  n0,
  _RFS,
  0,
  [_FT, _PNr, _TF, _Sev],
  [0, 0, 1, () => ResourceSeverityBreakdown]
);
export var ResourceGroupByRule = struct(n0, _RGBR, 0, [_GBF, _Filt], [0, () => ResourcesFilters]);
export var ResourceResult = struct(
  n0,
  _RResou,
  0,
  [_RAe, _RI, _AIc, _Reg, _RCeso, _RT, _RNes, _RCTD, _RDCTD, _FSi, _RTe, _RCesou],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, () => ResourceFindingsSummaryList, () => ResourceTagList, 15]
);
export var ResourcesCompositeFilter = struct(
  n0,
  _RCF,
  0,
  [_SF, _DF, _NF, _MF, _Oper],
  [
    () => ResourcesStringFilterList,
    () => ResourcesDateFilterList,
    () => ResourcesNumberFilterList,
    () => ResourcesMapFilterList,
    0,
  ]
);
export var ResourcesDateFilter = struct(n0, _RDF, 0, [_FNie, _Fil], [0, () => DateFilter]);
export var ResourceSeverityBreakdown = struct(
  n0,
  _RSB,
  0,
  [_Ot, _Fat, _Crit, _Hi, _Med, _Low, _Inf, _Unk],
  [1, 1, 1, 1, 1, 1, 1, 1]
);
export var ResourcesFilters = struct(n0, _RFes, 0, [_CFo, _COo], [() => ResourcesCompositeFilterList, 0]);
export var ResourcesMapFilter = struct(n0, _RMF, 0, [_FNie, _Fil], [0, () => MapFilter]);
export var ResourcesNumberFilter = struct(n0, _RNF, 0, [_FNie, _Fil], [0, () => NumberFilter]);
export var ResourcesStringFilter = struct(n0, _RSF, 0, [_FNie, _Fil], [0, () => StringFilter]);
export var ResourceTag = struct(n0, _RTeso, 0, [_K, _Val], [0, 0]);
export var GroupByResults = list(n0, _GBRr, 0, () => GroupByResult);
export var GroupByValues = list(n0, _GBV, 0, () => GroupByValue);
export var ResourceFindingsSummaryList = list(n0, _RFSL, 0, () => ResourceFindingsSummary);
export var ResourceGroupByRules = list(n0, _RGBRe, 0, () => ResourceGroupByRule);
export var Resources = list(n0, _Res, 0, () => ResourceResult);
export var ResourcesCompositeFilterList = list(n0, _RCFL, 0, () => ResourcesCompositeFilter);
export var ResourcesDateFilterList = list(n0, _RDFL, 0, () => ResourcesDateFilter);
export var ResourcesMapFilterList = list(n0, _RMFL, 0, () => ResourcesMapFilter);
export var ResourcesNumberFilterList = list(n0, _RNFL, 0, () => ResourcesNumberFilter);
export var ResourcesStringFilterList = list(n0, _RSFL, 0, () => ResourcesStringFilter);
export var ResourceTagList = list(n0, _RTL, 0, () => ResourceTag);
export var GetResourcesStatisticsV2 = op(
  n0,
  _GRSV,
  {
    [_h]: ["POST", "/resourcesv2/statistics", 200],
  },
  () => GetResourcesStatisticsV2Request,
  () => GetResourcesStatisticsV2Response
);
export var GetResourcesV2 = op(
  n0,
  _GRV,
  {
    [_h]: ["POST", "/resourcesv2", 200],
  },
  () => GetResourcesV2Request,
  () => GetResourcesV2Response
);
