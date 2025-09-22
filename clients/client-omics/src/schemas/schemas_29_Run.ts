// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DRC, _DRCR, _end, _ht, _i, n0 } from "./schemas_0";
import { Unit } from "./schemas_21_Set";

/* eslint no-var: 0 */

export var DeleteRunCacheRequest = struct(n0, _DRCR, 0, [_i], [[0, 1]]);
export var DeleteRunCache = op(
  n0,
  _DRC,
  {
    [_ht]: ["DELETE", "/runCache/{id}", 202],
    [_end]: ["workflows-"],
  },
  () => DeleteRunCacheRequest,
  () => Unit
);
