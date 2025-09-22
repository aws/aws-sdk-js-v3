// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DW, _DWR, _end, _ht, _i, n0 } from "./schemas_0";
import { Unit } from "./schemas_21_Set";

/* eslint no-var: 0 */

export var DeleteWorkflowRequest = struct(n0, _DWR, 0, [_i], [[0, 1]]);
export var DeleteWorkflow = op(
  n0,
  _DW,
  {
    [_ht]: ["DELETE", "/workflow/{id}", 202],
    [_end]: ["workflows-"],
  },
  () => DeleteWorkflowRequest,
  () => Unit
);
