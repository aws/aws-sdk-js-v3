// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AMP,
  _AMPL,
  _AMPt,
  _Ar,
  _DMPFPS,
  _DMPFPSR,
  _DMPFPSRe,
  _IA,
  _LMPIPS,
  _LMPIPSR,
  _LMPIPSRi,
  _MPA,
  _MR,
  _N,
  _NT,
  _PSA,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AttachedManagedPolicy = struct(n0, _AMP, 0, [_N, _Ar], [0, 0]);
export var DetachManagedPolicyFromPermissionSetRequest = struct(n0, _DMPFPSR, 0, [_IA, _PSA, _MPA], [0, 0, 0]);
export var DetachManagedPolicyFromPermissionSetResponse = struct(n0, _DMPFPSRe, 0, [], []);
export var ListManagedPoliciesInPermissionSetRequest = struct(n0, _LMPIPSR, 0, [_IA, _PSA, _MR, _NT], [0, 0, 1, 0]);
export var ListManagedPoliciesInPermissionSetResponse = struct(
  n0,
  _LMPIPSRi,
  0,
  [_AMPt, _NT],
  [() => AttachedManagedPolicyList, 0]
);
export var AttachedManagedPolicyList = list(n0, _AMPL, 0, () => AttachedManagedPolicy);
export var DetachManagedPolicyFromPermissionSet = op(
  n0,
  _DMPFPS,
  0,
  () => DetachManagedPolicyFromPermissionSetRequest,
  () => DetachManagedPolicyFromPermissionSetResponse
);
export var ListManagedPoliciesInPermissionSet = op(
  n0,
  _LMPIPS,
  0,
  () => ListManagedPoliciesInPermissionSetRequest,
  () => ListManagedPoliciesInPermissionSetResponse
);
