// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _LW, _LWR, _LWRi, _MRax, _NTe, _W, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListWorkflowsRequest = struct(n0, _LWR, 0, [_NTe, _MRax], [0, 1]);
export var ListWorkflowsResponse = struct(n0, _LWRi, 0, [_W, _NTe], [64 | 0, 0]);
export var WorkflowNames = 64 | 0;

export var ListWorkflows = op(
  n0,
  _LW,
  0,
  () => ListWorkflowsRequest,
  () => ListWorkflowsResponse
);
