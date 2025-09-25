// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CDIo, _DCDe, _DCDRel, _DCDRele, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteCoreDefinitionRequest = struct(n0, _DCDRel, 0, [_CDIo], [[0, 1]]);
export var DeleteCoreDefinitionResponse = struct(n0, _DCDRele, 0, [], []);
export var DeleteCoreDefinition = op(
  n0,
  _DCDe,
  {
    [_h]: ["DELETE", "/greengrass/definition/cores/{CoreDefinitionId}", 200],
  },
  () => DeleteCoreDefinitionRequest,
  () => DeleteCoreDefinitionResponse
);
