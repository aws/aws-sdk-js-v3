// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ATc, _DUe, _DUR, n0, TokenModelType, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteUserRequest = struct(n0, _DUR, 0, [_ATc], [[() => TokenModelType, 0]]);
export var DeleteUser = op(
  n0,
  _DUe,
  0,
  () => DeleteUserRequest,
  () => Unit
);
