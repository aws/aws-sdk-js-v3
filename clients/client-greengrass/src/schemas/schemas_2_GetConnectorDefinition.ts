// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _A, _CDI, _CT, _GCD, _GCDR, _GCDRe, _h, _I, _LUT, _LV, _LVA, _N, _t, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetConnectorDefinitionRequest = struct(n0, _GCDR, 0, [_CDI], [[0, 1]]);
export var GetConnectorDefinitionResponse = struct(
  n0,
  _GCDRe,
  0,
  [_A, _CT, _I, _LUT, _LV, _LVA, _N, _t],
  [0, 0, 0, 0, 0, 0, 0, 128 | 0]
);
export var GetConnectorDefinition = op(
  n0,
  _GCD,
  {
    [_h]: ["GET", "/greengrass/definition/connectors/{ConnectorDefinitionId}", 200],
  },
  () => GetConnectorDefinitionRequest,
  () => GetConnectorDefinitionResponse
);
