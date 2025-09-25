// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _bWI, _CARPBW, _CARPBWR, _CARPBWRa, _ht, _pA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CancelAutomatedReasoningPolicyBuildWorkflowRequest = struct(
  n0,
  _CARPBWR,
  0,
  [_pA, _bWI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var CancelAutomatedReasoningPolicyBuildWorkflowResponse = struct(n0, _CARPBWRa, 0, [], []);
export var CancelAutomatedReasoningPolicyBuildWorkflow = op(
  n0,
  _CARPBW,
  {
    [_ht]: ["POST", "/automated-reasoning-policies/{policyArn}/build-workflows/{buildWorkflowId}/cancel", 202],
  },
  () => CancelAutomatedReasoningPolicyBuildWorkflowRequest,
  () => CancelAutomatedReasoningPolicyBuildWorkflowResponse
);
