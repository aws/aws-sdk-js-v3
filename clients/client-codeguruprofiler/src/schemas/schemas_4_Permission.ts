// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _GP, _GPR, _GPRe, _h, _pGN, _po, _rI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetPolicyRequest = struct(n0, _GPR, 0, [_pGN], [[0, 1]]);
export var GetPolicyResponse = struct(n0, _GPRe, 0, [_po, _rI], [0, 0]);
export var GetPolicy = op(
  n0,
  _GP,
  {
    [_h]: ["GET", "/profilingGroups/{profilingGroupName}/policy", 200],
  },
  () => GetPolicyRequest,
  () => GetPolicyResponse
);
