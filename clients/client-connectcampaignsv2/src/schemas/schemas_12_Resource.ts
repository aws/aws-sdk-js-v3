// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _a, _h, _hQ, _LTFR, _LTFRR, _LTFRRi, _t, _tK, _TRa, _TRR, _UR, _URR, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_a], [[0, 1]]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_t], [128 | 0]);
export var TagResourceRequest = struct(n0, _TRR, 0, [_a, _t], [[0, 1], 128 | 0]);
export var UntagResourceRequest = struct(
  n0,
  _URR,
  0,
  [_a, _tK],
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
export var TagKeyList = 64 | 0;

export var TagMap = 128 | 0;

export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_h]: ["GET", "/v2/tags/{arn}", 200],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var TagResource = op(
  n0,
  _TRa,
  {
    [_h]: ["POST", "/v2/tags/{arn}", 200],
  },
  () => TagResourceRequest,
  () => Unit
);
export var UntagResource = op(
  n0,
  _UR,
  {
    [_h]: ["DELETE", "/v2/tags/{arn}", 200],
  },
  () => UntagResourceRequest,
  () => Unit
);
