// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ar,
  _cT,
  _d,
  _di,
  _DWV,
  _DWVR,
  _end,
  _hQ,
  _ht,
  _it,
  _LWV,
  _LWVR,
  _LWVRi,
  _met,
  _mRa,
  _nT,
  _st,
  _sTta,
  _ty,
  _vN,
  _wI,
  _wOI,
  _WVL,
  _WVLI,
  n0,
} from "./schemas_0";
import { Unit } from "./schemas_21_Set";

/* eslint no-var: 0 */

export var DeleteWorkflowVersionRequest = struct(
  n0,
  _DWVR,
  0,
  [_wI, _vN],
  [
    [0, 1],
    [0, 1],
  ]
);
export var ListWorkflowVersionsRequest = struct(
  n0,
  _LWVR,
  0,
  [_wI, _ty, _wOI, _sTta, _mRa],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _ty,
      },
    ],
    [
      0,
      {
        [_hQ]: _wOI,
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
export var ListWorkflowVersionsResponse = struct(n0, _LWVRi, 0, [_it, _nT], [() => WorkflowVersionList, 0]);
export var WorkflowVersionListItem = struct(
  n0,
  _WVLI,
  0,
  [_ar, _wI, _vN, _d, _st, _ty, _di, _cT, _met],
  [0, 0, 0, 0, 0, 0, 0, 5, 128 | 0]
);
export var WorkflowVersionList = list(n0, _WVL, 0, () => WorkflowVersionListItem);
export var DeleteWorkflowVersion = op(
  n0,
  _DWV,
  {
    [_ht]: ["DELETE", "/workflow/{workflowId}/version/{versionName}", 202],
    [_end]: ["workflows-"],
  },
  () => DeleteWorkflowVersionRequest,
  () => Unit
);
export var ListWorkflowVersions = op(
  n0,
  _LWV,
  {
    [_ht]: ["GET", "/workflow/{workflowId}/version", 200],
    [_end]: ["workflows-"],
  },
  () => ListWorkflowVersionsRequest,
  () => ListWorkflowVersionsResponse
);
