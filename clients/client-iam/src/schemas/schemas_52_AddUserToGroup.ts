// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AUTG, _AUTGR, _GN, _UN, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var AddUserToGroupRequest = struct(n0, _AUTGR, 0, [_GN, _UN], [0, 0]);
export var AddUserToGroup = op(
  n0,
  _AUTG,
  0,
  () => AddUserToGroupRequest,
  () => Unit
);
