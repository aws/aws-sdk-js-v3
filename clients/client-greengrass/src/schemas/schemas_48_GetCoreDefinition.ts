// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _A, _CDIo, _CT, _GCDe, _GCDRet, _GCDReto, _h, _I, _LUT, _LV, _LVA, _N, _t, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetCoreDefinitionRequest = struct(n0, _GCDRet, 0, [_CDIo], [[0, 1]]);
export var GetCoreDefinitionResponse = struct(
  n0,
  _GCDReto,
  0,
  [_A, _CT, _I, _LUT, _LV, _LVA, _N, _t],
  [0, 0, 0, 0, 0, 0, 0, 128 | 0]
);
export var GetCoreDefinition = op(
  n0,
  _GCDe,
  {
    [_h]: ["GET", "/greengrass/definition/cores/{CoreDefinitionId}", 200],
  },
  () => GetCoreDefinitionRequest,
  () => GetCoreDefinitionResponse
);
