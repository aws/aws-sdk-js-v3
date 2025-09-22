// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _cT,
  _CWSG,
  _CWSGR,
  _CWSGRr,
  _d,
  _eT,
  _GWSG,
  _GWSGR,
  _GWSGRe,
  _hQ,
  _ht,
  _i,
  _lMT,
  _n,
  _ne,
  _ow,
  _p,
  _s,
  _T,
  _TL,
  _to,
  _u,
  _UWSG,
  _UWSGR,
  _UWSGRp,
  _wIo,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateWorkflowStepGroupRequest = struct(n0, _CWSGR, 0, [_wIo, _n, _d, _ne, _p], [0, 0, 0, 64 | 0, 64 | 0]);
export var CreateWorkflowStepGroupResponse = struct(
  n0,
  _CWSGRr,
  0,
  [_wIo, _n, _i, _d, _to, _ne, _p, _cT],
  [0, 0, 0, 0, () => ToolsList, 64 | 0, 64 | 0, 4]
);
export var GetWorkflowStepGroupRequest = struct(
  n0,
  _GWSGR,
  0,
  [_i, _wIo],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _wIo,
      },
    ],
  ]
);
export var GetWorkflowStepGroupResponse = struct(
  n0,
  _GWSGRe,
  0,
  [_i, _wIo, _n, _d, _s, _ow, _cT, _lMT, _eT, _to, _p, _ne],
  [0, 0, 0, 0, 0, 0, 4, 4, 4, () => ToolsList, 64 | 0, 64 | 0]
);
export var Tool = struct(n0, _T, 0, [_n, _u], [0, 0]);
export var UpdateWorkflowStepGroupRequest = struct(
  n0,
  _UWSGR,
  0,
  [_wIo, _i, _n, _d, _ne, _p],
  [
    [
      0,
      {
        [_hQ]: _wIo,
      },
    ],
    [0, 1],
    0,
    0,
    64 | 0,
    64 | 0,
  ]
);
export var UpdateWorkflowStepGroupResponse = struct(
  n0,
  _UWSGRp,
  0,
  [_wIo, _n, _i, _d, _to, _ne, _p, _lMT],
  [0, 0, 0, 0, () => ToolsList, 64 | 0, 64 | 0, 4]
);
export var ToolsList = list(n0, _TL, 0, () => Tool);
export var CreateWorkflowStepGroup = op(
  n0,
  _CWSG,
  {
    [_ht]: ["POST", "/workflowstepgroups", 200],
  },
  () => CreateWorkflowStepGroupRequest,
  () => CreateWorkflowStepGroupResponse
);
export var GetWorkflowStepGroup = op(
  n0,
  _GWSG,
  {
    [_ht]: ["GET", "/workflowstepgroup/{id}", 200],
  },
  () => GetWorkflowStepGroupRequest,
  () => GetWorkflowStepGroupResponse
);
export var UpdateWorkflowStepGroup = op(
  n0,
  _UWSG,
  {
    [_ht]: ["POST", "/workflowstepgroup/{id}", 202],
  },
  () => UpdateWorkflowStepGroupRequest,
  () => UpdateWorkflowStepGroupResponse
);
