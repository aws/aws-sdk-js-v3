// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DWSG, _DWSGR, _DWSGRe, _hQ, _ht, _i, _wIo, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteWorkflowStepGroupRequest = struct(
  n0,
  _DWSGR,
  0,
  [_wIo, _i],
  [
    [
      0,
      {
        [_hQ]: _wIo,
      },
    ],
    [0, 1],
  ]
);
export var DeleteWorkflowStepGroupResponse = struct(n0, _DWSGRe, 0, [], []);
export var DeleteWorkflowStepGroup = op(
  n0,
  _DWSG,
  {
    [_ht]: ["DELETE", "/workflowstepgroup/{id}", 202],
  },
  () => DeleteWorkflowStepGroupRequest,
  () => DeleteWorkflowStepGroupResponse
);
