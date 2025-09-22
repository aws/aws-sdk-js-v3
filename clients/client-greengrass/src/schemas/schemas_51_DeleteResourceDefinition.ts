// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DRD, _DRDR, _DRDRe, _h, _RDI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteResourceDefinitionRequest = struct(n0, _DRDR, 0, [_RDI], [[0, 1]]);
export var DeleteResourceDefinitionResponse = struct(n0, _DRDRe, 0, [], []);
export var DeleteResourceDefinition = op(
  n0,
  _DRD,
  {
    [_h]: ["DELETE", "/greengrass/definition/resources/{ResourceDefinitionId}", 200],
  },
  () => DeleteResourceDefinitionRequest,
  () => DeleteResourceDefinitionResponse
);
