// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CCA, _DCCD, _DCCDR, _DCCDRe, _EE, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteCostCategoryDefinitionRequest = struct(n0, _DCCDR, 0, [_CCA], [0]);
export var DeleteCostCategoryDefinitionResponse = struct(n0, _DCCDRe, 0, [_CCA, _EE], [0, 0]);
export var DeleteCostCategoryDefinition = op(
  n0,
  _DCCD,
  0,
  () => DeleteCostCategoryDefinitionRequest,
  () => DeleteCostCategoryDefinitionResponse
);
