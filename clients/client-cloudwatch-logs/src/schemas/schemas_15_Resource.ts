// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { TooManyTagsException as __TooManyTagsException } from "../models/index";
import {
  _c,
  _e,
  _hE,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _m,
  _rA,
  _rN,
  _ta,
  _tK,
  _TMTE,
  _TR,
  _TRR,
  _UR,
  _URR,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_rA], [0]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_ta], [128 | 0]);
export var TagResourceRequest = struct(n0, _TRR, 0, [_rA, _ta], [0, 128 | 0]);
export var TooManyTagsException = error(
  n0,
  _TMTE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m, _rN],
  [0, 0],

  __TooManyTagsException
);
export var UntagResourceRequest = struct(n0, _URR, 0, [_rA, _tK], [0, 64 | 0]);
export var TagKeyList = 64 | 0;

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
  0,
  () => TagResourceRequest,
  () => Unit
);
export var UntagResource = op(
  n0,
  _UR,
  0,
  () => UntagResourceRequest,
  () => Unit
);
