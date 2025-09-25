// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _II, _IR, _UMIR, _UMIRR, _UMIRRp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateManagedInstanceRoleRequest = struct(n0, _UMIRR, 0, [_II, _IR], [0, 0]);
export var UpdateManagedInstanceRoleResult = struct(n0, _UMIRRp, 0, [], []);
export var UpdateManagedInstanceRole = op(
  n0,
  _UMIR,
  0,
  () => UpdateManagedInstanceRoleRequest,
  () => UpdateManagedInstanceRoleResult
);
