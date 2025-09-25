// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _h, _hQ, _LTFR, _LTFRR, _LTFRRi, _rARN, _ta, _tK, _UR, _URR, _URRn, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_rARN], [[0, 1]]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_ta], [128 | 0]);
export var UntagResourceRequest = struct(
  n0,
  _URR,
  0,
  [_rARN, _tK],
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
export var TagKeys = 64 | 0;

export var Tags = 128 | 0;

export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_h]: ["GET", "/tags/{resourceARN}", 200],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var UntagResource = op(
  n0,
  _UR,
  {
    [_h]: ["DELETE", "/tags/{resourceARN}", 200],
  },
  () => UntagResourceRequest,
  () => UntagResourceResponse
);
