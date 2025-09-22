// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _cT,
  _d,
  _DMS,
  _dMS,
  _GDM,
  _GDMR,
  _GDMRe,
  _hQ,
  _ht,
  _LDM,
  _LDMR,
  _LDMRi,
  _lMT,
  _lRS,
  _m,
  _mMA,
  _mR,
  _n,
  _nT,
  _s,
  _su,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DecoderManifestSummary = struct(
  n0,
  _DMS,
  0,
  [_n, _a, _mMA, _d, _s, _cT, _lMT, _m],
  [0, 0, 0, 0, 0, 4, 4, 0]
);
export var GetDecoderManifestRequest = struct(n0, _GDMR, 0, [_n], [[0, 1]]);
export var GetDecoderManifestResponse = struct(
  n0,
  _GDMRe,
  0,
  [_n, _a, _d, _mMA, _s, _cT, _lMT, _m],
  [0, 0, 0, 0, 0, 4, 4, 0]
);
export var ListDecoderManifestsRequest = struct(
  n0,
  _LDMR,
  0,
  [_mMA, _nT, _mR, _lRS],
  [
    [
      0,
      {
        [_hQ]: _mMA,
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
export var ListDecoderManifestsResponse = struct(n0, _LDMRi, 0, [_su, _nT], [() => decoderManifestSummaries, 0]);
export var decoderManifestSummaries = list(n0, _dMS, 0, () => DecoderManifestSummary);
export var GetDecoderManifest = op(
  n0,
  _GDM,
  {
    [_ht]: ["GET", "/decoder-manifests/{name}", 200],
  },
  () => GetDecoderManifestRequest,
  () => GetDecoderManifestResponse
);
export var ListDecoderManifests = op(
  n0,
  _LDM,
  {
    [_ht]: ["GET", "/decoder-manifests", 200],
  },
  () => ListDecoderManifestsRequest,
  () => ListDecoderManifestsResponse
);
