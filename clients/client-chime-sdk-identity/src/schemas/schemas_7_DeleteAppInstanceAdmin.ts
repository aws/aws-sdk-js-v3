// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AIA, _AIAA, _DAIA, _DAIAR, _h, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteAppInstanceAdminRequest = struct(
  n0,
  _DAIAR,
  0,
  [_AIAA, _AIA],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteAppInstanceAdmin = op(
  n0,
  _DAIA,
  {
    [_h]: ["DELETE", "/app-instances/{AppInstanceArn}/admins/{AppInstanceAdminArn}", 204],
  },
  () => DeleteAppInstanceAdminRequest,
  () => Unit
);
