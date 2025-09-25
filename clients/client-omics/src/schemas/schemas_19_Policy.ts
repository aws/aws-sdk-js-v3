// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _aLL,
  _ar,
  _cT,
  _d,
  _end,
  _eTAF,
  _fL,
  _GSS,
  _GSSR,
  _GSSRe,
  _ht,
  _i,
  _n,
  _pSLT,
  _sAc,
  _sAPA,
  _sC,
  _sM,
  _SSSA,
  _st,
  _sU,
  _uT,
  n0,
  SseConfig,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetSequenceStoreRequest = struct(n0, _GSSR, 0, [_i], [[0, 1]]);
export var GetSequenceStoreResponse = struct(
  n0,
  _GSSRe,
  0,
  [_i, _ar, _n, _d, _sC, _cT, _fL, _sAc, _eTAF, _st, _sM, _pSLT, _uT],
  [0, 0, 0, 0, () => SseConfig, 5, 0, () => SequenceStoreS3Access, 0, 0, 0, 64 | 0, 5]
);
export var SequenceStoreS3Access = struct(n0, _SSSA, 0, [_sU, _sAPA, _aLL], [0, 0, 0]);
export var PropagatedSetLevelTags = 64 | 0;

export var GetSequenceStore = op(
  n0,
  _GSS,
  {
    [_ht]: ["GET", "/sequencestore/{id}", 200],
    [_end]: ["control-storage-"],
  },
  () => GetSequenceStoreRequest,
  () => GetSequenceStoreResponse
);
