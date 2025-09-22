// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _h, _hQ, _rAe, _tK, _UR, _URI, _URO, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UntagResourceInput = struct(
  n0,
  _URI,
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
export var UntagResourceOutput = struct(n0, _URO, 0, [], []);
export var TagKeys = 64 | 0;

export var UntagResource = op(
  n0,
  _UR,
  {
    [_h]: ["DELETE", "/tags/{resourceArn}", 200],
  },
  () => UntagResourceInput,
  () => UntagResourceOutput
);
