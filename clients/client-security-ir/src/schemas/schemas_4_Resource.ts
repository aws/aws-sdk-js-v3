// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _h, _hQ, _LTFR, _LTFRI, _LTFRO, _rA, _ta, _tK, _TR, _TRI, _TRO, _UR, _URI, _URO, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListTagsForResourceInput = struct(n0, _LTFRI, 0, [_rA], [[0, 1]]);
export var ListTagsForResourceOutput = struct(n0, _LTFRO, 0, [_ta], [128 | 0]);
export var TagResourceInput = struct(n0, _TRI, 0, [_rA, _ta], [[0, 1], 128 | 0]);
export var TagResourceOutput = struct(n0, _TRO, 0, [], []);
export var UntagResourceInput = struct(
  n0,
  _URI,
  0,
  [_rA, _tK],
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
export var UntagResourceOutput = struct(n0, _URO, 0, [], []);
export var TagKeys = 64 | 0;

export var TagMap = 128 | 0;

export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_h]: ["GET", "/v1/tags/{resourceArn}", 200],
  },
  () => ListTagsForResourceInput,
  () => ListTagsForResourceOutput
);
export var TagResource = op(
  n0,
  _TR,
  {
    [_h]: ["POST", "/v1/tags/{resourceArn}", 204],
  },
  () => TagResourceInput,
  () => TagResourceOutput
);
export var UntagResource = op(
  n0,
  _UR,
  {
    [_h]: ["DELETE", "/v1/tags/{resourceArn}", 200],
  },
  () => UntagResourceInput,
  () => UntagResourceOutput
);
