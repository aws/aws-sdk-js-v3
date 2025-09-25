// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _GN, _RUFG, _RUFGR, _UN, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var RemoveUserFromGroupRequest = struct(n0, _RUFGR, 0, [_GN, _UN], [0, 0]);
export var RemoveUserFromGroup = op(
  n0,
  _RUFG,
  0,
  () => RemoveUserFromGroupRequest,
  () => Unit
);
