// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DRA, _DRAR, _ht, _rAI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteRestApiRequest = struct(n0, _DRAR, 0, [_rAI], [[0, 1]]);
export var DeleteRestApi = op(
  n0,
  _DRA,
  {
    [_ht]: ["DELETE", "/restapis/{restApiId}", 202],
  },
  () => DeleteRestApiRequest,
  () => Unit
);
