// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DIMW, _DIMWI, _DIMWO, _ht, _m, _wN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteIdMappingWorkflowInput = struct(n0, _DIMWI, 0, [_wN], [[0, 1]]);
export var DeleteIdMappingWorkflowOutput = struct(n0, _DIMWO, 0, [_m], [0]);
export var DeleteIdMappingWorkflow = op(
  n0,
  _DIMW,
  {
    [_ht]: ["DELETE", "/idmappingworkflows/{workflowName}", 200],
  },
  () => DeleteIdMappingWorkflowInput,
  () => DeleteIdMappingWorkflowOutput
);
