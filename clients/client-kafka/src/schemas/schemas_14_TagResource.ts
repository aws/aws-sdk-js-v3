// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _h, _jN, _RAe, _Ta, _ta, _TRa, _TRR, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var TagResourceRequest = struct(
  n0,
  _TRR,
  0,
  [_RAe, _Ta],
  [
    [0, 1],
    [
      128 | 0,
      {
        [_jN]: _ta,
      },
    ],
  ]
);
export var TagResource = op(
  n0,
  _TRa,
  {
    [_h]: ["POST", "/v1/tags/{ResourceArn}", 204],
  },
  () => TagResourceRequest,
  () => Unit
);
