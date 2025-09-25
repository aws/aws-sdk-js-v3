// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AUGSO, _AUGSOR, _AUGSORd, _U, _UPI, n0, UsernameType } from "./schemas_0";

/* eslint no-var: 0 */

export var AdminUserGlobalSignOutRequest = struct(n0, _AUGSOR, 0, [_UPI, _U], [0, [() => UsernameType, 0]]);
export var AdminUserGlobalSignOutResponse = struct(n0, _AUGSORd, 0, [], []);
export var AdminUserGlobalSignOut = op(
  n0,
  _AUGSO,
  0,
  () => AdminUserGlobalSignOutRequest,
  () => AdminUserGlobalSignOutResponse
);
