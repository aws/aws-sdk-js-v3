// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DR, _DRR, _ht, _rAI, _rI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteResourceRequest = struct(
  n0,
  _DRR,
  0,
  [_rAI, _rI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteResource = op(
  n0,
  _DR,
  {
    [_ht]: ["DELETE", "/restapis/{restApiId}/resources/{resourceId}", 202],
  },
  () => DeleteResourceRequest,
  () => Unit
);
