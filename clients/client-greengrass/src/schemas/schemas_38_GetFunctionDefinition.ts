// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _A, _CT, _FDI, _GFD, _GFDR, _GFDRe, _h, _I, _LUT, _LV, _LVA, _N, _t, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetFunctionDefinitionRequest = struct(n0, _GFDR, 0, [_FDI], [[0, 1]]);
export var GetFunctionDefinitionResponse = struct(
  n0,
  _GFDRe,
  0,
  [_A, _CT, _I, _LUT, _LV, _LVA, _N, _t],
  [0, 0, 0, 0, 0, 0, 0, 128 | 0]
);
export var GetFunctionDefinition = op(
  n0,
  _GFD,
  {
    [_h]: ["GET", "/greengrass/definition/functions/{FunctionDefinitionId}", 200],
  },
  () => GetFunctionDefinitionRequest,
  () => GetFunctionDefinitionResponse
);
