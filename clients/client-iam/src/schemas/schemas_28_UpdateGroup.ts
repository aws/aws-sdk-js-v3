// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _GN, _NGN, _NPe, _UG, _UGR, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateGroupRequest = struct(n0, _UGR, 0, [_GN, _NPe, _NGN], [0, 0, 0]);
export var UpdateGroup = op(
  n0,
  _UG,
  0,
  () => UpdateGroupRequest,
  () => Unit
);
