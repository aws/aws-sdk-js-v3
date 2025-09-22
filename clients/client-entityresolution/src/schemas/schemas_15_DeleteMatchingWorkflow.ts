// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DMW, _DMWI, _DMWO, _ht, _m, _wN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteMatchingWorkflowInput = struct(n0, _DMWI, 0, [_wN], [[0, 1]]);
export var DeleteMatchingWorkflowOutput = struct(n0, _DMWO, 0, [_m], [0]);
export var DeleteMatchingWorkflow = op(
  n0,
  _DMW,
  {
    [_ht]: ["DELETE", "/matchingworkflows/{workflowName}", 200],
  },
  () => DeleteMatchingWorkflowInput,
  () => DeleteMatchingWorkflowOutput
);
