// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aIDc, _CSLCS, _CSLCSR, _CSLCSSSL, _ht, _lC, _s, _sSIDo, n0 } from "./schemas_0";
import { SourceServer } from "./schemas_5_Replication";

/* eslint no-var: 0 */

export var ChangeServerLifeCycleStateRequest = struct(
  n0,
  _CSLCSR,
  0,
  [_sSIDo, _lC, _aIDc],
  [0, () => ChangeServerLifeCycleStateSourceServerLifecycle, 0]
);
export var ChangeServerLifeCycleStateSourceServerLifecycle = struct(n0, _CSLCSSSL, 0, [_s], [0]);
export var ChangeServerLifeCycleState = op(
  n0,
  _CSLCS,
  {
    [_ht]: ["POST", "/ChangeServerLifeCycleState", 200],
  },
  () => ChangeServerLifeCycleStateRequest,
  () => SourceServer
);
