// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _h,
  _hQ,
  _K,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _RARN,
  _T,
  _Ta,
  _TK,
  _TL,
  _TR,
  _TRR,
  _UR,
  _URR,
  _V,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_RARN], [[0, 1]]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_T], [() => TagList]);
export var Tag = struct(n0, _Ta, 0, [_K, _V], [0, 0]);
export var TagResourceRequest = struct(n0, _TRR, 0, [_RARN, _T], [[0, 1], () => TagList]);
export var UntagResourceRequest = struct(
  n0,
  _URR,
  0,
  [_RARN, _TK],
  [
    [0, 1],
    [
      64 | 0,
      {
        [_hQ]: _TK,
      },
    ],
  ]
);
export var TagKeyList = 64 | 0;

export var TagList = list(n0, _TL, 0, () => Tag);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_h]: ["GET", "/tags/{ResourceARN}", 200],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var TagResource = op(
  n0,
  _TR,
  {
    [_h]: ["POST", "/tags/{ResourceARN}", 200],
  },
  () => TagResourceRequest,
  () => Unit
);
export var UntagResource = op(
  n0,
  _UR,
  {
    [_h]: ["DELETE", "/tags/{ResourceARN}", 200],
  },
  () => UntagResourceRequest,
  () => Unit
);
