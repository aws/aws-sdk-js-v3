// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ADUd, _ADURd, _ADURdm, _U, _UPI, n0, UsernameType } from "./schemas_0";

/* eslint no-var: 0 */

export var AdminDisableUserRequest = struct(n0, _ADURd, 0, [_UPI, _U], [0, [() => UsernameType, 0]]);
export var AdminDisableUserResponse = struct(n0, _ADURdm, 0, [], []);
export var AdminDisableUser = op(
  n0,
  _ADUd,
  0,
  () => AdminDisableUserRequest,
  () => AdminDisableUserResponse
);
