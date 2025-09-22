// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DFD, _DFDR, _DFDRe, _FDI, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteFunctionDefinitionRequest = struct(n0, _DFDR, 0, [_FDI], [[0, 1]]);
export var DeleteFunctionDefinitionResponse = struct(n0, _DFDRe, 0, [], []);
export var DeleteFunctionDefinition = op(
  n0,
  _DFD,
  {
    [_h]: ["DELETE", "/greengrass/definition/functions/{FunctionDefinitionId}", 200],
  },
  () => DeleteFunctionDefinitionRequest,
  () => DeleteFunctionDefinitionResponse
);
