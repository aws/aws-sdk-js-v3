// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { TooManyFailedAttemptsException as __TooManyFailedAttemptsException } from "../models/index";
import { _ACSU, _ACSUR, _ACSURd, _c, _CM, _e, _hE, _m, _TMFAE, _U, _UPI, n0, UsernameType } from "./schemas_0";

/* eslint no-var: 0 */

export var AdminConfirmSignUpRequest = struct(n0, _ACSUR, 0, [_UPI, _U, _CM], [0, [() => UsernameType, 0], 128 | 0]);
export var AdminConfirmSignUpResponse = struct(n0, _ACSURd, 0, [], []);
export var TooManyFailedAttemptsException = error(
  n0,
  _TMFAE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __TooManyFailedAttemptsException
);
export var AdminConfirmSignUp = op(
  n0,
  _ACSU,
  0,
  () => AdminConfirmSignUpRequest,
  () => AdminConfirmSignUpResponse
);
