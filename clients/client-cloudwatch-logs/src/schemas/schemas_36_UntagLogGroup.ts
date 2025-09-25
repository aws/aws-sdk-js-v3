// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _lGN, _ta, _ULG, _ULGR, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var UntagLogGroupRequest = struct(n0, _ULGR, 0, [_lGN, _ta], [0, 64 | 0]);
export var TagList = 64 | 0;

export var UntagLogGroup = op(
  n0,
  _ULG,
  0,
  () => UntagLogGroupRequest,
  () => Unit
);
