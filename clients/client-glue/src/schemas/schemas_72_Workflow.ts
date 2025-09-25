// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _CWR,
  _CWr,
  _CWRr,
  _D,
  _DRP,
  _GWRP,
  _GWRPR,
  _GWRPRe,
  _MCR,
  _N,
  _PWRP,
  _PWRPR,
  _PWRPRu,
  _RIu,
  _RPu,
  _SWR,
  _SWRR,
  _SWRRt,
  _Tag,
  _UW,
  _UWR,
  _UWRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateWorkflowRequest = struct(n0, _CWR, 0, [_N, _D, _DRP, _Tag, _MCR], [0, 0, 128 | 0, 128 | 0, 1]);
export var CreateWorkflowResponse = struct(n0, _CWRr, 0, [_N], [0]);
export var GetWorkflowRunPropertiesRequest = struct(n0, _GWRPR, 0, [_N, _RIu], [0, 0]);
export var GetWorkflowRunPropertiesResponse = struct(n0, _GWRPRe, 0, [_RPu], [128 | 0]);
export var PutWorkflowRunPropertiesRequest = struct(n0, _PWRPR, 0, [_N, _RIu, _RPu], [0, 0, 128 | 0]);
export var PutWorkflowRunPropertiesResponse = struct(n0, _PWRPRu, 0, [], []);
export var StartWorkflowRunRequest = struct(n0, _SWRR, 0, [_N, _RPu], [0, 128 | 0]);
export var StartWorkflowRunResponse = struct(n0, _SWRRt, 0, [_RIu], [0]);
export var UpdateWorkflowRequest = struct(n0, _UWR, 0, [_N, _D, _DRP, _MCR], [0, 0, 128 | 0, 1]);
export var UpdateWorkflowResponse = struct(n0, _UWRp, 0, [_N], [0]);
export var WorkflowRunProperties = 128 | 0;

export var CreateWorkflow = op(
  n0,
  _CWr,
  0,
  () => CreateWorkflowRequest,
  () => CreateWorkflowResponse
);
export var GetWorkflowRunProperties = op(
  n0,
  _GWRP,
  0,
  () => GetWorkflowRunPropertiesRequest,
  () => GetWorkflowRunPropertiesResponse
);
export var PutWorkflowRunProperties = op(
  n0,
  _PWRP,
  0,
  () => PutWorkflowRunPropertiesRequest,
  () => PutWorkflowRunPropertiesResponse
);
export var StartWorkflowRun = op(
  n0,
  _SWR,
  0,
  () => StartWorkflowRunRequest,
  () => StartWorkflowRunResponse
);
export var UpdateWorkflow = op(
  n0,
  _UW,
  0,
  () => UpdateWorkflowRequest,
  () => UpdateWorkflowResponse
);
