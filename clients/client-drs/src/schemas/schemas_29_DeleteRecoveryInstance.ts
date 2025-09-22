// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DRIe, _DRIR, _ht, _rIID, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteRecoveryInstanceRequest = struct(n0, _DRIR, 0, [_rIID], [0]);
export var DeleteRecoveryInstance = op(
  n0,
  _DRIe,
  {
    [_ht]: ["POST", "/DeleteRecoveryInstance", 200],
  },
  () => DeleteRecoveryInstanceRequest,
  () => Unit
);
