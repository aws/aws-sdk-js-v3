// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DM, _DMR, _hM, _ht, _rAI, _rI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteMethodRequest = struct(
  n0,
  _DMR,
  0,
  [_rAI, _rI, _hM],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var DeleteMethod = op(
  n0,
  _DM,
  {
    [_ht]: ["DELETE", "/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}", 204],
  },
  () => DeleteMethodRequest,
  () => Unit
);
