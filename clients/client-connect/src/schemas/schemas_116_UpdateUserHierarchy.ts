// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _h, _HGI, _II, _UI, _UUH, _UUHR, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateUserHierarchyRequest = struct(n0, _UUHR, 0, [_HGI, _UI, _II], [0, [0, 1], [0, 1]]);
export var UpdateUserHierarchy = op(
  n0,
  _UUH,
  {
    [_h]: ["POST", "/users/{InstanceId}/{UserId}/hierarchy", 200],
  },
  () => UpdateUserHierarchyRequest,
  () => Unit
);
