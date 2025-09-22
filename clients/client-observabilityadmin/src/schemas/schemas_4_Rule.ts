// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _DCRFO,
  _DCRFOI,
  _DTR,
  _DTRFO,
  _DTRFOI,
  _DTRI,
  _h,
  _RA,
  _RI,
  _Ru,
  _UCRFO,
  _UCRFOI,
  _UCRFOO,
  n0,
  Unit,
} from "./schemas_0";
import { CentralizationRule } from "./schemas_5_Organization";

/* eslint no-var: 0 */

export var DeleteCentralizationRuleForOrganizationInput = struct(n0, _DCRFOI, 0, [_RI], [0]);
export var DeleteTelemetryRuleForOrganizationInput = struct(n0, _DTRFOI, 0, [_RI], [0]);
export var DeleteTelemetryRuleInput = struct(n0, _DTRI, 0, [_RI], [0]);
export var UpdateCentralizationRuleForOrganizationInput = struct(
  n0,
  _UCRFOI,
  0,
  [_RI, _Ru],
  [0, () => CentralizationRule]
);
export var UpdateCentralizationRuleForOrganizationOutput = struct(n0, _UCRFOO, 0, [_RA], [0]);
export var DeleteCentralizationRuleForOrganization = op(
  n0,
  _DCRFO,
  {
    [_h]: ["POST", "/DeleteCentralizationRuleForOrganization", 200],
  },
  () => DeleteCentralizationRuleForOrganizationInput,
  () => Unit
);
export var DeleteTelemetryRule = op(
  n0,
  _DTR,
  {
    [_h]: ["POST", "/DeleteTelemetryRule", 200],
  },
  () => DeleteTelemetryRuleInput,
  () => Unit
);
export var DeleteTelemetryRuleForOrganization = op(
  n0,
  _DTRFO,
  {
    [_h]: ["POST", "/DeleteTelemetryRuleForOrganization", 200],
  },
  () => DeleteTelemetryRuleForOrganizationInput,
  () => Unit
);
export var UpdateCentralizationRuleForOrganization = op(
  n0,
  _UCRFO,
  {
    [_h]: ["POST", "/UpdateCentralizationRuleForOrganization", 200],
  },
  () => UpdateCentralizationRuleForOrganizationInput,
  () => UpdateCentralizationRuleForOrganizationOutput
);
