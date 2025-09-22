// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CTr,
  _EH,
  _GPl,
  _GRP,
  _GRPe,
  _GRPR,
  _GRPRe,
  _GRPRet,
  _GRPRete,
  _GRPRL,
  _MRax,
  _NTe,
  _PEC,
  _PH,
  _PHC,
  _PIJ,
  _PRP,
  _PRPR,
  _PRPRu,
  _RAe,
  _UT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetResourcePoliciesRequest = struct(n0, _GRPR, 0, [_NTe, _MRax], [0, 1]);
export var GetResourcePoliciesResponse = struct(
  n0,
  _GRPRe,
  0,
  [_GRPRL, _NTe],
  [() => GetResourcePoliciesResponseList, 0]
);
export var GetResourcePolicyRequest = struct(n0, _GRPRet, 0, [_RAe], [0]);
export var GetResourcePolicyResponse = struct(n0, _GRPRete, 0, [_PIJ, _PH, _CTr, _UT], [0, 0, 4, 4]);
export var GluePolicy = struct(n0, _GPl, 0, [_PIJ, _PH, _CTr, _UT], [0, 0, 4, 4]);
export var PutResourcePolicyRequest = struct(n0, _PRPR, 0, [_PIJ, _RAe, _PHC, _PEC, _EH], [0, 0, 0, 0, 0]);
export var PutResourcePolicyResponse = struct(n0, _PRPRu, 0, [_PH], [0]);
export var GetResourcePoliciesResponseList = list(n0, _GRPRL, 0, () => GluePolicy);
export var GetResourcePolicies = op(
  n0,
  _GRP,
  0,
  () => GetResourcePoliciesRequest,
  () => GetResourcePoliciesResponse
);
export var GetResourcePolicy = op(
  n0,
  _GRPe,
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
