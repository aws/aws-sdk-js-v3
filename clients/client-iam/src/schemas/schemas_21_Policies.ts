// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _GN,
  _IT,
  _LGP,
  _LGPR,
  _LGPRi,
  _LRP,
  _LRPR,
  _LRPRi,
  _LUP,
  _LUPR,
  _LUPRi,
  _Ma,
  _MI,
  _PNo,
  _RN,
  _UN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListGroupPoliciesRequest = struct(n0, _LGPR, 0, [_GN, _Ma, _MI], [0, 0, 1]);
export var ListGroupPoliciesResponse = struct(n0, _LGPRi, 0, [_PNo, _IT, _Ma], [64 | 0, 2, 0]);
export var ListRolePoliciesRequest = struct(n0, _LRPR, 0, [_RN, _Ma, _MI], [0, 0, 1]);
export var ListRolePoliciesResponse = struct(n0, _LRPRi, 0, [_PNo, _IT, _Ma], [64 | 0, 2, 0]);
export var ListUserPoliciesRequest = struct(n0, _LUPR, 0, [_UN, _Ma, _MI], [0, 0, 1]);
export var ListUserPoliciesResponse = struct(n0, _LUPRi, 0, [_PNo, _IT, _Ma], [64 | 0, 2, 0]);
export var policyNameListType = 64 | 0;

export var ListGroupPolicies = op(
  n0,
  _LGP,
  0,
  () => ListGroupPoliciesRequest,
  () => ListGroupPoliciesResponse
);
export var ListRolePolicies = op(
  n0,
  _LRP,
  0,
  () => ListRolePoliciesRequest,
  () => ListRolePoliciesResponse
);
export var ListUserPolicies = op(
  n0,
  _LUP,
  0,
  () => ListUserPoliciesRequest,
  () => ListUserPoliciesResponse
);
