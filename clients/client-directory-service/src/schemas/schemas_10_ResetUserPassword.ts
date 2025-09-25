// smithy-typescript generated code
import { error, op, sim, struct } from "@smithy/core/schema";

import {
  InvalidPasswordException as __InvalidPasswordException,
  UserDoesNotExistException as __UserDoesNotExistException,
} from "../models/index";
import { _c, _DI, _e, _IPEnv, _M, _NP, _RI, _RUP, _RUPR, _RUPRe, _UDNEE, _UN, _UP, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UserPassword = sim(n0, _UP, 0, 8);
export var InvalidPasswordException = error(
  n0,
  _IPEnv,
  {
    [_e]: _c,
  },
  [_M, _RI],
  [0, 0],

  __InvalidPasswordException
);
export var ResetUserPasswordRequest = struct(n0, _RUPR, 0, [_DI, _UN, _NP], [0, 0, [() => UserPassword, 0]]);
export var ResetUserPasswordResult = struct(n0, _RUPRe, 0, [], []);
export var UserDoesNotExistException = error(
  n0,
  _UDNEE,
  {
    [_e]: _c,
  },
  [_M, _RI],
  [0, 0],

  __UserDoesNotExistException
);
export var ResetUserPassword = op(
  n0,
  _RUP,
  0,
  () => ResetUserPasswordRequest,
  () => ResetUserPasswordResult
);
