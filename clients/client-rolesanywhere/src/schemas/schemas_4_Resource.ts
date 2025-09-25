// smithy-typescript generated code
import { error, list, op, sim, struct } from "@smithy/core/schema";

import { TooManyTagsException as __TooManyTagsException } from "../models/index";
import {
  _c,
  _e,
  _h,
  _hE,
  _hQ,
  _k,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _m,
  _rAe,
  _T,
  _t,
  _TK,
  _tK,
  _TKL,
  _TL,
  _TMTE,
  _TR,
  _TRR,
  _TRRa,
  _TV,
  _UR,
  _URR,
  _URRn,
  _v,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var TagKey = sim(n0, _TK, 0, 8);
export var TagValue = sim(n0, _TV, 0, 8);
export var ListTagsForResourceRequest = struct(
  n0,
  _LTFRR,
  0,
  [_rAe],
  [
    [
      0,
      {
        [_hQ]: _rAe,
      },
    ],
  ]
);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_t], [[() => TagList, 0]]);
export var Tag = struct(
  n0,
  _T,
  0,
  [_k, _v],
  [
    [() => TagKey, 0],
    [() => TagValue, 0],
  ]
);
export var TagResourceRequest = struct(n0, _TRR, 0, [_rAe, _t], [0, [() => TagList, 0]]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var TooManyTagsException = error(
  n0,
  _TMTE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __TooManyTagsException
);
export var UntagResourceRequest = struct(n0, _URR, 0, [_rAe, _tK], [0, [() => TagKeyList, 0]]);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var TagKeyList = list(n0, _TKL, 0, [() => TagKey, 0]);
export var TagList = list(n0, _TL, 0, [() => Tag, 0]);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_h]: ["GET", "/ListTagsForResource", 200],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var TagResource = op(
  n0,
  _TR,
  {
    [_h]: ["POST", "/TagResource", 201],
  },
  () => TagResourceRequest,
  () => TagResourceResponse
);
export var UntagResource = op(
  n0,
  _UR,
  {
    [_h]: ["POST", "/UntagResource", 200],
  },
  () => UntagResourceRequest,
  () => UntagResourceResponse
);
