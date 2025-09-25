// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AL,
  _ALF,
  _K,
  _LPPP,
  _LPPPI,
  _LPPPO,
  _NPT,
  _PAI,
  _PIl,
  _PNl,
  _PPI,
  _PPNr,
  _PPP,
  _PPPS,
  _PS,
  _PTa,
  _PTl,
  _V,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AccessLevelFilter = struct(n0, _ALF, 0, [_K, _V], [0, 0]);
export var ListProvisionedProductPlansInput = struct(
  n0,
  _LPPPI,
  0,
  [_AL, _PPI, _PS, _PTa, _ALF],
  [0, 0, 1, 0, () => AccessLevelFilter]
);
export var ListProvisionedProductPlansOutput = struct(n0, _LPPPO, 0, [_PPP, _NPT], [() => ProvisionedProductPlans, 0]);
export var ProvisionedProductPlanSummary = struct(
  n0,
  _PPPS,
  0,
  [_PNl, _PIl, _PPI, _PPNr, _PTl, _PAI],
  [0, 0, 0, 0, 0, 0]
);
export var ProvisionedProductPlans = list(n0, _PPP, 0, () => ProvisionedProductPlanSummary);
export var ListProvisionedProductPlans = op(
  n0,
  _LPPP,
  0,
  () => ListProvisionedProductPlansInput,
  () => ListProvisionedProductPlansOutput
);
