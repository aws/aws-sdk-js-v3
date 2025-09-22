// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _h, _hQ, _rA, _SL, _tK, _UR, _URI, _URO, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UntagResourceInput = struct(
  n0,
  _URI,
  0,
  [_rA, _tK],
  [
    [0, 1],
    [
      () => StringList,
      {
        [_hQ]: _tK,
      },
    ],
  ]
);
export var UntagResourceOutput = struct(n0, _URO, 0, [], []);
export var StringList = list(n0, _SL, 8, 0);
export var UntagResource = op(
  n0,
  _UR,
  {
    [_h]: ["DELETE", "/tags/{resourceArn}", 200],
  },
  () => UntagResourceInput,
  () => UntagResourceOutput
);
