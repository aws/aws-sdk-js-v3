// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _Ar, _TK, _UR, _URR, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var UntagResourceRequest = struct(n0, _URR, 0, [_Ar, _TK], [0, 64 | 0]);
export var TagKeys = 64 | 0;

export var UntagResource = op(
  n0,
  _UR,
  0,
  () => UntagResourceRequest,
  () => Unit
);
