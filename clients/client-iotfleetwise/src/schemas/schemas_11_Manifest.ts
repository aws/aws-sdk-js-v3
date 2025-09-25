// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _cT,
  _d,
  _GMM,
  _GMMR,
  _GMMRe,
  _hQ,
  _ht,
  _LMM,
  _LMMR,
  _LMMRi,
  _lMT,
  _lRS,
  _MMS,
  _mMS,
  _mR,
  _n,
  _nT,
  _s,
  _sCA,
  _su,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetModelManifestRequest = struct(n0, _GMMR, 0, [_n], [[0, 1]]);
export var GetModelManifestResponse = struct(n0, _GMMRe, 0, [_n, _a, _d, _sCA, _s, _cT, _lMT], [0, 0, 0, 0, 0, 4, 4]);
export var ListModelManifestsRequest = struct(
  n0,
  _LMMR,
  0,
  [_sCA, _nT, _mR, _lRS],
  [
    [
      0,
      {
        [_hQ]: _sCA,
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
    [
      0,
      {
        [_hQ]: _lRS,
      },
    ],
  ]
);
export var ListModelManifestsResponse = struct(n0, _LMMRi, 0, [_su, _nT], [() => modelManifestSummaries, 0]);
export var ModelManifestSummary = struct(n0, _MMS, 0, [_n, _a, _sCA, _d, _s, _cT, _lMT], [0, 0, 0, 0, 0, 4, 4]);
export var modelManifestSummaries = list(n0, _mMS, 0, () => ModelManifestSummary);
export var GetModelManifest = op(
  n0,
  _GMM,
  {
    [_ht]: ["GET", "/model-manifests/{name}", 200],
  },
  () => GetModelManifestRequest,
  () => GetModelManifestResponse
);
export var ListModelManifests = op(
  n0,
  _LMM,
  {
    [_ht]: ["GET", "/model-manifests", 200],
  },
  () => ListModelManifestsRequest,
  () => ListModelManifestsResponse
);
