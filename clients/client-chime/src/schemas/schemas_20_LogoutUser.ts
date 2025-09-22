// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AI, _h, _LUo, _LURo, _LURog, _UI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var LogoutUserRequest = struct(
  n0,
  _LURo,
  0,
  [_AI, _UI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var LogoutUserResponse = struct(n0, _LURog, 0, [], []);
export var LogoutUser = op(
  n0,
  _LUo,
  {
    [_h]: ["POST", "/accounts/{AccountId}/users/{UserId}?operation=logout", 204],
  },
  () => LogoutUserRequest,
  () => LogoutUserResponse
);
