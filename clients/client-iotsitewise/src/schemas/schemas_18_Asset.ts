// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AAS,
  _AASs,
  _aDs,
  _aEI,
  _AH,
  _AHs,
  _aIs,
  _aMI,
  _aNs,
  _ar,
  _aS,
  _ASs,
  _aSs,
  _ASss,
  _ASsse,
  _cD,
  _cT,
  _d,
  _DA,
  _DAR,
  _DARe,
  _e,
  _eI,
  _end,
  _fil,
  _h,
  _hIi,
  _hQ,
  _ht,
  _i,
  _iT,
  _LAA,
  _LAAR,
  _LAARi,
  _LAi,
  _LARis,
  _LARist,
  _lUD,
  _mR,
  _n,
  _nT,
  _st,
  _sta,
  _tD,
  _UA,
  _UAR,
  _UARp,
  ErrorDetails,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AssetHierarchy = struct(n0, _AH, 0, [_i, _eI, _n], [0, 0, 0]);
export var AssetStatus = struct(n0, _ASs, 0, [_st, _e], [0, () => ErrorDetails]);
export var AssetSummary = struct(
  n0,
  _ASss,
  0,
  [_i, _eI, _ar, _n, _aMI, _cD, _lUD, _sta, _h, _d],
  [0, 0, 0, 0, 0, 4, 4, () => AssetStatus, () => AssetHierarchies, 0]
);
export var AssociatedAssetsSummary = struct(
  n0,
  _AAS,
  0,
  [_i, _eI, _ar, _n, _aMI, _cD, _lUD, _sta, _h, _d],
  [0, 0, 0, 0, 0, 4, 4, () => AssetStatus, () => AssetHierarchies, 0]
);
export var DeleteAssetRequest = struct(
  n0,
  _DAR,
  0,
  [_aIs, _cT],
  [
    [0, 1],
    [
      0,
      {
        [_iT]: 1,
        [_hQ]: _cT,
      },
    ],
  ]
);
export var DeleteAssetResponse = struct(n0, _DARe, 0, [_aS], [() => AssetStatus]);
export var ListAssetsRequest = struct(
  n0,
  _LARis,
  0,
  [_nT, _mR, _aMI, _fil],
  [
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _aMI,
      },
    ],
    [
      0,
      {
        [_hQ]: _fil,
      },
    ],
  ]
);
export var ListAssetsResponse = struct(n0, _LARist, 0, [_aSs, _nT], [() => AssetSummaries, 0]);
export var ListAssociatedAssetsRequest = struct(
  n0,
  _LAAR,
  0,
  [_aIs, _hIi, _tD, _nT, _mR],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _hIi,
      },
    ],
    [
      0,
      {
        [_hQ]: _tD,
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
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListAssociatedAssetsResponse = struct(n0, _LAARi, 0, [_aSs, _nT], [() => AssociatedAssetsSummaries, 0]);
export var UpdateAssetRequest = struct(n0, _UAR, 0, [_aIs, _aEI, _aNs, _cT, _aDs], [[0, 1], 0, 0, [0, 4], 0]);
export var UpdateAssetResponse = struct(n0, _UARp, 0, [_aS], [() => AssetStatus]);
export var AssetHierarchies = list(n0, _AHs, 0, () => AssetHierarchy);
export var AssetSummaries = list(n0, _ASsse, 0, () => AssetSummary);
export var AssociatedAssetsSummaries = list(n0, _AASs, 0, () => AssociatedAssetsSummary);
export var DeleteAsset = op(
  n0,
  _DA,
  {
    [_ht]: ["DELETE", "/assets/{assetId}", 202],
    [_end]: ["api."],
  },
  () => DeleteAssetRequest,
  () => DeleteAssetResponse
);
export var ListAssets = op(
  n0,
  _LAi,
  {
    [_ht]: ["GET", "/assets", 200],
    [_end]: ["api."],
  },
  () => ListAssetsRequest,
  () => ListAssetsResponse
);
export var ListAssociatedAssets = op(
  n0,
  _LAA,
  {
    [_ht]: ["GET", "/assets/{assetId}/hierarchies", 200],
    [_end]: ["api."],
  },
  () => ListAssociatedAssetsRequest,
  () => ListAssociatedAssetsResponse
);
export var UpdateAsset = op(
  n0,
  _UA,
  {
    [_ht]: ["PUT", "/assets/{assetId}", 202],
    [_end]: ["api."],
  },
  () => UpdateAssetRequest,
  () => UpdateAssetResponse
);
