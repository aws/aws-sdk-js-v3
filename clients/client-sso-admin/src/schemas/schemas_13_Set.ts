// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CMPR,
  _CMPRL,
  _CMPRu,
  _DCMPRFPS,
  _DCMPRFPSR,
  _DCMPRFPSRe,
  _GPBFPS,
  _GPBFPSR,
  _GPBFPSRe,
  _IA,
  _LCMPRIPS,
  _LCMPRIPSR,
  _LCMPRIPSRi,
  _MPA,
  _MR,
  _N,
  _NT,
  _P,
  _PB,
  _PPBTPS,
  _PPBTPSR,
  _PPBTPSRu,
  _PSA,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CustomerManagedPolicyReference = struct(n0, _CMPR, 0, [_N, _P], [0, 0]);
export var DetachCustomerManagedPolicyReferenceFromPermissionSetRequest = struct(
  n0,
  _DCMPRFPSR,
  0,
  [_IA, _PSA, _CMPR],
  [0, 0, () => CustomerManagedPolicyReference]
);
export var DetachCustomerManagedPolicyReferenceFromPermissionSetResponse = struct(n0, _DCMPRFPSRe, 0, [], []);
export var GetPermissionsBoundaryForPermissionSetRequest = struct(n0, _GPBFPSR, 0, [_IA, _PSA], [0, 0]);
export var GetPermissionsBoundaryForPermissionSetResponse = struct(
  n0,
  _GPBFPSRe,
  0,
  [_PB],
  [() => PermissionsBoundary]
);
export var ListCustomerManagedPolicyReferencesInPermissionSetRequest = struct(
  n0,
  _LCMPRIPSR,
  0,
  [_IA, _PSA, _MR, _NT],
  [0, 0, 1, 0]
);
export var ListCustomerManagedPolicyReferencesInPermissionSetResponse = struct(
  n0,
  _LCMPRIPSRi,
  0,
  [_CMPRu, _NT],
  [() => CustomerManagedPolicyReferenceList, 0]
);
export var PermissionsBoundary = struct(n0, _PB, 0, [_CMPR, _MPA], [() => CustomerManagedPolicyReference, 0]);
export var PutPermissionsBoundaryToPermissionSetRequest = struct(
  n0,
  _PPBTPSR,
  0,
  [_IA, _PSA, _PB],
  [0, 0, () => PermissionsBoundary]
);
export var PutPermissionsBoundaryToPermissionSetResponse = struct(n0, _PPBTPSRu, 0, [], []);
export var CustomerManagedPolicyReferenceList = list(n0, _CMPRL, 0, () => CustomerManagedPolicyReference);
export var DetachCustomerManagedPolicyReferenceFromPermissionSet = op(
  n0,
  _DCMPRFPS,
  0,
  () => DetachCustomerManagedPolicyReferenceFromPermissionSetRequest,
  () => DetachCustomerManagedPolicyReferenceFromPermissionSetResponse
);
export var GetPermissionsBoundaryForPermissionSet = op(
  n0,
  _GPBFPS,
  0,
  () => GetPermissionsBoundaryForPermissionSetRequest,
  () => GetPermissionsBoundaryForPermissionSetResponse
);
export var ListCustomerManagedPolicyReferencesInPermissionSet = op(
  n0,
  _LCMPRIPS,
  0,
  () => ListCustomerManagedPolicyReferencesInPermissionSetRequest,
  () => ListCustomerManagedPolicyReferencesInPermissionSetResponse
);
export var PutPermissionsBoundaryToPermissionSet = op(
  n0,
  _PPBTPS,
  0,
  () => PutPermissionsBoundaryToPermissionSetRequest,
  () => PutPermissionsBoundaryToPermissionSetResponse
);
