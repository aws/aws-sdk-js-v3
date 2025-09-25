// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DRS, _DRSR, _h, _RSN, n0 } from "./schemas_0";
import { Unit } from "./schemas_1_List";

/* eslint no-var: 0 */

export var DeleteResourceSetRequest = struct(n0, _DRSR, 0, [_RSN], [[0, 1]]);
export var DeleteResourceSet = op(
  n0,
  _DRS,
  {
    [_h]: ["DELETE", "/resourcesets/{ResourceSetName}", 204],
  },
  () => DeleteResourceSetRequest,
  () => Unit
);
