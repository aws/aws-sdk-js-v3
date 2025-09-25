// smithy-typescript generated code
import { list, op, sim, struct, struct as uni } from "@smithy/core/schema";

import {
  _a,
  _aA,
  _ag,
  _agg,
  _ALg,
  _ALI,
  _ALIAA,
  _ALIs,
  _aLss,
  _AN,
  _AO,
  _AOI,
  _AOIg,
  _AOL,
  _cA,
  _co,
  _cS,
  _de,
  _dI,
  _dPL,
  _DPLI,
  _DPLIAA,
  _dV,
  _eIn,
  _eO,
  _eR,
  _eT,
  _f,
  _fi,
  _fN,
  _gGT,
  _gT,
  _ht,
  _id,
  _it,
  _lCB,
  _lI,
  _lR,
  _LSI,
  _LSIis,
  _lTSDPF,
  _lUB,
  _MO,
  _mO,
  _MOa,
  _MR,
  _mR,
  _mRa,
  _MRI,
  _n,
  _nT,
  _oPI,
  _sIe,
  _SLe,
  _SLI,
  _SLO,
  _so,
  _sOt,
  _SRI,
  _SRIe,
  _sTe,
  _te,
  _tI,
  _ti,
  _TM,
  _tM,
  _tMC,
  _TMI,
  _tR,
  _TSDPSFO,
  _TSDPSFOL,
  _v,
  Description,
  n0,
} from "./schemas_0";
import { FilterClause, SearchInList, SearchSort } from "./schemas_28_Search";
import { DataProductName } from "./schemas_43_Product";
import { DetailedGlossaryTerms } from "./schemas_55_Subscription";

/* eslint no-var: 0 */

export var AssetName = sim(n0, _AN, 0, 8);
export var AggregationListItem = struct(n0, _ALI, 0, [_a, _dV], [0, 0]);
export var AggregationOutput = struct(n0, _AO, 0, [_a, _dV, _it], [0, 0, () => AggregationOutputItems]);
export var AggregationOutputItem = struct(n0, _AOI, 0, [_v, _co, _dV], [0, 1, 0]);
export var AssetListingItem = struct(
  n0,
  _ALIs,
  0,
  [_lI, _lR, _n, _eIn, _eR, _eT, _de, _cA, _lCB, _lUB, _gT, _gGT, _oPI, _aA],
  [
    0,
    0,
    [() => AssetName, 0],
    0,
    0,
    0,
    [() => Description, 0],
    4,
    0,
    0,
    [() => DetailedGlossaryTerms, 0],
    [() => DetailedGlossaryTerms, 0],
    0,
    () => AssetListingItemAdditionalAttributes,
  ]
);
export var AssetListingItemAdditionalAttributes = struct(
  n0,
  _ALIAA,
  0,
  [_f, _mR, _lTSDPF],
  [0, () => MatchRationale, () => TimeSeriesDataPointSummaryFormOutputList]
);
export var DataProductListingItem = struct(
  n0,
  _DPLI,
  0,
  [_lI, _lR, _n, _eIn, _eR, _de, _cA, _lCB, _lUB, _gT, _oPI, _aA, _it],
  [
    0,
    0,
    [() => DataProductName, 0],
    0,
    0,
    [() => Description, 0],
    4,
    0,
    0,
    [() => DetailedGlossaryTerms, 0],
    0,
    () => DataProductListingItemAdditionalAttributes,
    [() => ListingSummaryItems, 0],
  ]
);
export var DataProductListingItemAdditionalAttributes = struct(n0, _DPLIAA, 0, [_f, _mR], [0, () => MatchRationale]);
export var ListingSummaryItem = struct(n0, _LSI, 0, [_lI, _lR, _gT], [0, 0, [() => DetailedGlossaryTerms, 0]]);
export var MatchOffset = struct(n0, _MO, 0, [_sOt, _eO], [1, 1]);
export var SearchListingsInput = struct(
  n0,
  _SLI,
  0,
  [_dI, _sTe, _sIe, _mRa, _nT, _fi, _ag, _so, _aA],
  [[0, 1], 0, () => SearchInList, 1, 0, () => FilterClause, () => AggregationList, () => SearchSort, 64 | 0]
);
export var SearchListingsOutput = struct(
  n0,
  _SLO,
  0,
  [_it, _nT, _tMC, _agg],
  [[() => SearchResultItems, 0], 0, 1, () => AggregationOutputList]
);
export var TextMatchItem = struct(n0, _TMI, 0, [_a, _te, _mO], [0, 0, () => MatchOffsets]);
export var TimeSeriesDataPointSummaryFormOutput = struct(
  n0,
  _TSDPSFO,
  0,
  [_fN, _tI, _tR, _ti, _cS, _id],
  [0, 0, 0, 4, 0, 0]
);
export var AggregationList = list(n0, _ALg, 0, () => AggregationListItem);
export var AggregationOutputItems = list(n0, _AOIg, 0, () => AggregationOutputItem);
export var AggregationOutputList = list(n0, _AOL, 0, () => AggregationOutput);
export var ListingSummaryItems = list(n0, _LSIis, 0, [() => ListingSummaryItem, 0]);
export var MatchOffsets = list(n0, _MOa, 0, () => MatchOffset);
export var MatchRationale = list(n0, _MR, 0, () => MatchRationaleItem);
export var SearchOutputAdditionalAttributes = 64 | 0;

export var SearchResultItems = list(n0, _SRI, 0, [() => SearchResultItem, 0]);
export var TextMatches = list(n0, _TM, 0, () => TextMatchItem);
export var TimeSeriesDataPointSummaryFormOutputList = list(
  n0,
  _TSDPSFOL,
  0,
  () => TimeSeriesDataPointSummaryFormOutput
);
export var MatchRationaleItem = uni(n0, _MRI, 0, [_tM], [() => TextMatches]);
export var SearchResultItem = uni(
  n0,
  _SRIe,
  0,
  [_aLss, _dPL],
  [
    [() => AssetListingItem, 0],
    [() => DataProductListingItem, 0],
  ]
);
export var SearchListings = op(
  n0,
  _SLe,
  {
    [_ht]: ["POST", "/v2/domains/{domainIdentifier}/listings/search", 200],
  },
  () => SearchListingsInput,
  () => SearchListingsOutput
);
