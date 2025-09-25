// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DMRel, _DMRR, _hM, _ht, _rAI, _rI, _sC, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteMethodResponseRequest = struct(
  n0,
  _DMRR,
  0,
  [_rAI, _rI, _hM, _sC],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var DeleteMethodResponse = op(
  n0,
  _DMRel,
  {
    [_ht]: ["DELETE", "/restapis/{restApiId}/resources/{resourceId}/methods/{httpMethod}/responses/{statusCode}", 204],
  },
  () => DeleteMethodResponseRequest,
  () => Unit
);
