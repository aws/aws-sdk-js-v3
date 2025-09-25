// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _h, _RAes, _t, _TR, _TRR, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var TagResourceRequest = struct(n0, _TRR, 0, [_RAes, _t], [[0, 1], 128 | 0]);
export var TagResource = op(
  n0,
  _TR,
  {
    [_h]: ["POST", "/tags/{ResourceArn}", 204],
  },
  () => TagResourceRequest,
  () => Unit
);
