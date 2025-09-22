// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  EntityTemporarilyUnmodifiableException as __EntityTemporarilyUnmodifiableException,
  InvalidUserTypeException as __InvalidUserTypeException,
} from "../models/index";
import {
  _aQE,
  _c,
  _CP,
  _CPR,
  _DLP,
  _DLPR,
  _e,
  _ETUE,
  _hE,
  _IUTE,
  _m,
  _NP,
  _NPe,
  _NUN,
  _OP,
  _Pa,
  _PRR,
  _ULP,
  _ULPR,
  _UN,
  _UUp,
  _UURp,
  n0,
  Unit,
} from "./schemas_0";
import { passwordType } from "./schemas_3_Login";

/* eslint no-var: 0 */

export var ChangePasswordRequest = struct(
  n0,
  _CPR,
  0,
  [_OP, _NP],
  [
    [() => passwordType, 0],
    [() => passwordType, 0],
  ]
);
export var DeleteLoginProfileRequest = struct(n0, _DLPR, 0, [_UN], [0]);
export var EntityTemporarilyUnmodifiableException = error(
  n0,
  _ETUE,
  {
    [_e]: _c,
    [_hE]: 409,
    [_aQE]: [`EntityTemporarilyUnmodifiable`, 409],
  },
  [_m],
  [0],

  __EntityTemporarilyUnmodifiableException
);
export var InvalidUserTypeException = error(
  n0,
  _IUTE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidUserType`, 400],
  },
  [_m],
  [0],

  __InvalidUserTypeException
);
export var UpdateLoginProfileRequest = struct(n0, _ULPR, 0, [_UN, _Pa, _PRR], [0, [() => passwordType, 0], 2]);
export var UpdateUserRequest = struct(n0, _UURp, 0, [_UN, _NPe, _NUN], [0, 0, 0]);
export var ChangePassword = op(
  n0,
  _CP,
  0,
  () => ChangePasswordRequest,
  () => Unit
);
export var DeleteLoginProfile = op(
  n0,
  _DLP,
  0,
  () => DeleteLoginProfileRequest,
  () => Unit
);
export var UpdateLoginProfile = op(
  n0,
  _ULP,
  0,
  () => UpdateLoginProfileRequest,
  () => Unit
);
export var UpdateUser = op(
  n0,
  _UUp,
  0,
  () => UpdateUserRequest,
  () => Unit
);
