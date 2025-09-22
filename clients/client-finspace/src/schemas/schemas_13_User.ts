// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _eI, _GKU, _GKUR, _GKURe, _h, _iR, _uA, _uN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetKxUserRequest = struct(
  n0,
  _GKUR,
  0,
  [_uN, _eI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetKxUserResponse = struct(n0, _GKURe, 0, [_uN, _uA, _eI, _iR], [0, 0, 0, 0]);
export var GetKxUser = op(
  n0,
  _GKU,
  {
    [_h]: ["GET", "/kx/environments/{environmentId}/users/{userName}", 200],
  },
  () => GetKxUserRequest,
  () => GetKxUserResponse
);
