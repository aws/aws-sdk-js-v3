// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DAi, _DRFG, _DRFGR, _DRFGRi, _GI, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DisassociateRoleFromGroupRequest = struct(n0, _DRFGR, 0, [_GI], [[0, 1]]);
export var DisassociateRoleFromGroupResponse = struct(n0, _DRFGRi, 0, [_DAi], [0]);
export var DisassociateRoleFromGroup = op(
  n0,
  _DRFG,
  {
    [_h]: ["DELETE", "/greengrass/groups/{GroupId}/role", 200],
  },
  () => DisassociateRoleFromGroupRequest,
  () => DisassociateRoleFromGroupResponse
);
