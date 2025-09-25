// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _hQ, _rAes, _tK, _UR, _URI, _URO, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UntagResourceInput = struct(
  n0,
  _URI,
  0,
  [_rAes, _tK],
  [
    [
      0,
      {
        [_hQ]: _rAes,
      },
    ],
    64 | 0,
  ]
);
export var UntagResourceOutput = struct(n0, _URO, 0, [], []);
export var TagKeyList = 64 | 0;

export var UntagResource = op(
  n0,
  _UR,
  2,
  () => UntagResourceInput,
  () => UntagResourceOutput
);
