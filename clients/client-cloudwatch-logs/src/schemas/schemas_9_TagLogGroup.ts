// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _lGN, _ta, _TLG, _TLGR, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var TagLogGroupRequest = struct(n0, _TLGR, 0, [_lGN, _ta], [0, 128 | 0]);
export var TagLogGroup = op(
  n0,
  _TLG,
  0,
  () => TagLogGroupRequest,
  () => Unit
);
