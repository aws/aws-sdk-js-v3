// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _h, _RARN, _T, _TK, _TRa, _TRI, _UR, _URI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var TagResourceInput = struct(n0, _TRI, 0, [_RARN, _T], [0, 128 | 0]);
export var UntagResourceInput = struct(n0, _URI, 0, [_RARN, _TK], [0, 64 | 0]);
export var TagKeyList = 64 | 0;

export var TagMapInput = 128 | 0;

export var TagResource = op(
  n0,
  _TRa,
  {
    [_h]: ["POST", "/TagResource", 200],
  },
  () => TagResourceInput,
  () => Unit
);
export var UntagResource = op(
  n0,
  _UR,
  {
    [_h]: ["POST", "/UntagResource", 200],
  },
  () => UntagResourceInput,
  () => Unit
);
