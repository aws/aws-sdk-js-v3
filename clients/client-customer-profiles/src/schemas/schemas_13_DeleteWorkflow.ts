// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DN, _DW, _DWR, _DWRe, _h, _WI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteWorkflowRequest = struct(
  n0,
  _DWR,
  0,
  [_DN, _WI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteWorkflowResponse = struct(n0, _DWRe, 0, [], []);
export var DeleteWorkflow = op(
  n0,
  _DW,
  {
    [_h]: ["DELETE", "/domains/{DomainName}/workflows/{WorkflowId}", 200],
  },
  () => DeleteWorkflowRequest,
  () => DeleteWorkflowResponse
);
