// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AL, _DPPP, _DPPPI, _DPPPO, _IE, _PIl, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteProvisionedProductPlanInput = struct(n0, _DPPPI, 0, [_AL, _PIl, _IE], [0, 0, 2]);
export var DeleteProvisionedProductPlanOutput = struct(n0, _DPPPO, 0, [], []);
export var DeleteProvisionedProductPlan = op(
  n0,
  _DPPP,
  0,
  () => DeleteProvisionedProductPlanInput,
  () => DeleteProvisionedProductPlanOutput
);
