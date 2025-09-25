// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AMCMP,
  _AMCMPS,
  _AMCMS,
  _aMCMS,
  _AMCMSs,
  _aMI,
  _aMV,
  _d,
  _eI,
  _end,
  _hQ,
  _ht,
  _i,
  _LAMCM,
  _LAMCMR,
  _LAMCMRi,
  _mR,
  _n,
  _nT,
  _pa,
  _ty,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AssetModelCompositeModelPathSegment = struct(n0, _AMCMPS, 0, [_i, _n], [0, 0]);
export var AssetModelCompositeModelSummary = struct(
  n0,
  _AMCMS,
  0,
  [_i, _eI, _n, _ty, _d, _pa],
  [0, 0, 0, 0, 0, () => AssetModelCompositeModelPath]
);
export var ListAssetModelCompositeModelsRequest = struct(
  n0,
  _LAMCMR,
  0,
  [_aMI, _nT, _mR, _aMV],
  [
    [0, 1],
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
        [_hQ]: _aMV,
      },
    ],
  ]
);
export var ListAssetModelCompositeModelsResponse = struct(
  n0,
  _LAMCMRi,
  0,
  [_aMCMS, _nT],
  [() => AssetModelCompositeModelSummaries, 0]
);
export var AssetModelCompositeModelPath = list(n0, _AMCMP, 0, () => AssetModelCompositeModelPathSegment);
export var AssetModelCompositeModelSummaries = list(n0, _AMCMSs, 0, () => AssetModelCompositeModelSummary);
export var ListAssetModelCompositeModels = op(
  n0,
  _LAMCM,
  {
    [_ht]: ["GET", "/asset-models/{assetModelId}/composite-models", 200],
    [_end]: ["api."],
  },
  () => ListAssetModelCompositeModelsRequest,
  () => ListAssetModelCompositeModelsResponse
);
