// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ar,
  _cT,
  _di,
  _end,
  _hQ,
  _ht,
  _i,
  _it,
  _LW,
  _LWR,
  _LWRi,
  _met,
  _mRa,
  _n,
  _nT,
  _st,
  _sTta,
  _ty,
  _WL,
  _WLI,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListWorkflowsRequest = struct(
  n0,
  _LWR,
  0,
  [_ty, _n, _sTta, _mRa],
  [
    [
      0,
      {
        [_hQ]: _ty,
      },
    ],
    [
      0,
      {
        [_hQ]: _n,
      },
    ],
    [
      0,
      {
        [_hQ]: _sTta,
      },
    ],
    [
      1,
      {
        [_hQ]: _mRa,
      },
    ],
  ]
);
export var ListWorkflowsResponse = struct(n0, _LWRi, 0, [_it, _nT], [() => WorkflowList, 0]);
export var WorkflowListItem = struct(
  n0,
  _WLI,
  0,
  [_ar, _i, _n, _st, _ty, _di, _cT, _met],
  [0, 0, 0, 0, 0, 0, 5, 128 | 0]
);
export var WorkflowList = list(n0, _WL, 0, () => WorkflowListItem);
export var WorkflowMetadata = 128 | 0;

export var ListWorkflows = op(
  n0,
  _LW,
  {
    [_ht]: ["GET", "/workflow", 200],
    [_end]: ["workflows-"],
  },
  () => ListWorkflowsRequest,
  () => ListWorkflowsResponse
);
