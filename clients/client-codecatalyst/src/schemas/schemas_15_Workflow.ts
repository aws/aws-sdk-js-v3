// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _eTn,
  _GWRet,
  _GWRR,
  _GWRRe,
  _ht,
  _i,
  _lUT,
  _pN,
  _sN,
  _sRt,
  _st,
  _sTta,
  _wI,
  _WRSR,
  _WRSRo,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetWorkflowRunRequest = struct(
  n0,
  _GWRR,
  0,
  [_sN, _i, _pN],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var GetWorkflowRunResponse = struct(
  n0,
  _GWRRe,
  0,
  [_sN, _pN, _i, _wI, _st, _sRt, _sTta, _eTn, _lUT],
  [0, 0, 0, 0, 0, () => WorkflowRunStatusReasons, 5, 5, 5]
);
export var WorkflowRunStatusReason = struct(n0, _WRSR, 0, [], []);
export var WorkflowRunStatusReasons = list(n0, _WRSRo, 0, () => WorkflowRunStatusReason);
export var GetWorkflowRun = op(
  n0,
  _GWRet,
  {
    [_ht]: ["GET", "/v1/spaces/{spaceName}/projects/{projectName}/workflowRuns/{id}", 200],
  },
  () => GetWorkflowRunRequest,
  () => GetWorkflowRunResponse
);
