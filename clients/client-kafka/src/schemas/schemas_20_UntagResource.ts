// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _h, _hQ, _RAe, _TK, _tK, _UR, _URR, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var UntagResourceRequest = struct(
  n0,
  _URR,
  0,
  [_RAe, _TK],
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
export var UntagResource = op(
  n0,
  _UR,
  {
    [_h]: ["DELETE", "/v1/tags/{ResourceArn}", 204],
  },
  () => UntagResourceRequest,
  () => Unit
);
