// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _E,
  _EIx,
  _EMC,
  _EMCT,
  _GUPMC,
  _GUPMCR,
  _GUPMCRe,
  _M,
  _MC,
  _RPI,
  _SAM,
  _SCA,
  _SCm,
  _SCTm,
  _SMC,
  _SMCT,
  _SR,
  _STMC,
  _STMCT,
  _Su,
  _UPI,
  _UV,
  _WAC,
  _WACT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var EmailMfaConfigType = struct(n0, _EMCT, 0, [_M, _Su], [0, 0]);
export var GetUserPoolMfaConfigRequest = struct(n0, _GUPMCR, 0, [_UPI], [0]);
export var GetUserPoolMfaConfigResponse = struct(
  n0,
  _GUPMCRe,
  0,
  [_SMC, _STMC, _EMC, _MC, _WAC],
  [
    () => SmsMfaConfigType,
    () => SoftwareTokenMfaConfigType,
    () => EmailMfaConfigType,
    0,
    () => WebAuthnConfigurationType,
  ]
);
export var SmsConfigurationType = struct(n0, _SCTm, 0, [_SCA, _EIx, _SR], [0, 0, 0]);
export var SmsMfaConfigType = struct(n0, _SMCT, 0, [_SAM, _SCm], [0, () => SmsConfigurationType]);
export var SoftwareTokenMfaConfigType = struct(n0, _STMCT, 0, [_E], [2]);
export var WebAuthnConfigurationType = struct(n0, _WACT, 0, [_RPI, _UV], [0, 0]);
export var GetUserPoolMfaConfig = op(
  n0,
  _GUPMC,
  0,
  () => GetUserPoolMfaConfigRequest,
  () => GetUserPoolMfaConfigResponse
);
