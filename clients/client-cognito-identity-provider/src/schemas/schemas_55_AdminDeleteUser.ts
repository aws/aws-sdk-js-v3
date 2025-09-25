// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ADU, _ADUR, _U, _UPI, n0, Unit, UsernameType } from "./schemas_0";

/* eslint no-var: 0 */

export var AdminDeleteUserRequest = struct(n0, _ADUR, 0, [_UPI, _U], [0, [() => UsernameType, 0]]);
export var AdminDeleteUser = op(
  n0,
  _ADU,
  0,
  () => AdminDeleteUserRequest,
  () => Unit
);
