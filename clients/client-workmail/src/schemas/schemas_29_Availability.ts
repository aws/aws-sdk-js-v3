// smithy-typescript generated code
import { error, op, sim, struct } from "@smithy/core/schema";

import { InvalidPasswordException as __InvalidPasswordException } from "../models/index";
import { _c, _e, _IPEn, _M, _OI, _P, _RP, _RPR, _RPRe, _UIs, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var Password = sim(n0, _P, 0, 8);
export var InvalidPasswordException = error(
  n0,
  _IPEn,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __InvalidPasswordException
);
export var ResetPasswordRequest = struct(n0, _RPR, 0, [_OI, _UIs, _P], [0, 0, [() => Password, 0]]);
export var ResetPasswordResponse = struct(n0, _RPRe, 0, [], []);
export var ResetPassword = op(
  n0,
  _RP,
  2,
  () => ResetPasswordRequest,
  () => ResetPasswordResponse
);
