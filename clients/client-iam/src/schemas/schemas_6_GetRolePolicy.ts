// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _GRP, _GRPR, _GRPRe, _PD, _PN, _RN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetRolePolicyRequest = struct(n0, _GRPR, 0, [_RN, _PN], [0, 0]);
export var GetRolePolicyResponse = struct(n0, _GRPRe, 0, [_RN, _PN, _PD], [0, 0, 0]);
export var GetRolePolicy = op(
  n0,
  _GRP,
  0,
  () => GetRolePolicyRequest,
  () => GetRolePolicyResponse
);
