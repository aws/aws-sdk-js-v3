// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DRIi, _DRIRi, _ht, _rIID, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DisconnectRecoveryInstanceRequest = struct(n0, _DRIRi, 0, [_rIID], [0]);
export var DisconnectRecoveryInstance = op(
  n0,
  _DRIi,
  {
    [_ht]: ["POST", "/DisconnectRecoveryInstance", 200],
  },
  () => DisconnectRecoveryInstanceRequest,
  () => Unit
);
