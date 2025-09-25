// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DRP, _DRPR, _DRPRe, _GRP, _GRPR, _GRPRe, _P, _PRP, _PRPR, _PRPRu, _RA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteResourcePolicyRequest = struct(n0, _DRPR, 0, [_RA], [0]);
export var DeleteResourcePolicyResponse = struct(n0, _DRPRe, 0, [_RA, _P], [0, 0]);
export var GetResourcePolicyRequest = struct(n0, _GRPR, 0, [_RA], [0]);
export var GetResourcePolicyResponse = struct(n0, _GRPRe, 0, [_P], [0]);
export var PutResourcePolicyRequest = struct(n0, _PRPR, 0, [_RA, _P], [0, 0]);
export var PutResourcePolicyResponse = struct(n0, _PRPRu, 0, [_RA, _P], [0, 0]);
export var DeleteResourcePolicy = op(
  n0,
  _DRP,
  0,
  () => DeleteResourcePolicyRequest,
  () => DeleteResourcePolicyResponse
);
export var GetResourcePolicy = op(
  n0,
  _GRP,
  0,
  () => GetResourcePolicyRequest,
  () => GetResourcePolicyResponse
);
export var PutResourcePolicy = op(
  n0,
  _PRP,
  0,
  () => PutResourcePolicyRequest,
  () => PutResourcePolicyResponse
);
