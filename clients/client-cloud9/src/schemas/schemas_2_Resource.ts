// smithy-typescript generated code
import { error, list, op, sim, struct } from "@smithy/core/schema";

import { ConcurrentAccessException as __ConcurrentAccessException } from "../models/index";
import {
  _c,
  _CAE,
  _cN,
  _co,
  _e,
  _K,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _m,
  _RARN,
  _T,
  _Ta,
  _TK,
  _TKa,
  _TKL,
  _TL,
  _TR,
  _TRR,
  _TRRa,
  _TV,
  _UR,
  _URR,
  _URRn,
  _V,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var TagKey = sim(n0, _TK, 0, 8);
export var TagValue = sim(n0, _TV, 0, 8);
export var ConcurrentAccessException = error(
  n0,
  _CAE,
  {
    [_e]: _c,
  },
  [_m, _cN, _co],
  [0, 0, 1],

  __ConcurrentAccessException
);
export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_RARN], [0]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_T], [[() => TagList, 0]]);
export var Tag = struct(
  n0,
  _Ta,
  8,
  [_K, _V],
  [
    [() => TagKey, 0],
    [() => TagValue, 0],
  ]
);
export var TagResourceRequest = struct(n0, _TRR, 0, [_RARN, _T], [0, [() => TagList, 0]]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var UntagResourceRequest = struct(n0, _URR, 0, [_RARN, _TKa], [0, [() => TagKeyList, 0]]);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var TagKeyList = list(n0, _TKL, 8, [() => TagKey, 0]);
export var TagList = list(n0, _TL, 8, [() => Tag, 0]);
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
  () => TagResourceResponse
);
export var UntagResource = op(
  n0,
  _UR,
  0,
  () => UntagResourceRequest,
  () => UntagResourceResponse
);
