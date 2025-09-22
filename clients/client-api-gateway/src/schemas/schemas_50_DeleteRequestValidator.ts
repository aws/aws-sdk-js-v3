// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DRV, _DRVR, _ht, _rAI, _rVI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteRequestValidatorRequest = struct(
  n0,
  _DRVR,
  0,
  [_rAI, _rVI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteRequestValidator = op(
  n0,
  _DRV,
  {
    [_ht]: ["DELETE", "/restapis/{restApiId}/requestvalidators/{requestValidatorId}", 202],
  },
  () => DeleteRequestValidatorRequest,
  () => Unit
);
