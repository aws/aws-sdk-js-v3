// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _CI, _LU, _LUR, _LURi, _MR, _MU, _NT, _Si, _UI, _UL, _UML, _UMs, _US, _Us, _Use, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListUsersRequest = struct(n0, _LUR, 0, [_CI, _MR, _NT], [0, 1, 0]);
export var ListUsersResponse = struct(n0, _LURi, 0, [_Us, _NT], [() => UserList, 0]);
export var MatchedUser = struct(n0, _MU, 0, [_UI, _US], [0, 0]);
export var User = struct(n0, _Use, 0, [_UI, _US], [0, 0]);
export var UserMatch = struct(n0, _UMs, 0, [_Si, _Use], [1, () => MatchedUser]);
export var UserList = list(n0, _UL, 0, () => User);
export var UserMatchList = list(n0, _UML, 0, () => UserMatch);
export var ListUsers = op(
  n0,
  _LU,
  0,
  () => ListUsersRequest,
  () => ListUsersResponse
);
