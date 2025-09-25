// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ar,
  _cBa,
  _cBOI,
  _CRC,
  _CRCR,
  _CRCRr,
  _cSL,
  _cSU,
  _cT,
  _d,
  _end,
  _GRC,
  _GRCR,
  _GRCRe,
  _hQ,
  _ht,
  _i,
  _it,
  _LRC,
  _LRCR,
  _LRCRi,
  _mRa,
  _n,
  _nT,
  _RCL,
  _RCLI,
  _rI,
  _st,
  _sTta,
  _ta,
  _URC,
  _URCR,
  n0,
} from "./schemas_0";
import { Unit } from "./schemas_21_Set";

/* eslint no-var: 0 */

export var CreateRunCacheRequest = struct(
  n0,
  _CRCR,
  0,
  [_cBa, _cSL, _d, _n, _rI, _ta, _cBOI],
  [0, 0, 0, 0, [0, 4], 128 | 0, 0]
);
export var CreateRunCacheResponse = struct(n0, _CRCRr, 0, [_ar, _i, _st, _ta], [0, 0, 0, 128 | 0]);
export var GetRunCacheRequest = struct(n0, _GRCR, 0, [_i], [[0, 1]]);
export var GetRunCacheResponse = struct(
  n0,
  _GRCRe,
  0,
  [_ar, _cBa, _cBOI, _cSU, _cT, _d, _i, _n, _st, _ta],
  [0, 0, 0, 0, 5, 0, 0, 0, 0, 128 | 0]
);
export var ListRunCachesRequest = struct(
  n0,
  _LRCR,
  0,
  [_mRa, _sTta],
  [
    [
      1,
      {
        [_hQ]: _mRa,
      },
    ],
    [
      0,
      {
        [_hQ]: _sTta,
      },
    ],
  ]
);
export var ListRunCachesResponse = struct(n0, _LRCRi, 0, [_it, _nT], [() => RunCacheList, 0]);
export var RunCacheListItem = struct(n0, _RCLI, 0, [_ar, _cBa, _cSU, _cT, _i, _n, _st], [0, 0, 0, 5, 0, 0, 0]);
export var UpdateRunCacheRequest = struct(n0, _URCR, 0, [_cBa, _d, _i, _n], [0, 0, [0, 1], 0]);
export var RunCacheList = list(n0, _RCL, 0, () => RunCacheListItem);
export var CreateRunCache = op(
  n0,
  _CRC,
  {
    [_ht]: ["POST", "/runCache", 201],
    [_end]: ["workflows-"],
  },
  () => CreateRunCacheRequest,
  () => CreateRunCacheResponse
);
export var GetRunCache = op(
  n0,
  _GRC,
  {
    [_ht]: ["GET", "/runCache/{id}", 200],
    [_end]: ["workflows-"],
  },
  () => GetRunCacheRequest,
  () => GetRunCacheResponse
);
export var ListRunCaches = op(
  n0,
  _LRC,
  {
    [_ht]: ["GET", "/runCache", 200],
    [_end]: ["workflows-"],
  },
  () => ListRunCachesRequest,
  () => ListRunCachesResponse
);
export var UpdateRunCache = op(
  n0,
  _URC,
  {
    [_ht]: ["POST", "/runCache/{id}", 202],
    [_end]: ["workflows-"],
  },
  () => UpdateRunCacheRequest,
  () => Unit
);
