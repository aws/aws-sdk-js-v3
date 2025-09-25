// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CDIo, _h, _N, _UCDp, _UCDRpd, _UCDRpda, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateCoreDefinitionRequest = struct(n0, _UCDRpd, 0, [_CDIo, _N], [[0, 1], 0]);
export var UpdateCoreDefinitionResponse = struct(n0, _UCDRpda, 0, [], []);
export var UpdateCoreDefinition = op(
  n0,
  _UCDp,
  {
    [_h]: ["PUT", "/greengrass/definition/cores/{CoreDefinitionId}", 200],
  },
  () => UpdateCoreDefinitionRequest,
  () => UpdateCoreDefinitionResponse
);
