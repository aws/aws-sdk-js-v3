// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _A, _CT, _GLD, _GLDR, _GLDRe, _h, _I, _LDI, _LUT, _LV, _LVA, _N, _t, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetLoggerDefinitionRequest = struct(n0, _GLDR, 0, [_LDI], [[0, 1]]);
export var GetLoggerDefinitionResponse = struct(
  n0,
  _GLDRe,
  0,
  [_A, _CT, _I, _LUT, _LV, _LVA, _N, _t],
  [0, 0, 0, 0, 0, 0, 0, 128 | 0]
);
export var GetLoggerDefinition = op(
  n0,
  _GLD,
  {
    [_h]: ["GET", "/greengrass/definition/loggers/{LoggerDefinitionId}", 200],
  },
  () => GetLoggerDefinitionRequest,
  () => GetLoggerDefinitionResponse
);
