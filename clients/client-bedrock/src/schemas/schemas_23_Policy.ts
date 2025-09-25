// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ResourceInUseException as __ResourceInUseException } from "../models/index";
import { _bWI, _c, _DARPBW, _DARPBWR, _DARPBWRe, _e, _hE, _hQ, _ht, _lUA, _m, _pA, _RIUE, _uA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteAutomatedReasoningPolicyBuildWorkflowRequest = struct(
  n0,
  _DARPBWR,
  0,
  [_pA, _bWI, _lUA],
  [
    [0, 1],
    [0, 1],
    [
      5,
      {
        [_hQ]: _uA,
      },
    ],
  ]
);
export var DeleteAutomatedReasoningPolicyBuildWorkflowResponse = struct(n0, _DARPBWRe, 0, [], []);
export var ResourceInUseException = error(
  n0,
  _RIUE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __ResourceInUseException
);
export var DeleteAutomatedReasoningPolicyBuildWorkflow = op(
  n0,
  _DARPBW,
  {
    [_ht]: ["DELETE", "/automated-reasoning-policies/{policyArn}/build-workflows/{buildWorkflowId}", 202],
  },
  () => DeleteAutomatedReasoningPolicyBuildWorkflowRequest,
  () => DeleteAutomatedReasoningPolicyBuildWorkflowResponse
);
