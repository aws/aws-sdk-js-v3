// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AGU,
  _AGUR,
  _AGURd,
  _AN,
  _ASUS,
  _ASUSR,
  _ASUSRd,
  _At,
  _ATc,
  _ATG,
  _DM,
  _E,
  _Fi,
  _GU,
  _GUR,
  _GURe,
  _L,
  _LU,
  _LUR,
  _LURi,
  _MFAO,
  _MFAOLT,
  _MFAOT,
  _PMS,
  _PTa,
  _SUS,
  _SUSR,
  _SUSRe,
  _U,
  _UA,
  _UCD,
  _ULMD,
  _ULT,
  _UMFASL,
  _UPI,
  _US,
  _Use,
  _UTs,
  n0,
  TokenModelType,
  UsernameType,
} from "./schemas_0";
import { AttributeListType } from "./schemas_26_User";

/* eslint no-var: 0 */

export var AdminGetUserRequest = struct(n0, _AGUR, 0, [_UPI, _U], [0, [() => UsernameType, 0]]);
export var AdminGetUserResponse = struct(
  n0,
  _AGURd,
  0,
  [_U, _UA, _UCD, _ULMD, _E, _US, _MFAO, _PMS, _UMFASL],
  [[() => UsernameType, 0], [() => AttributeListType, 0], 4, 4, 2, 0, () => MFAOptionListType, 0, 64 | 0]
);
export var AdminSetUserSettingsRequest = struct(
  n0,
  _ASUSR,
  0,
  [_UPI, _U, _MFAO],
  [0, [() => UsernameType, 0], () => MFAOptionListType]
);
export var AdminSetUserSettingsResponse = struct(n0, _ASUSRd, 0, [], []);
export var GetUserRequest = struct(n0, _GUR, 0, [_ATc], [[() => TokenModelType, 0]]);
export var GetUserResponse = struct(
  n0,
  _GURe,
  0,
  [_U, _UA, _MFAO, _PMS, _UMFASL],
  [[() => UsernameType, 0], [() => AttributeListType, 0], () => MFAOptionListType, 0, 64 | 0]
);
export var ListUsersRequest = struct(n0, _LUR, 0, [_UPI, _ATG, _L, _PTa, _Fi], [0, 64 | 0, 1, 0, 0]);
export var ListUsersResponse = struct(n0, _LURi, 0, [_Use, _PTa], [[() => UsersListType, 0], 0]);
export var MFAOptionType = struct(n0, _MFAOT, 0, [_DM, _AN], [0, 0]);
export var SetUserSettingsRequest = struct(
  n0,
  _SUSR,
  0,
  [_ATc, _MFAO],
  [[() => TokenModelType, 0], () => MFAOptionListType]
);
export var SetUserSettingsResponse = struct(n0, _SUSRe, 0, [], []);
export var UserType = struct(
  n0,
  _UTs,
  0,
  [_U, _At, _UCD, _ULMD, _E, _US, _MFAO],
  [[() => UsernameType, 0], [() => AttributeListType, 0], 4, 4, 2, 0, () => MFAOptionListType]
);
export var MFAOptionListType = list(n0, _MFAOLT, 0, () => MFAOptionType);
export var SearchedAttributeNamesListType = 64 | 0;

export var UsersListType = list(n0, _ULT, 0, [() => UserType, 0]);
export var AdminGetUser = op(
  n0,
  _AGU,
  0,
  () => AdminGetUserRequest,
  () => AdminGetUserResponse
);
export var AdminSetUserSettings = op(
  n0,
  _ASUS,
  0,
  () => AdminSetUserSettingsRequest,
  () => AdminSetUserSettingsResponse
);
export var GetUser = op(
  n0,
  _GU,
  0,
  () => GetUserRequest,
  () => GetUserResponse
);
export var ListUsers = op(
  n0,
  _LU,
  0,
  () => ListUsersRequest,
  () => ListUsersResponse
);
export var SetUserSettings = op(
  n0,
  _SUS,
  0,
  () => SetUserSettingsRequest,
  () => SetUserSettingsResponse
);
