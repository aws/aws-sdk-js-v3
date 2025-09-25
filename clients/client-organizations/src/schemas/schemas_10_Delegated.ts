// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _DAWSSA,
  _DAWSSAR,
  _DE,
  _EAWSSA,
  _EAWSSAR,
  _ESP,
  _ESPn,
  _LAWSSAFO,
  _LAWSSAFOR,
  _LAWSSAFORi,
  _MR,
  _NT,
  _SP,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DisableAWSServiceAccessRequest = struct(n0, _DAWSSAR, 0, [_SP], [0]);
export var EnableAWSServiceAccessRequest = struct(n0, _EAWSSAR, 0, [_SP], [0]);
export var EnabledServicePrincipal = struct(n0, _ESP, 0, [_SP, _DE], [0, 4]);
export var ListAWSServiceAccessForOrganizationRequest = struct(n0, _LAWSSAFOR, 0, [_NT, _MR], [0, 1]);
export var ListAWSServiceAccessForOrganizationResponse = struct(
  n0,
  _LAWSSAFORi,
  0,
  [_ESPn, _NT],
  [() => EnabledServicePrincipals, 0]
);
export var EnabledServicePrincipals = list(n0, _ESPn, 0, () => EnabledServicePrincipal);
export var DisableAWSServiceAccess = op(
  n0,
  _DAWSSA,
  0,
  () => DisableAWSServiceAccessRequest,
  () => Unit
);
export var EnableAWSServiceAccess = op(
  n0,
  _EAWSSA,
  0,
  () => EnableAWSServiceAccessRequest,
  () => Unit
);
export var ListAWSServiceAccessForOrganization = op(
  n0,
  _LAWSSAFO,
  0,
  () => ListAWSServiceAccessForOrganizationRequest,
  () => ListAWSServiceAccessForOrganizationResponse
);
