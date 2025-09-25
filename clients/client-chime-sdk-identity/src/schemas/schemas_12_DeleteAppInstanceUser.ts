// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AIUA, _DAIU, _DAIUR, _h, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteAppInstanceUserRequest = struct(n0, _DAIUR, 0, [_AIUA], [[0, 1]]);
export var DeleteAppInstanceUser = op(
  n0,
  _DAIU,
  {
    [_h]: ["DELETE", "/app-instance-users/{AppInstanceUserArn}", 204],
  },
  () => DeleteAppInstanceUserRequest,
  () => Unit
);
