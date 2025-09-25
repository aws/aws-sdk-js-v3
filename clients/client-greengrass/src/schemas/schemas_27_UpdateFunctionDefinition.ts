// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _FDI, _h, _N, _UFD, _UFDR, _UFDRp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateFunctionDefinitionRequest = struct(n0, _UFDR, 0, [_FDI, _N], [[0, 1], 0]);
export var UpdateFunctionDefinitionResponse = struct(n0, _UFDRp, 0, [], []);
export var UpdateFunctionDefinition = op(
  n0,
  _UFD,
  {
    [_h]: ["PUT", "/greengrass/definition/functions/{FunctionDefinitionId}", 200],
  },
  () => UpdateFunctionDefinitionRequest,
  () => UpdateFunctionDefinitionResponse
);
