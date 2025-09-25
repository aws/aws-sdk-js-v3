// smithy-typescript generated code
import { list, op, sim, struct, struct as uni } from "@smithy/core/schema";

import {
  _AF,
  _AFC,
  _AFS,
  _aI,
  _aIs,
  _an,
  _cA,
  _CAF,
  _CAFI,
  _CAFO,
  _cCo,
  _CFC,
  _cN,
  _con,
  _cT,
  _de,
  _dI,
  _dIo,
  _eCN,
  _eM,
  _eRF,
  _ETE,
  _eTq,
  _exp,
  _FN,
  _GAF,
  _GAFI,
  _GAFO,
  _GTE,
  _gTOET,
  _GTOETE,
  _gTre,
  _hQ,
  _ht,
  _i,
  _iCN,
  _id,
  _IE,
  _iN,
  _in_,
  _INE,
  _iNN,
  _INNE,
  _it,
  _LAF,
  _LAFI,
  _LAFO,
  _LEi,
  _li,
  _lT,
  _LTE,
  _lTOET,
  _LTOETE,
  _mRa,
  _n,
  _nET,
  _NETE,
  _nI,
  _NIE,
  _nL,
  _NLE,
  _nT,
  _or_,
  _rCo,
  _RF,
  _rF,
  _RFCo,
  _RFE,
  _RFL,
  _s,
  _sen,
  _UAF,
  _UAFI,
  _UAFO,
  _v,
  _va,
  Description,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var FilterName = sim(n0, _FN, 0, 8);
export var AssetFilterSummary = struct(
  n0,
  _AFS,
  0,
  [_id, _dIo, _aI, _n, _de, _s, _eCN, _eRF, _cA, _eM],
  [0, 0, 0, [() => FilterName, 0], [() => Description, 0], 0, 64 | 0, 0, 4, 0]
);
export var ColumnFilterConfiguration = struct(n0, _CFC, 0, [_iCN], [64 | 0]);
export var CreateAssetFilterInput = struct(
  n0,
  _CAFI,
  0,
  [_dI, _aIs, _n, _de, _con, _cT],
  [[0, 1], [0, 1], [() => FilterName, 0], [() => Description, 0], () => AssetFilterConfiguration, [0, 4]]
);
export var CreateAssetFilterOutput = struct(
  n0,
  _CAFO,
  0,
  [_id, _dIo, _aI, _n, _de, _s, _con, _cA, _eM, _eCN, _eRF],
  [0, 0, 0, [() => FilterName, 0], [() => Description, 0], 0, () => AssetFilterConfiguration, 4, 0, 64 | 0, 0]
);
export var EqualToExpression = struct(n0, _ETE, 0, [_cN, _v], [0, 0]);
export var GetAssetFilterInput = struct(
  n0,
  _GAFI,
  0,
  [_dI, _aIs, _i],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var GetAssetFilterOutput = struct(
  n0,
  _GAFO,
  0,
  [_id, _dIo, _aI, _n, _de, _s, _con, _cA, _eM, _eCN, _eRF],
  [0, 0, 0, [() => FilterName, 0], [() => Description, 0], 0, () => AssetFilterConfiguration, 4, 0, 64 | 0, 0]
);
export var GreaterThanExpression = struct(n0, _GTE, 0, [_cN, _v], [0, 0]);
export var GreaterThanOrEqualToExpression = struct(n0, _GTOETE, 0, [_cN, _v], [0, 0]);
export var InExpression = struct(n0, _IE, 0, [_cN, _va], [0, 64 | 0]);
export var IsNotNullExpression = struct(n0, _INNE, 0, [_cN], [0]);
export var IsNullExpression = struct(n0, _INE, 0, [_cN], [0]);
export var LessThanExpression = struct(n0, _LTE, 0, [_cN, _v], [0, 0]);
export var LessThanOrEqualToExpression = struct(n0, _LTOETE, 0, [_cN, _v], [0, 0]);
export var LikeExpression = struct(n0, _LEi, 0, [_cN, _v], [0, 0]);
export var ListAssetFiltersInput = struct(
  n0,
  _LAFI,
  0,
  [_dI, _aIs, _s, _nT, _mRa],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _s,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mRa,
      },
    ],
  ]
);
export var ListAssetFiltersOutput = struct(n0, _LAFO, 0, [_it, _nT], [[() => AssetFilters, 0], 0]);
export var NotEqualToExpression = struct(n0, _NETE, 0, [_cN, _v], [0, 0]);
export var NotInExpression = struct(n0, _NIE, 0, [_cN, _va], [0, 64 | 0]);
export var NotLikeExpression = struct(n0, _NLE, 0, [_cN, _v], [0, 0]);
export var RowFilterConfiguration = struct(n0, _RFCo, 0, [_rF, _sen], [() => RowFilter, 2]);
export var UpdateAssetFilterInput = struct(
  n0,
  _UAFI,
  0,
  [_dI, _aIs, _i, _n, _de, _con],
  [[0, 1], [0, 1], [0, 1], 0, [() => Description, 0], () => AssetFilterConfiguration]
);
export var UpdateAssetFilterOutput = struct(
  n0,
  _UAFO,
  0,
  [_id, _dIo, _aI, _n, _de, _s, _con, _cA, _eM, _eCN, _eRF],
  [0, 0, 0, [() => FilterName, 0], [() => Description, 0], 0, () => AssetFilterConfiguration, 4, 0, 64 | 0, 0]
);
export var AssetFilters = list(n0, _AF, 0, [() => AssetFilterSummary, 0]);
export var ColumnNameList = 64 | 0;

