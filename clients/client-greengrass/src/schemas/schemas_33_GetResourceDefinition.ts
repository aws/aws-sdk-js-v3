// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _A, _CT, _GRD, _GRDR, _GRDRe, _h, _I, _LUT, _LV, _LVA, _N, _RDI, _t, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetResourceDefinitionRequest = struct(n0, _GRDR, 0, [_RDI], [[0, 1]]);
export var GetResourceDefinitionResponse = struct(
  n0,
  _GRDRe,
  0,
  [_A, _CT, _I, _LUT, _LV, _LVA, _N, _t],
  [0, 0, 0, 0, 0, 0, 0, 128 | 0]
);
export var GetResourceDefinition = op(
  n0,
  _GRD,
  {
    [_h]: ["GET", "/greengrass/definition/resources/{ResourceDefinitionId}", 200],
  },
  () => GetResourceDefinitionRequest,
  () => GetResourceDefinitionResponse
);
