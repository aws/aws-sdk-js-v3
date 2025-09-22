// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AEU, _AEUR, _AEURd, _U, _UPI, n0, UsernameType } from "./schemas_0";

/* eslint no-var: 0 */

export var AdminEnableUserRequest = struct(n0, _AEUR, 0, [_UPI, _U], [0, [() => UsernameType, 0]]);
export var AdminEnableUserResponse = struct(n0, _AEURd, 0, [], []);
export var AdminEnableUser = op(
  n0,
  _AEU,
  0,
  () => AdminEnableUserRequest,
  () => AdminEnableUserResponse
);