export var RowFilterList = list(n0, _RFL, 0, () => RowFilter);
export var StringList = 64 | 0;

export var AssetFilterConfiguration = uni(
  n0,
  _AFC,
  0,
  [_cCo, _rCo],
  [() => ColumnFilterConfiguration, () => RowFilterConfiguration]
);
export var RowFilter = uni(
  n0,
  _RF,
  0,
  [_exp, _an, _or_],
  [() => RowFilterExpression, () => RowFilterList, () => RowFilterList]
);
export var RowFilterExpression = uni(
  n0,
  _RFE,
  0,
  [_eTq, _nET, _gTre, _lT, _gTOET, _lTOET, _iN, _iNN, _in_, _nI, _li, _nL],
  [
    () => EqualToExpression,
    () => NotEqualToExpression,
    () => GreaterThanExpression,
    () => LessThanExpression,
    () => GreaterThanOrEqualToExpression,
    () => LessThanOrEqualToExpression,
    () => IsNullExpression,
    () => IsNotNullExpression,
    () => InExpression,
    () => NotInExpression,
    () => LikeExpression,
    () => NotLikeExpression,
  ]
);
export var CreateAssetFilter = op(
  n0,
  _CAF,
  {
    [_ht]: ["POST", "/v2/domains/{domainIdentifier}/assets/{assetIdentifier}/filters", 201],
  },
  () => CreateAssetFilterInput,
  () => CreateAssetFilterOutput
);
export var GetAssetFilter = op(
  n0,
  _GAF,
  {
    [_ht]: ["GET", "/v2/domains/{domainIdentifier}/assets/{assetIdentifier}/filters/{identifier}", 200],
  },
  () => GetAssetFilterInput,
  () => GetAssetFilterOutput
);
export var ListAssetFilters = op(
  n0,
  _LAF,
  {
    [_ht]: ["GET", "/v2/domains/{domainIdentifier}/assets/{assetIdentifier}/filters", 200],
  },
  () => ListAssetFiltersInput,
  () => ListAssetFiltersOutput
);
export var UpdateAssetFilter = op(
  n0,
  _UAF,
  {
    [_ht]: ["PATCH", "/v2/domains/{domainIdentifier}/assets/{assetIdentifier}/filters/{identifier}", 200],
  },
  () => UpdateAssetFilterInput,
  () => UpdateAssetFilterOutput
);
