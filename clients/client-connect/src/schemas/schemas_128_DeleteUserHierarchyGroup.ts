// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DUHG, _DUHGR, _h, _HGI, _II, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteUserHierarchyGroupRequest = struct(
  n0,
  _DUHGR,
  0,
  [_HGI, _II],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteUserHierarchyGroup = op(
  n0,
  _DUHG,
  {
    [_h]: ["DELETE", "/user-hierarchy-groups/{InstanceId}/{HierarchyGroupId}", 200],
  },
  () => DeleteUserHierarchyGroupRequest,
  () => Unit
);
