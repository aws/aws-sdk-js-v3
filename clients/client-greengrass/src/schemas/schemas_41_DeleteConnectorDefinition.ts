// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CDI, _DCD, _DCDR, _DCDRe, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteConnectorDefinitionRequest = struct(n0, _DCDR, 0, [_CDI], [[0, 1]]);
export var DeleteConnectorDefinitionResponse = struct(n0, _DCDRe, 0, [], []);
export var DeleteConnectorDefinition = op(
  n0,
  _DCD,
  {
    [_h]: ["DELETE", "/greengrass/definition/connectors/{ConnectorDefinitionId}", 200],
  },
  () => DeleteConnectorDefinitionRequest,
  () => DeleteConnectorDefinitionResponse
);
