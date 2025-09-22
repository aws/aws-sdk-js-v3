// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AP,
  _aPLT,
  _APt,
  _GN,
  _IT,
  _LAGP,
  _LAGPR,
  _LAGPRi,
  _LARP,
  _LARPR,
  _LARPRi,
  _LAUP,
  _LAUPR,
  _LAUPRi,
  _Ma,
  _MI,
  _PA,
  _PN,
  _PPa,
  _RN,
  _UN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AttachedPolicy = struct(n0, _AP, 0, [_PN, _PA], [0, 0]);
export var ListAttachedGroupPoliciesRequest = struct(n0, _LAGPR, 0, [_GN, _PPa, _Ma, _MI], [0, 0, 0, 1]);
export var ListAttachedGroupPoliciesResponse = struct(
  n0,
  _LAGPRi,
  0,
  [_APt, _IT, _Ma],
  [() => attachedPoliciesListType, 2, 0]
);
export var ListAttachedRolePoliciesRequest = struct(n0, _LARPR, 0, [_RN, _PPa, _Ma, _MI], [0, 0, 0, 1]);
export var ListAttachedRolePoliciesResponse = struct(
  n0,
  _LARPRi,
  0,
  [_APt, _IT, _Ma],
  [() => attachedPoliciesListType, 2, 0]
);
export var ListAttachedUserPoliciesRequest = struct(n0, _LAUPR, 0, [_UN, _PPa, _Ma, _MI], [0, 0, 0, 1]);
export var ListAttachedUserPoliciesResponse = struct(
  n0,
  _LAUPRi,
  0,
  [_APt, _IT, _Ma],
  [() => attachedPoliciesListType, 2, 0]
);
export var attachedPoliciesListType = list(n0, _aPLT, 0, () => AttachedPolicy);
export var ListAttachedGroupPolicies = op(
  n0,
  _LAGP,
  0,
  () => ListAttachedGroupPoliciesRequest,
  () => ListAttachedGroupPoliciesResponse
);
export var ListAttachedRolePolicies = op(
  n0,
  _LARP,
  0,
  () => ListAttachedRolePoliciesRequest,
  () => ListAttachedRolePoliciesResponse
);
export var ListAttachedUserPolicies = op(
  n0,
  _LAUP,
  0,
  () => ListAttachedUserPoliciesRequest,
  () => ListAttachedUserPoliciesResponse
);
