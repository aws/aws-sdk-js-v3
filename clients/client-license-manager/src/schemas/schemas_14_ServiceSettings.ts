// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _DRr,
  _ECAD,
  _EI,
  _ELC,
  _ELCR,
  _ELCRx,
  _Ex,
  _GSS,
  _GSSR,
  _GSSRe,
  _LCT,
  _LMRSA,
  _OC,
  _SBA,
  _STA,
  _USS,
  _USSR,
  _USSRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ExtendLicenseConsumptionRequest = struct(n0, _ELCR, 0, [_LCT, _DRr], [0, 2]);
export var ExtendLicenseConsumptionResponse = struct(n0, _ELCRx, 0, [_LCT, _Ex], [0, 0]);
export var GetServiceSettingsRequest = struct(n0, _GSSR, 0, [], []);
export var GetServiceSettingsResponse = struct(
  n0,
  _GSSRe,
  0,
  [_SBA, _STA, _OC, _ECAD, _LMRSA],
  [0, 0, () => OrganizationConfiguration, 2, 0]
);
export var OrganizationConfiguration = struct(n0, _OC, 0, [_EI], [2]);
export var UpdateServiceSettingsRequest = struct(
  n0,
  _USSR,
  0,
  [_SBA, _STA, _OC, _ECAD],
  [0, 0, () => OrganizationConfiguration, 2]
);
export var UpdateServiceSettingsResponse = struct(n0, _USSRp, 0, [], []);
export var ExtendLicenseConsumption = op(
  n0,
  _ELC,
  0,
  () => ExtendLicenseConsumptionRequest,
  () => ExtendLicenseConsumptionResponse
);
export var GetServiceSettings = op(
  n0,
  _GSS,
  0,
  () => GetServiceSettingsRequest,
  () => GetServiceSettingsResponse
);
export var UpdateServiceSettings = op(
  n0,
  _USS,
  0,
  () => UpdateServiceSettingsRequest,
  () => UpdateServiceSettingsResponse
);
