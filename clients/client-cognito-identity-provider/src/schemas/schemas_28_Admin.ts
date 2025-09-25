// smithy-typescript generated code
import { error, op, sim, struct } from "@smithy/core/schema";

import {
  DeviceKeyExistsException as __DeviceKeyExistsException,
  InvalidPasswordException as __InvalidPasswordException,
  PasswordHistoryPolicyViolationException as __PasswordHistoryPolicyViolationException,
  UnsupportedUserStateException as __UnsupportedUserStateException,
  UsernameExistsException as __UsernameExistsException,
} from "../models/index";
import {
  _ACU,
  _ACUR,
  _ACURd,
  _ASUP,
  _ASUPR,
  _ASUPRd,
  _ATc,
  _c,
  _CDon,
  _CDR,
  _CDRo,
  _CM,
  _CPh,
  _CPR,
  _CPRh,
  _DDM,
  _DK,
  _DKEE,
  _DN,
  _DSVC,
  _DSVCT,
  _e,
  _FAC,
  _hE,
  _IPEn,
  _m,
  _MAe,
  _P,
  _Pe,
  _PHPVE,
  _PP,
  _PPr,
  _PT,
  _PV,
  _Sa,
  _TP,
  _U,
  _UA,
  _UCN,
  _UEE,
  _UPI,
  _Us,
  _UUSE,
  _VD,
  n0,
  TokenModelType,
  UsernameType,
} from "./schemas_0";
import { UserType } from "./schemas_11_User";
import { AttributeListType } from "./schemas_26_User";

/* eslint no-var: 0 */

export var PasswordType = sim(n0, _PT, 0, 8);
export var AdminCreateUserRequest = struct(
  n0,
  _ACUR,
  0,
  [_UPI, _U, _UA, _VD, _TP, _FAC, _MAe, _DDM, _CM],
  [
    0,
    [() => UsernameType, 0],
    [() => AttributeListType, 0],
    [() => AttributeListType, 0],
    [() => PasswordType, 0],
    2,
    0,
    64 | 0,
    128 | 0,
  ]
);
export var AdminCreateUserResponse = struct(n0, _ACURd, 0, [_Us], [[() => UserType, 0]]);
export var AdminSetUserPasswordRequest = struct(
  n0,
  _ASUPR,
  0,
  [_UPI, _U, _P, _Pe],
  [0, [() => UsernameType, 0], [() => PasswordType, 0], 2]
);
export var AdminSetUserPasswordResponse = struct(n0, _ASUPRd, 0, [], []);
export var ChangePasswordRequest = struct(
  n0,
  _CPR,
  0,
  [_PP, _PPr, _ATc],
  [
    [() => PasswordType, 0],
    [() => PasswordType, 0],
    [() => TokenModelType, 0],
  ]
);
export var ChangePasswordResponse = struct(n0, _CPRh, 0, [], []);
export var ConfirmDeviceRequest = struct(
  n0,
  _CDR,
  0,
  [_ATc, _DK, _DSVC, _DN],
  [[() => TokenModelType, 0], 0, () => DeviceSecretVerifierConfigType, 0]
);
export var ConfirmDeviceResponse = struct(n0, _CDRo, 0, [_UCN], [2]);
export var DeviceKeyExistsException = error(
  n0,
  _DKEE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __DeviceKeyExistsException
);
export var DeviceSecretVerifierConfigType = struct(n0, _DSVCT, 0, [_PV, _Sa], [0, 0]);
export var InvalidPasswordException = error(
  n0,
  _IPEn,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __InvalidPasswordException
);
export var PasswordHistoryPolicyViolationException = error(
  n0,
  _PHPVE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __PasswordHistoryPolicyViolationException
);
export var UnsupportedUserStateException = error(
  n0,
  _UUSE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __UnsupportedUserStateException
);
export var UsernameExistsException = error(
  n0,
  _UEE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __UsernameExistsException
);
export var DeliveryMediumListType = 64 | 0;

export var AdminCreateUser = op(
  n0,
  _ACU,
  0,
  () => AdminCreateUserRequest,
  () => AdminCreateUserResponse
);
export var AdminSetUserPassword = op(
  n0,
  _ASUP,
  0,
  () => AdminSetUserPasswordRequest,
  () => AdminSetUserPasswordResponse
);
export var ChangePassword = op(
  n0,
  _CPh,
  0,
  () => ChangePasswordRequest,
  () => ChangePasswordResponse
);
export var ConfirmDevice = op(
  n0,
  _CDon,
  0,
  () => ConfirmDeviceRequest,
  () => ConfirmDeviceResponse
);
