// smithy-typescript generated code
import { error, op, sim, struct } from "@smithy/core/schema";

import { PasswordPolicyViolationException as __PasswordPolicyViolationException } from "../models/index";
import { _aQE, _c, _CLP, _CLPR, _CLPRr, _e, _hE, _LP, _m, _Pa, _PPVE, _PRR, _pT, _UN, n0 } from "./schemas_0";
import { LoginProfile } from "./schemas_54_Login";

/* eslint no-var: 0 */

export var passwordType = sim(n0, _pT, 0, 8);
export var CreateLoginProfileRequest = struct(n0, _CLPR, 0, [_UN, _Pa, _PRR], [0, [() => passwordType, 0], 2]);
export var CreateLoginProfileResponse = struct(n0, _CLPRr, 0, [_LP], [() => LoginProfile]);
export var PasswordPolicyViolationException = error(
  n0,
  _PPVE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`PasswordPolicyViolation`, 400],
  },
  [_m],
  [0],

  __PasswordPolicyViolationException
);
export var CreateLoginProfile = op(
  n0,
  _CLP,
  0,
  () => CreateLoginProfileRequest,
  () => CreateLoginProfileResponse
);
