// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DU, _DUR, _h, _II, _UI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteUserRequest = struct(
  n0,
  _DUR,
  0,
  [_II, _UI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteUser = op(
  n0,
  _DU,
  {
    [_h]: ["DELETE", "/users/{InstanceId}/{UserId}", 200],
  },
  () => DeleteUserRequest,
  () => Unit
);
