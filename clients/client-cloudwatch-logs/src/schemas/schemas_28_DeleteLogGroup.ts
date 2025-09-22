// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DLG, _DLGR, _lGN, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteLogGroupRequest = struct(n0, _DLGR, 0, [_lGN], [0]);
export var DeleteLogGroup = op(
  n0,
  _DLG,
  0,
  () => DeleteLogGroupRequest,
  () => Unit
);
