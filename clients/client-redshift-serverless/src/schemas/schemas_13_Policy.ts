// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _GRPe, _GRPRet, _GRPRete, _pol, _rAe, _RPe, _rPes, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetResourcePolicyRequest = struct(n0, _GRPRet, 0, [_rAe], [0]);
export var GetResourcePolicyResponse = struct(n0, _GRPRete, 0, [_rPes], [() => ResourcePolicy]);
export var ResourcePolicy = struct(n0, _RPe, 0, [_rAe, _pol], [0, 0]);
export var GetResourcePolicy = op(
  n0,
  _GRPe,
  0,
  () => GetResourcePolicyRequest,
  () => GetResourcePolicyResponse
);
