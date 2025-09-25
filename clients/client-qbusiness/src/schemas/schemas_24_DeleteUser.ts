// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aIp, _DU, _DUR, _DURe, _ht, _uI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteUserRequest = struct(
  n0,
  _DUR,
  0,
  [_aIp, _uI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteUserResponse = struct(n0, _DURe, 0, [], []);
export var DeleteUser = op(
  n0,
  _DU,
  {
    [_ht]: ["DELETE", "/applications/{applicationId}/users/{userId}", 200],
  },
  () => DeleteUserRequest,
  () => DeleteUserResponse
);
