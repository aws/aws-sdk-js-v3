// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ARN, _DRP, _DRPR, _DRPRe, _GRPe, _GRPRet, _GRPRete, _N, _RPe, _SI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteResourcePolicyRequest = struct(n0, _DRPR, 0, [_SI], [0]);
export var DeleteResourcePolicyResponse = struct(n0, _DRPRe, 0, [_ARN, _N], [0, 0]);
export var GetResourcePolicyRequest = struct(n0, _GRPRet, 0, [_SI], [0]);
export var GetResourcePolicyResponse = struct(n0, _GRPRete, 0, [_ARN, _N, _RPe], [0, 0, 0]);
export var DeleteResourcePolicy = op(
  n0,
  _DRP,
  0,
  () => DeleteResourcePolicyRequest,
  () => DeleteResourcePolicyResponse
);
export var GetResourcePolicy = op(
  n0,
  _GRPe,
  0,
  () => GetResourcePolicyRequest,
  () => GetResourcePolicyResponse
);
