// smithy-typescript generated code
import { list, map, op, struct } from "@smithy/core/schema";

import {
  _end,
  _h,
  _hQ,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _rA,
  _t,
  _TK,
  _tK,
  _TM,
  _TR,
  _TRR,
  _TRRa,
  _UR,
  _URR,
  _URRn,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_rA], [[0, 1]]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_t], [[() => TagsMap, 0]]);
export var TagResourceRequest = struct(
  n0,
  _TRR,
  0,
  [_rA, _t],
  [
    [0, 1],
    [() => TagsMap, 0],
  ]
);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var UntagResourceRequest = struct(
  n0,
  _URR,
  0,
  [_rA, _tK],
  [
    [0, 1],
    [
      () => TagKeys,
      {
        [_hQ]: _tK,
      },
    ],
  ]
);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var TagKeys = list(n0, _TK, 8, 0);
export var TagsMap = map(n0, _TM, 8, 0, 0);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_h]: ["GET", "/tags/{resourceArn}", 200],
    [_end]: ["api."],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var TagResource = op(
  n0,
  _TR,
  {
    [_h]: ["POST", "/tags/{resourceArn}", 200],
    [_end]: ["api."],
  },
  () => TagResourceRequest,
  () => TagResourceResponse
);
export var UntagResource = op(
  n0,
  _UR,
  {
    [_h]: ["DELETE", "/tags/{resourceArn}", 200],
    [_end]: ["api."],
  },
  () => UntagResourceRequest,
  () => UntagResourceResponse
);
