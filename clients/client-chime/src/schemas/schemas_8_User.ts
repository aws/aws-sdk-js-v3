// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AI,
  _ASc,
  _DRC,
  _EDO,
  _GAS,
  _GASR,
  _GASRe,
  _GUS,
  _GUSR,
  _GUSRe,
  _h,
  _ICn,
  _OCu,
  _SMS,
  _Te,
  _TS,
  _UAS,
  _UASR,
  _UASRp,
  _UI,
  _US,
  _UUS,
  _UUSR,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AccountSettings = struct(n0, _ASc, 0, [_DRC, _EDO], [2, 2]);
export var GetAccountSettingsRequest = struct(n0, _GASR, 0, [_AI], [[0, 1]]);
export var GetAccountSettingsResponse = struct(n0, _GASRe, 0, [_ASc], [() => AccountSettings]);
export var GetUserSettingsRequest = struct(
  n0,
  _GUSR,
  0,
  [_AI, _UI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetUserSettingsResponse = struct(n0, _GUSRe, 0, [_US], [() => UserSettings]);
export var TelephonySettings = struct(n0, _TS, 0, [_ICn, _OCu, _SMS], [2, 2, 2]);
export var UpdateAccountSettingsRequest = struct(n0, _UASR, 0, [_AI, _ASc], [[0, 1], () => AccountSettings]);
export var UpdateAccountSettingsResponse = struct(n0, _UASRp, 0, [], []);
export var UpdateUserSettingsRequest = struct(n0, _UUSR, 0, [_AI, _UI, _US], [[0, 1], [0, 1], () => UserSettings]);
export var UserSettings = struct(n0, _US, 0, [_Te], [() => TelephonySettings]);
export var GetAccountSettings = op(
  n0,
  _GAS,
  {
    [_h]: ["GET", "/accounts/{AccountId}/settings", 200],
  },
  () => GetAccountSettingsRequest,
  () => GetAccountSettingsResponse
);
export var GetUserSettings = op(
  n0,
  _GUS,
  {
    [_h]: ["GET", "/accounts/{AccountId}/users/{UserId}/settings", 200],
  },
  () => GetUserSettingsRequest,
  () => GetUserSettingsResponse
);
export var UpdateAccountSettings = op(
  n0,
  _UAS,
  {
    [_h]: ["PUT", "/accounts/{AccountId}/settings", 204],
  },
  () => UpdateAccountSettingsRequest,
  () => UpdateAccountSettingsResponse
);
export var UpdateUserSettings = op(
  n0,
  _UUS,
  {
    [_h]: ["PUT", "/accounts/{AccountId}/users/{UserId}/settings", 204],
  },
  () => UpdateUserSettingsRequest,
  () => Unit
);
