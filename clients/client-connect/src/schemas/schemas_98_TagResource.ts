// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _h, _rA, _t, _TRa, _TRRa, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var TagResourceRequest = struct(n0, _TRRa, 0, [_rA, _t], [[0, 1], 128 | 0]);
export var TagResource = op(
  n0,
  _TRa,
  {
    [_h]: ["POST", "/tags/{resourceArn}", 200],
  },
  () => TagResourceRequest,
  () => Unit
);
