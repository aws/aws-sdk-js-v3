// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DI, _DUP, _DUPR, _UPN, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteUserProfileRequest = struct(n0, _DUPR, 0, [_DI, _UPN], [0, 0]);
export var DeleteUserProfile = op(
  n0,
  _DUP,
  0,
  () => DeleteUserProfileRequest,
  () => Unit
);
