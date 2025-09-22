// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DRPB, _DRPBR, _RN, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteRolePermissionsBoundaryRequest = struct(n0, _DRPBR, 0, [_RN], [0]);
export var DeleteRolePermissionsBoundary = op(
  n0,
  _DRPB,
  0,
  () => DeleteRolePermissionsBoundaryRequest,
  () => Unit
);
