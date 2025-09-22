// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _h, _LDI, _N, _ULD, _ULDR, _ULDRp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateLoggerDefinitionRequest = struct(n0, _ULDR, 0, [_LDI, _N], [[0, 1], 0]);
export var UpdateLoggerDefinitionResponse = struct(n0, _ULDRp, 0, [], []);
export var UpdateLoggerDefinition = op(
  n0,
  _ULD,
  {
    [_h]: ["PUT", "/greengrass/definition/loggers/{LoggerDefinitionId}", 200],
  },
  () => UpdateLoggerDefinitionRequest,
  () => UpdateLoggerDefinitionResponse
);
