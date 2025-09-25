// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _h,
  _hQ,
  _k,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _rAe,
  _T,
  _t,
  _tK,
  _TL,
  _TR,
  _TRR,
  _TRRa,
  _UR,
  _URR,
  _URRn,
  _v,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_rAe], [[0, 1]]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_t], [() => TagList]);
export var Tag = struct(n0, _T, 0, [_k, _v], [0, 0]);
export var TagResourceRequest = struct(n0, _TRR, 0, [_rAe, _t], [[0, 1], () => TagList]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var UntagResourceRequest = struct(
  n0,
  _URR,
  0,
  [_rAe, _tK],
  [
    [0, 1],
    [
      64 | 0,
      {
        [_hQ]: _tK,
      },
    ],
  ]
);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var TagKeyList = 64 | 0;

export var TagList = list(n0, _TL, 0, () => Tag);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_h]: ["GET", "/v1/tags/{resourceArn}", 200],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var TagResource = op(
  n0,
  _TR,
  {
    [_h]: ["POST", "/v1/tags/{resourceArn}", 200],
  },
  () => TagResourceRequest,
  () => TagResourceResponse
);
export var UntagResource = op(
  n0,
  _UR,
  {
    [_h]: ["DELETE", "/v1/tags/{resourceArn}", 200],
  },
  () => UntagResourceRequest,
  () => UntagResourceResponse
);
