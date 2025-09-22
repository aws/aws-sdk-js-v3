// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AIA, _DAI, _DAIR, _h, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteAppInstanceRequest = struct(n0, _DAIR, 0, [_AIA], [[0, 1]]);
export var DeleteAppInstance = op(
  n0,
  _DAI,
  {
    [_h]: ["DELETE", "/app-instances/{AppInstanceArn}", 204],
  },
  () => DeleteAppInstanceRequest,
  () => Unit
);
