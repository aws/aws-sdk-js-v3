// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CDI, _h, _N, _UCD, _UCDR, _UCDRp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateConnectorDefinitionRequest = struct(n0, _UCDR, 0, [_CDI, _N], [[0, 1], 0]);
export var UpdateConnectorDefinitionResponse = struct(n0, _UCDRp, 0, [], []);
export var UpdateConnectorDefinition = op(
  n0,
  _UCD,
  {
    [_h]: ["PUT", "/greengrass/definition/connectors/{ConnectorDefinitionId}", 200],
  },
  () => UpdateConnectorDefinitionRequest,
  () => UpdateConnectorDefinitionResponse
);
