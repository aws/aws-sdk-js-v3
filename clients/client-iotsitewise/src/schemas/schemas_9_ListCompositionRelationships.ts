// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aMCMI,
  _aMCMT,
  _aMI,
  _CRS,
  _cRS,
  _CRSo,
  _end,
  _hQ,
  _ht,
  _LCR,
  _LCRR,
  _LCRRi,
  _mR,
  _nT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CompositionRelationshipSummary = struct(n0, _CRS, 0, [_aMI, _aMCMI, _aMCMT], [0, 0, 0]);
export var ListCompositionRelationshipsRequest = struct(
  n0,
  _LCRR,
  0,
  [_aMI, _nT, _mR],
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
  ]
);
export var ListCompositionRelationshipsResponse = struct(
  n0,
  _LCRRi,
  0,
  [_cRS, _nT],
  [() => CompositionRelationshipSummaries, 0]
);
export var CompositionRelationshipSummaries = list(n0, _CRSo, 0, () => CompositionRelationshipSummary);
export var ListCompositionRelationships = op(
  n0,
  _LCR,
  {
    [_ht]: ["GET", "/asset-models/{assetModelId}/composition-relationships", 200],
    [_end]: ["api."],
  },
  () => ListCompositionRelationshipsRequest,
  () => ListCompositionRelationshipsResponse
);
