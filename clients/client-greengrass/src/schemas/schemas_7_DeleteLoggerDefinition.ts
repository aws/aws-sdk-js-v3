// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DLD, _DLDR, _DLDRe, _h, _LDI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteLoggerDefinitionRequest = struct(n0, _DLDR, 0, [_LDI], [[0, 1]]);
export var DeleteLoggerDefinitionResponse = struct(n0, _DLDRe, 0, [], []);
export var DeleteLoggerDefinition = op(
  n0,
  _DLD,
  {
    [_h]: ["DELETE", "/greengrass/definition/loggers/{LoggerDefinitionId}", 200],
  },
  () => DeleteLoggerDefinitionRequest,
  () => DeleteLoggerDefinitionResponse
);
