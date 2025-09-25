// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DU, _DUR, _DURe, _OI, _UIs, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteUserRequest = struct(n0, _DUR, 0, [_OI, _UIs], [0, 0]);
export var DeleteUserResponse = struct(n0, _DURe, 0, [], []);
export var DeleteUser = op(
  n0,
  _DU,
  2,
  () => DeleteUserRequest,
  () => DeleteUserResponse
);
