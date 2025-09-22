// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DUPK, _DUPKR, _ht, _kI, _uPI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteUsagePlanKeyRequest = struct(
  n0,
  _DUPKR,
  0,
  [_uPI, _kI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteUsagePlanKey = op(
  n0,
  _DUPK,
  {
    [_ht]: ["DELETE", "/usageplans/{usagePlanId}/keys/{keyId}", 202],
  },
  () => DeleteUsagePlanKeyRequest,
  () => Unit
);
