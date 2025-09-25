// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DRS, _DRSR, _Id, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteResourceSetRequest = struct(n0, _DRSR, 0, [_Id], [0]);
export var DeleteResourceSet = op(
  n0,
  _DRS,
  0,
  () => DeleteResourceSetRequest,
  () => Unit
);
