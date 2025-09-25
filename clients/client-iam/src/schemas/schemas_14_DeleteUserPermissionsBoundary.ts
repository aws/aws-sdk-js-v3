// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DUPB, _DUPBR, _UN, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteUserPermissionsBoundaryRequest = struct(n0, _DUPBR, 0, [_UN], [0]);
export var DeleteUserPermissionsBoundary = op(
  n0,
  _DUPB,
  0,
  () => DeleteUserPermissionsBoundaryRequest,
  () => Unit
);
