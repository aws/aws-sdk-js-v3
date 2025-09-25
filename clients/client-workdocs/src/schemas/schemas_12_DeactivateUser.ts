// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _A, _AT, _DU, _DUR, _h, _hH, _UI, AuthenticationHeaderType, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeactivateUserRequest = struct(
  n0,
  _DUR,
  0,
  [_UI, _AT],
  [
    [0, 1],
    [
      () => AuthenticationHeaderType,
      {
        [_hH]: _A,
      },
    ],
  ]
);
export var DeactivateUser = op(
  n0,
  _DU,
  {
    [_h]: ["DELETE", "/api/v1/users/{UserId}/activation", 204],
  },
  () => DeactivateUserRequest,
  () => Unit
);
