// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DUP, _DUPR, _ht, _uPI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteUsagePlanRequest = struct(n0, _DUPR, 0, [_uPI], [[0, 1]]);
export var DeleteUsagePlan = op(
  n0,
  _DUP,
  {
    [_ht]: ["DELETE", "/usageplans/{usagePlanId}", 202],
  },
  () => DeleteUsagePlanRequest,
  () => Unit
);
