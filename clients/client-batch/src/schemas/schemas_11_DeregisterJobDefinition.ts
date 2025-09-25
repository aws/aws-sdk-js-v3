// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DJD, _DJDR, _DJDRe, _ht, _jD, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeregisterJobDefinitionRequest = struct(n0, _DJDR, 0, [_jD], [0]);
export var DeregisterJobDefinitionResponse = struct(n0, _DJDRe, 0, [], []);
export var DeregisterJobDefinition = op(
  n0,
  _DJD,
  {
    [_ht]: ["POST", "/v1/deregisterjobdefinition", 200],
  },
  () => DeregisterJobDefinitionRequest,
  () => DeregisterJobDefinitionResponse
);
