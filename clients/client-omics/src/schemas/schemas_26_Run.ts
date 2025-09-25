// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CR, _CRR, _DRel, _DRRel, _end, _ht, _i, n0 } from "./schemas_0";
import { Unit } from "./schemas_21_Set";

/* eslint no-var: 0 */

export var CancelRunRequest = struct(n0, _CRR, 0, [_i], [[0, 1]]);
export var DeleteRunRequest = struct(n0, _DRRel, 0, [_i], [[0, 1]]);
export var CancelRun = op(
  n0,
  _CR,
  {
    [_ht]: ["POST", "/run/{id}/cancel", 202],
    [_end]: ["workflows-"],
  },
  () => CancelRunRequest,
  () => Unit
);
export var DeleteRun = op(
  n0,
  _DRel,
  {
    [_ht]: ["DELETE", "/run/{id}", 202],
    [_end]: ["workflows-"],
  },
  () => DeleteRunRequest,
  () => Unit
);
