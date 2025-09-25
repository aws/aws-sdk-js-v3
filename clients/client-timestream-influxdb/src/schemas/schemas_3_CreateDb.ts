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
  _rA,
  _SQEE,
  _t,
  _tK,
  _TR,
  _TRR,
  _UR,
  _URR,
  n0,
  Unit,
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
  [_m],
  [0],

  __ServiceQuotaExceededException
);
export var TagResourceRequest = struct(n0, _TRR, 0, [_rA, _t], [0, 128 | 0]);
export var UntagResourceRequest = struct(n0, _URR, 0, [_rA, _tK], [[0, 1], 64 | 0]);
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
  () => Unit
);
export var UntagResource = op(
  n0,
  _UR,
  2,
  () => UntagResourceRequest,
  () => Unit
);
