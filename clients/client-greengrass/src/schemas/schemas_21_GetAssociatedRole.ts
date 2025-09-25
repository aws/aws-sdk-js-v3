// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AA, _GAR, _GARR, _GARRe, _GI, _h, _RA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetAssociatedRoleRequest = struct(n0, _GARR, 0, [_GI], [[0, 1]]);
export var GetAssociatedRoleResponse = struct(n0, _GARRe, 0, [_AA, _RA], [0, 0]);
export var GetAssociatedRole = op(
  n0,
  _GAR,
  {
    [_h]: ["GET", "/greengrass/groups/{GroupId}/role", 200],
  },
  () => GetAssociatedRoleRequest,
  () => GetAssociatedRoleResponse
);
