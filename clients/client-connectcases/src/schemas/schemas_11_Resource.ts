// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ar, _h, _hQ, _tK, _UR, _URR, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var UntagResourceRequest = struct(
  n0,
  _URR,
  0,
  [_ar, _tK],
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

export var UntagResource = op(
  n0,
  _UR,
  {
    [_h]: ["DELETE", "/tags/{arn}", 200],
  },
  () => UntagResourceRequest,
  () => Unit
);
