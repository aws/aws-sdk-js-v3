// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DW, _DWR, _DWRe, _N, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteWorkflowRequest = struct(n0, _DWR, 0, [_N], [0]);
export var DeleteWorkflowResponse = struct(n0, _DWRe, 0, [_N], [0]);
export var DeleteWorkflow = op(
  n0,
  _DW,
  0,
  () => DeleteWorkflowRequest,
  () => DeleteWorkflowResponse
);
