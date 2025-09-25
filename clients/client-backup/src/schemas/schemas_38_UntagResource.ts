// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _h, _RA, _TKL, _UR, _URI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var UntagResourceInput = struct(
  n0,
  _URI,
  0,
  [_RA, _TKL],
  [
    [0, 1],
    [() => TagKeyList, 0],
  ]
);
export var TagKeyList = list(n0, _TKL, 8, 0);
export var UntagResource = op(
  n0,
  _UR,
  {
    [_h]: ["POST", "/untag/{ResourceArn}", 200],
  },
  () => UntagResourceInput,
  () => Unit
);
