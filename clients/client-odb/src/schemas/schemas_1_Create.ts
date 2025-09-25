// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ServiceQuotaExceededException as __ServiceQuotaExceededException } from "../models/index";
import {
  _c,
  _e,
  _hE,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _m,
  _qC,
  _rA,
  _rI,
  _rT,
  _SQEE,
  _t,
  _tK,
  _TR,
  _TRR,
  _TRRa,
  _UR,
  _URR,
  _URRn,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_rA], [0]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_t], [128 | 0]);
export var ServiceQuotaExceededException = error(
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_m, _rI, _rT, _qC],
  [0, 0, 0, 0],

  __ServiceQuotaExceededException
);
export var TagResourceRequest = struct(n0, _TRR, 0, [_rA, _t], [0, 128 | 0]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var UntagResourceRequest = struct(n0, _URR, 0, [_rA, _tK], [[0, 1], 64 | 0]);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var TagKeys = 64 | 0;

export var RequestTagMap = 128 | 0;

export var ResponseTagMap = 128 | 0;

export var ListTagsForResource = op(
  n0,
  _LTFR,
  0,
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var TagResource = op(
  n0,
  _TR,
  2,
  () => TagResourceRequest,
  () => TagResourceResponse
);
export var UntagResource = op(
  n0,
  _UR,
  2,
  () => UntagResourceRequest,
  () => UntagResourceResponse
);
