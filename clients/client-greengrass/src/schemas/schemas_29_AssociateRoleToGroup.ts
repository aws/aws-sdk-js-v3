// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AA, _ARTG, _ARTGR, _ARTGRs, _GI, _h, _RA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AssociateRoleToGroupRequest = struct(n0, _ARTGR, 0, [_GI, _RA], [[0, 1], 0]);
export var AssociateRoleToGroupResponse = struct(n0, _ARTGRs, 0, [_AA], [0]);
export var AssociateRoleToGroup = op(
  n0,
  _ARTG,
  {
    [_h]: ["PUT", "/greengrass/groups/{GroupId}/role", 200],
  },
  () => AssociateRoleToGroupRequest,
  () => AssociateRoleToGroupResponse
);
