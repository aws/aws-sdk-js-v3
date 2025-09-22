// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _h, _hQ, _rA, _tKa, _URn, _URR, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var UntagResourceRequest = struct(
  n0,
  _URR,
  0,
  [_rA, _tKa],
  [
    [0, 1],
    [
      64 | 0,
      {
        [_hQ]: _tKa,
      },
    ],
  ]
);
export var TagKeyList = 64 | 0;

export var UntagResource = op(
  n0,
  _URn,
  {
    [_h]: ["DELETE", "/tags/{resourceArn}", 200],
  },
  () => UntagResourceRequest,
  () => Unit
);
