// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AHI,
  _aIs,
  _ARS,
  _aRS,
  _ARSs,
  _cAI,
  _end,
  _hI,
  _hQ,
  _ht,
  _LARists,
  _LARR,
  _LARRi,
  _mR,
  _nT,
  _pAI,
  _rTe,
  _tT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AssetHierarchyInfo = struct(n0, _AHI, 0, [_pAI, _cAI], [0, 0]);
export var AssetRelationshipSummary = struct(n0, _ARS, 0, [_hI, _rTe], [() => AssetHierarchyInfo, 0]);
export var ListAssetRelationshipsRequest = struct(
  n0,
  _LARR,
  0,
  [_aIs, _tT, _nT, _mR],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _tT,
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
export var ListAssetRelationshipsResponse = struct(n0, _LARRi, 0, [_aRS, _nT], [() => AssetRelationshipSummaries, 0]);
export var AssetRelationshipSummaries = list(n0, _ARSs, 0, () => AssetRelationshipSummary);
export var ListAssetRelationships = op(
  n0,
  _LARists,
  {
    [_ht]: ["GET", "/assets/{assetId}/assetRelationships", 200],
    [_end]: ["api."],
  },
  () => ListAssetRelationshipsRequest,
  () => ListAssetRelationshipsResponse
);
