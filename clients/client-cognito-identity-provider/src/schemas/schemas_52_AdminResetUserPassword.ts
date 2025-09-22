// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ARUP, _ARUPR, _ARUPRd, _CM, _U, _UPI, n0, UsernameType } from "./schemas_0";

/* eslint no-var: 0 */

export var AdminResetUserPasswordRequest = struct(
  n0,
  _ARUPR,
  0,
  [_UPI, _U, _CM],
  [0, [() => UsernameType, 0], 128 | 0]
);
export var AdminResetUserPasswordResponse = struct(n0, _ARUPRd, 0, [], []);
export var AdminResetUserPassword = op(
  n0,
  _ARUP,
  0,
  () => AdminResetUserPasswordRequest,
  () => AdminResetUserPasswordResponse
);
