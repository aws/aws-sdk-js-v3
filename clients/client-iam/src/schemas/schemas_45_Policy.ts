// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { PolicyNotAttachableException as __PolicyNotAttachableException } from "../models/index";
import {
  _AGP,
  _AGPR,
  _aQE,
  _ARP,
  _ARPR,
  _AUP,
  _AUPR,
  _c,
  _e,
  _GN,
  _hE,
  _m,
  _PA,
  _PB,
  _PNAE,
  _PRPB,
  _PRPBR,
  _PUPB,
  _PUPBR,
  _RN,
  _UN,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AttachGroupPolicyRequest = struct(n0, _AGPR, 0, [_GN, _PA], [0, 0]);
export var AttachRolePolicyRequest = struct(n0, _ARPR, 0, [_RN, _PA], [0, 0]);
export var AttachUserPolicyRequest = struct(n0, _AUPR, 0, [_UN, _PA], [0, 0]);
export var PolicyNotAttachableException = error(
  n0,
  _PNAE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`PolicyNotAttachable`, 400],
  },
  [_m],
  [0],

  __PolicyNotAttachableException
);
export var PutRolePermissionsBoundaryRequest = struct(n0, _PRPBR, 0, [_RN, _PB], [0, 0]);
export var PutUserPermissionsBoundaryRequest = struct(n0, _PUPBR, 0, [_UN, _PB], [0, 0]);
export var AttachGroupPolicy = op(
  n0,
  _AGP,
  0,
  () => AttachGroupPolicyRequest,
  () => Unit
);
export var AttachRolePolicy = op(
  n0,
  _ARP,
  0,
  () => AttachRolePolicyRequest,
  () => Unit
);
export var AttachUserPolicy = op(
  n0,
  _AUP,
  0,
  () => AttachUserPolicyRequest,
  () => Unit
);
export var PutRolePermissionsBoundary = op(
  n0,
  _PRPB,
  0,
  () => PutRolePermissionsBoundaryRequest,
  () => Unit
);
export var PutUserPermissionsBoundary = op(
  n0,
  _PUPB,
  0,
  () => PutUserPermissionsBoundaryRequest,
  () => Unit
);
