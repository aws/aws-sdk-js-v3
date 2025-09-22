// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ConflictException as __ConflictException } from "../models/index";
import { _C, _c, _CE, _CI, _CRT, _DU, _DUR, _DURe, _e, _L, _M, _UI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
  },
  [_M, _C, _L],
  [0, 0, 0],

  __ConflictException
);
export var DeleteUserRequest = struct(n0, _DUR, 0, [_CI, _UI, _CRT], [0, 0, [0, 4]]);
export var DeleteUserResponse = struct(n0, _DURe, 0, [], []);
export var DeleteUser = op(
  n0,
  _DU,
  0,
  () => DeleteUserRequest,
  () => DeleteUserResponse
);
