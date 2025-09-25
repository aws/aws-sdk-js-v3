// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _cD,
  _d,
  _dC,
  _ht,
  _LWBV,
  _LWBVR,
  _LWBVRi,
  _mR,
  _n,
  _nT,
  _o,
  _re,
  _s,
  _st,
  _t,
  _ta,
  _v,
  _WS,
  _WSL,
  _wSL,
  _WSo,
  _wVA,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListWorkflowBuildVersionsRequest = struct(n0, _LWBVR, 0, [_wVA, _mR, _nT], [0, 1, 0]);
export var ListWorkflowBuildVersionsResponse = struct(n0, _LWBVRi, 0, [_wSL, _nT], [() => WorkflowSummaryList, 0]);
export var WorkflowState = struct(n0, _WS, 0, [_st, _re], [0, 0]);
export var WorkflowSummary = struct(
  n0,
  _WSo,
  0,
  [_a, _n, _v, _d, _cD, _t, _o, _s, _dC, _ta],
  [0, 0, 0, 0, 0, 0, 0, () => WorkflowState, 0, 128 | 0]
);
export var WorkflowSummaryList = list(n0, _WSL, 0, () => WorkflowSummary);
export var ListWorkflowBuildVersions = op(
  n0,
  _LWBV,
  {
    [_ht]: ["POST", "/ListWorkflowBuildVersions", 200],
  },
  () => ListWorkflowBuildVersionsRequest,
  () => ListWorkflowBuildVersionsResponse
);
