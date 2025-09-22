// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { PublicPolicyException as __PublicPolicyException } from "../models/index";
import {
  _ARN,
  _ARR,
  _ARRLT,
  _BPP,
  _c,
  _CN,
  _DD,
  _DS,
  _DSR,
  _DSRe,
  _e,
  _EM,
  _FDWR,
  _FORS,
  _KKI,
  _M,
  _N,
  _PPE,
  _PRP,
  _PRPR,
  _PRPRu,
  _PVP,
  _R,
  _RPe,
  _RRT,
  _RS,
  _RSTR,
  _RSTRR,
  _RSTRRe,
  _RWID,
  _SI,
  _VE,
  _VEE,
  _VET,
  _VRP,
  _VRPR,
  _VRPRa,
  n0,
} from "./schemas_0";
import { ReplicationStatusListType } from "./schemas_6_Secret";

/* eslint no-var: 0 */

export var DeleteSecretRequest = struct(n0, _DSR, 0, [_SI, _RWID, _FDWR], [0, 1, 2]);
export var DeleteSecretResponse = struct(n0, _DSRe, 0, [_ARN, _N, _DD], [0, 0, 4]);
export var PublicPolicyException = error(
  n0,
  _PPE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __PublicPolicyException
);
export var PutResourcePolicyRequest = struct(n0, _PRPR, 0, [_SI, _RPe, _BPP], [0, 0, 2]);
export var PutResourcePolicyResponse = struct(n0, _PRPRu, 0, [_ARN, _N], [0, 0]);
export var ReplicaRegionType = struct(n0, _RRT, 0, [_R, _KKI], [0, 0]);
export var ReplicateSecretToRegionsRequest = struct(
  n0,
  _RSTRR,
  0,
  [_SI, _ARR, _FORS],
  [0, () => AddReplicaRegionListType, 2]
);
export var ReplicateSecretToRegionsResponse = struct(n0, _RSTRRe, 0, [_ARN, _RS], [0, () => ReplicationStatusListType]);
export var ValidateResourcePolicyRequest = struct(n0, _VRPR, 0, [_SI, _RPe], [0, 0]);
export var ValidateResourcePolicyResponse = struct(n0, _VRPRa, 0, [_PVP, _VE], [2, () => ValidationErrorsType]);
export var ValidationErrorsEntry = struct(n0, _VEE, 0, [_CN, _EM], [0, 0]);
export var AddReplicaRegionListType = list(n0, _ARRLT, 0, () => ReplicaRegionType);
export var ValidationErrorsType = list(n0, _VET, 0, () => ValidationErrorsEntry);
export var DeleteSecret = op(
  n0,
  _DS,
  0,
  () => DeleteSecretRequest,
  () => DeleteSecretResponse
);
export var PutResourcePolicy = op(
  n0,
  _PRP,
  0,
  () => PutResourcePolicyRequest,
  () => PutResourcePolicyResponse
);
export var ReplicateSecretToRegions = op(
  n0,
  _RSTR,
  0,
  () => ReplicateSecretToRegionsRequest,
  () => ReplicateSecretToRegionsResponse
);
export var ValidateResourcePolicy = op(
  n0,
  _VRP,
  0,
  () => ValidateResourcePolicyRequest,
  () => ValidateResourcePolicyResponse
);
