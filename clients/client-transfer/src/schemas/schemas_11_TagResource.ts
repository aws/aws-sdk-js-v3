// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _Ar, _T, _TR, _TRR, n0, Tags, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var TagResourceRequest = struct(n0, _TRR, 0, [_Ar, _T], [0, () => Tags]);
export var TagResource = op(
  n0,
  _TR,
  0,
  () => TagResourceRequest,
  () => Unit
);
