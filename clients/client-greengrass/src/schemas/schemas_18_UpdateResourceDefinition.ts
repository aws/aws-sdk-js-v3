// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _h, _N, _RDI, _URD, _URDR, _URDRp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateResourceDefinitionRequest = struct(n0, _URDR, 0, [_N, _RDI], [0, [0, 1]]);
export var UpdateResourceDefinitionResponse = struct(n0, _URDRp, 0, [], []);
export var UpdateResourceDefinition = op(
  n0,
  _URD,
  {
    [_h]: ["PUT", "/greengrass/definition/resources/{ResourceDefinitionId}", 200],
  },
  () => UpdateResourceDefinitionRequest,
  () => UpdateResourceDefinitionResponse
);
