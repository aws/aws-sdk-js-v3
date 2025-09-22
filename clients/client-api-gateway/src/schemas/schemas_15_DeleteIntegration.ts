// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DI, _DIR, _hM, _ht, _rAI, _rI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteIntegrationRequest = struct(
  n0,
  _DIR,
  0,
  [_rAI, _rI, _hM],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var DeleteIntegration = op(
  n0,
  _DI,
  {
    [_ht]: ["DELETE", "/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}/integration", 204],
  },
  () => DeleteIntegrationRequest,
  () => Unit
);
