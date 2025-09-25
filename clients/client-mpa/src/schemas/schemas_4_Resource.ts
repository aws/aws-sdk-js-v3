// smithy-typescript generated code
import { error, list, map, op, sim, struct } from "@smithy/core/schema";

import { TooManyTagsException as __TooManyTagsException } from "../models/index";
import {
  _c,
  _e,
  _h,
  _hE,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _M,
  _RA,
  _RN,
  _T,
  _TK,
  _TKa,
  _TKL,
  _TMTE,
  _TR,
  _TRR,
  _TRRa,
  _TV,
  _UR,
  _URR,
  _URRn,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var TagKey = sim(n0, _TK, 0, 8);
export var TagValue = sim(n0, _TV, 0, 8);
export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_RA], [[0, 1]]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_T], [[() => Tags, 0]]);
export var TagResourceRequest = struct(
  n0,
  _TRR,
  0,
  [_RA, _T],
  [
    [0, 1],
    [() => Tags, 0],
  ]
);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var TooManyTagsException = error(
  n0,
  _TMTE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M, _RN],
  [0, 0],

  __TooManyTagsException
);
export var UntagResourceRequest = struct(
  n0,
  _URR,
  0,
  [_RA, _TKa],
  [
    [0, 1],
    [() => TagKeyList, 0],
  ]
);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var TagKeyList = list(n0, _TKL, 8, [() => TagKey, 0]);
export var Tags = map(n0, _T, 8, [() => TagKey, 0], [() => TagValue, 0]);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_h]: ["GET", "/tags/{ResourceArn}", 200],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var TagResource = op(
  n0,
  _TR,
  {
    [_h]: ["PUT", "/tags/{ResourceArn}", 200],
  },
  () => TagResourceRequest,
  () => TagResourceResponse
);
export var UntagResource = op(
  n0,
  _UR,
  {
    [_h]: ["POST", "/tags/{ResourceArn}", 200],
  },
  () => UntagResourceRequest,
  () => UntagResourceResponse
);
