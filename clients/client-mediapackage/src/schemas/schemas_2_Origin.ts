// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _h, _hQ, _RA, _TK, _tK, _UR, _URR, n0 } from "./schemas_0";
import { Unit } from "./schemas_4_Origin";

/* eslint no-var: 0 */

export var UntagResourceRequest = struct(
  n0,
  _URR,
  0,
  [_RA, _TK],
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
export var __listOf__string = 64 | 0;

export var UntagResource = op(
  n0,
  _UR,
  {
    [_h]: ["DELETE", "/tags/{ResourceArn}", 204],
  },
  () => UntagResourceRequest,
  () => Unit
);
