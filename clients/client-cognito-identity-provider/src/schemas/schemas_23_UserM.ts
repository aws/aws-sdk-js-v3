// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _ASUMFAP,
  _ASUMFAPR,
  _ASUMFAPRd,
  _ATc,
  _E,
  _EMS,
  _EMST,
  _PM,
  _SMSMS,
  _SMSMST,
  _STMS,
  _STMST,
  _SUMFAP,
  _SUMFAPR,
  _SUMFAPRe,
  _U,
  _UPI,
  n0,
  TokenModelType,
  UsernameType,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AdminSetUserMFAPreferenceRequest = struct(
  n0,
  _ASUMFAPR,
  0,
  [_SMSMS, _STMS, _EMS, _U, _UPI],
  [() => SMSMfaSettingsType, () => SoftwareTokenMfaSettingsType, () => EmailMfaSettingsType, [() => UsernameType, 0], 0]
);
export var AdminSetUserMFAPreferenceResponse = struct(n0, _ASUMFAPRd, 0, [], []);
export var EmailMfaSettingsType = struct(n0, _EMST, 0, [_E, _PM], [2, 2]);
export var SetUserMFAPreferenceRequest = struct(
  n0,
  _SUMFAPR,
  0,
  [_SMSMS, _STMS, _EMS, _ATc],
  [() => SMSMfaSettingsType, () => SoftwareTokenMfaSettingsType, () => EmailMfaSettingsType, [() => TokenModelType, 0]]
);
export var SetUserMFAPreferenceResponse = struct(n0, _SUMFAPRe, 0, [], []);
export var SMSMfaSettingsType = struct(n0, _SMSMST, 0, [_E, _PM], [2, 2]);
export var SoftwareTokenMfaSettingsType = struct(n0, _STMST, 0, [_E, _PM], [2, 2]);
export var AdminSetUserMFAPreference = op(
  n0,
  _ASUMFAP,
  0,
  () => AdminSetUserMFAPreferenceRequest,
  () => AdminSetUserMFAPreferenceResponse
);
export var SetUserMFAPreference = op(
  n0,
  _SUMFAP,
  0,
  () => SetUserMFAPreferenceRequest,
  () => SetUserMFAPreferenceResponse
);
