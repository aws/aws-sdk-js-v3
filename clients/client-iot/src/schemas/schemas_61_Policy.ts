// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _APR,
  _APt,
  _DPet,
  _DPRet,
  _h,
  _hQ,
  _LTFP,
  _LTFPR,
  _LTFPRi,
  _ma,
  _nM,
  _pNo,
  _pS,
  _ta,
  _tar,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AttachPolicyRequest = struct(n0, _APR, 0, [_pNo, _tar], [[0, 1], 0]);
export var DetachPolicyRequest = struct(n0, _DPRet, 0, [_pNo, _tar], [[0, 1], 0]);
export var ListTargetsForPolicyRequest = struct(
  n0,
  _LTFPR,
  0,
  [_pNo, _ma, _pS],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _ma,
      },
    ],
    [
      1,
      {
        [_hQ]: _pS,
      },
    ],
  ]
);
export var ListTargetsForPolicyResponse = struct(n0, _LTFPRi, 0, [_ta, _nM], [64 | 0, 0]);
export var PolicyTargets = 64 | 0;

export var AttachPolicy = op(
  n0,
  _APt,
  {
    [_h]: ["PUT", "/target-policies/{policyName}", 200],
  },
  () => AttachPolicyRequest,
  () => Unit
);
export var DetachPolicy = op(
  n0,
  _DPet,
  {
    [_h]: ["POST", "/target-policies/{policyName}", 200],
  },
  () => DetachPolicyRequest,
  () => Unit
);
export var ListTargetsForPolicy = op(
  n0,
  _LTFP,
  {
    [_h]: ["POST", "/policy-targets/{policyName}", 200],
  },
  () => ListTargetsForPolicyRequest,
  () => ListTargetsForPolicyResponse
);
