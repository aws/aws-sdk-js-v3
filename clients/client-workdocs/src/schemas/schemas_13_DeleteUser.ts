// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _A, _AT, _DUe, _DURe, _h, _hH, _UI, AuthenticationHeaderType, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteUserRequest = struct(
  n0,
  _DURe,
  0,
  [_AT, _UI],
  [
    [
      () => AuthenticationHeaderType,
      {
        [_hH]: _A,
      },
    ],
    [0, 1],
  ]
);
export var DeleteUser = op(
  n0,
  _DUe,
  {
    [_h]: ["DELETE", "/api/v1/users/{UserId}", 204],
  },
  () => DeleteUserRequest,
  () => Unit
);
