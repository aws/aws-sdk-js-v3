// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _h, _hQ, _LTFR, _LTFRI, _LTFRO, _Ta, _TK, _tK, _TR, _TRI, _TRO, _UR, _URI, _URO, _WA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListTagsForResourceInput = struct(n0, _LTFRI, 0, [_WA], [[0, 1]]);
export var ListTagsForResourceOutput = struct(n0, _LTFRO, 0, [_Ta], [128 | 0]);
export var TagResourceInput = struct(n0, _TRI, 0, [_WA, _Ta], [[0, 1], 128 | 0]);
export var TagResourceOutput = struct(n0, _TRO, 0, [], []);
export var UntagResourceInput = struct(
  n0,
  _URI,
  0,
  [_WA, _TK],
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
export var TagKeyList = 64 | 0;

export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_h]: ["GET", "/tags/{WorkloadArn}", 200],
  },
  () => ListTagsForResourceInput,
  () => ListTagsForResourceOutput
);
export var TagResource = op(
  n0,
  _TR,
  {
    [_h]: ["POST", "/tags/{WorkloadArn}", 200],
  },
  () => TagResourceInput,
  () => TagResourceOutput
);
export var UntagResource = op(
  n0,
  _UR,
  {
    [_h]: ["DELETE", "/tags/{WorkloadArn}", 200],
  },
  () => UntagResourceInput,
  () => UntagResourceOutput
);
