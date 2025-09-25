// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _L, _QU, _RP, _RPR, n0 } from "./schemas_0";
import { Unit } from "./schemas_2_Message";

/* eslint no-var: 0 */

export var RemovePermissionRequest = struct(n0, _RPR, 0, [_QU, _L], [0, 0]);
export var RemovePermission = op(
  n0,
  _RP,
  0,
  () => RemovePermissionRequest,
  () => Unit
);
