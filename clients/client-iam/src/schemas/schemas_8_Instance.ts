// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _ACt,
  _AMP,
  _ARPD,
  _ARTIP,
  _ARTIPR,
  _CD,
  _CIP,
  _CIPR,
  _CIPRr,
  _D,
  _DIP,
  _DIPR,
  _DVI,
  _F,
  _GAAD,
  _GAADR,
  _GAADRe,
  _GD,
  _GDL,
  _gDLT,
  _GI,
  _GIP,
  _GIPR,
  _GIPRe,
  _GL,
  _GN,
  _GPL,
  _IA,
  _IP,
  _IPI,
  _IPL,
  _iPLT,
  _IPN,
  _IPn,
  _IT,
  _LIP,
  _LIPFR,
  _LIPFRR,
  _LIPFRRi,
  _LIPR,
  _LIPRi,
  _LIPT,
  _LIPTR,
  _LIPTRi,
  _Ma,
  _MI,
  _MPD,
  _MPDLT,
  _P,
  _PB,
  _PBUC,
  _PD,
  _pDLT,
  _PDo,
  _PI,
  _PN,
  _Pol,
  _PPa,
  _PVL,
  _RD,
  _RDL,
  _rDLT,
  _RI,
  _RLU,
  _RN,
  _Rol,
  _RPL,
  _RRFIP,
  _RRFIPR,
  _T,
  _TIP,
  _TIPR,
  _TK,
  _UD,
  _UDL,
  _uDLT,
  _UDs,
  _UI,
  _UIP,
  _UIPR,
  _UN,
  _UPL,
  AttachedPermissionsBoundary,
  n0,
  tagListType,
  Unit,
} from "./schemas_0";
import { policyDocumentVersionListType } from "./schemas_22_Policy";
import { attachedPoliciesListType } from "./schemas_34_Policies";
import { RoleLastUsed, roleListType } from "./schemas_42_Role";

/* eslint no-var: 0 */

export var AddRoleToInstanceProfileRequest = struct(n0, _ARTIPR, 0, [_IPN, _RN], [0, 0]);
export var CreateInstanceProfileRequest = struct(n0, _CIPR, 0, [_IPN, _P, _T], [0, 0, () => tagListType]);
export var CreateInstanceProfileResponse = struct(n0, _CIPRr, 0, [_IP], [() => InstanceProfile]);
export var DeleteInstanceProfileRequest = struct(n0, _DIPR, 0, [_IPN], [0]);
export var GetAccountAuthorizationDetailsRequest = struct(n0, _GAADR, 0, [_F, _MI, _Ma], [64 | 0, 1, 0]);
export var GetAccountAuthorizationDetailsResponse = struct(
  n0,
  _GAADRe,
  0,
  [_UDL, _GDL, _RDL, _Pol, _IT, _Ma],
  [
    () => userDetailListType,
    () => groupDetailListType,
    () => roleDetailListType,
    () => ManagedPolicyDetailListType,
    2,
    0,
  ]
);
export var GetInstanceProfileRequest = struct(n0, _GIPR, 0, [_IPN], [0]);
export var GetInstanceProfileResponse = struct(n0, _GIPRe, 0, [_IP], [() => InstanceProfile]);
export var GroupDetail = struct(
  n0,
  _GD,
  0,
  [_P, _GN, _GI, _A, _CD, _GPL, _AMP],
  [0, 0, 0, 0, 4, () => policyDetailListType, () => attachedPoliciesListType]
);
export var InstanceProfile = struct(
  n0,
  _IP,
  0,
  [_P, _IPN, _IPI, _A, _CD, _Rol, _T],
  [0, 0, 0, 0, 4, () => roleListType, () => tagListType]
);
export var ListInstanceProfilesForRoleRequest = struct(n0, _LIPFRR, 0, [_RN, _Ma, _MI], [0, 0, 1]);
export var ListInstanceProfilesForRoleResponse = struct(
  n0,
  _LIPFRRi,
  0,
  [_IPn, _IT, _Ma],
  [() => instanceProfileListType, 2, 0]
);
export var ListInstanceProfilesRequest = struct(n0, _LIPR, 0, [_PPa, _Ma, _MI], [0, 0, 1]);
export var ListInstanceProfilesResponse = struct(
  n0,
  _LIPRi,
  0,
  [_IPn, _IT, _Ma],
  [() => instanceProfileListType, 2, 0]
);
export var ListInstanceProfileTagsRequest = struct(n0, _LIPTR, 0, [_IPN, _Ma, _MI], [0, 0, 1]);
export var ListInstanceProfileTagsResponse = struct(n0, _LIPTRi, 0, [_T, _IT, _Ma], [() => tagListType, 2, 0]);
export var ManagedPolicyDetail = struct(
  n0,
  _MPD,
  0,
  [_PN, _PI, _A, _P, _DVI, _ACt, _PBUC, _IA, _D, _CD, _UD, _PVL],
  [0, 0, 0, 0, 0, 1, 1, 2, 0, 4, 4, () => policyDocumentVersionListType]
);
export var PolicyDetail = struct(n0, _PDo, 0, [_PN, _PD], [0, 0]);
export var RemoveRoleFromInstanceProfileRequest = struct(n0, _RRFIPR, 0, [_IPN, _RN], [0, 0]);
export var RoleDetail = struct(
  n0,
  _RD,
  0,
  [_P, _RN, _RI, _A, _CD, _ARPD, _IPL, _RPL, _AMP, _PB, _T, _RLU],
  [
    0,
    0,
    0,
    0,
    4,
    0,
    () => instanceProfileListType,
    () => policyDetailListType,
    () => attachedPoliciesListType,
    () => AttachedPermissionsBoundary,
    () => tagListType,
    () => RoleLastUsed,
  ]
);
export var TagInstanceProfileRequest = struct(n0, _TIPR, 0, [_IPN, _T], [0, () => tagListType]);
export var UntagInstanceProfileRequest = struct(n0, _UIPR, 0, [_IPN, _TK], [0, 64 | 0]);
export var UserDetail = struct(
  n0,
  _UDs,
  0,
  [_P, _UN, _UI, _A, _CD, _UPL, _GL, _AMP, _PB, _T],
  [
    0,
    0,
    0,
    0,
    4,
    () => policyDetailListType,
    64 | 0,
    () => attachedPoliciesListType,
    () => AttachedPermissionsBoundary,
    () => tagListType,
  ]
);
export var entityListType = 64 | 0;

export var groupDetailListType = list(n0, _gDLT, 0, () => GroupDetail);
export var groupNameListType = 64 | 0;

export var instanceProfileListType = list(n0, _iPLT, 0, () => InstanceProfile);
export var ManagedPolicyDetailListType = list(n0, _MPDLT, 0, () => ManagedPolicyDetail);
export var policyDetailListType = list(n0, _pDLT, 0, () => PolicyDetail);
export var roleDetailListType = list(n0, _rDLT, 0, () => RoleDetail);
export var userDetailListType = list(n0, _uDLT, 0, () => UserDetail);
export var AddRoleToInstanceProfile = op(
  n0,
  _ARTIP,
  0,
  () => AddRoleToInstanceProfileRequest,
  () => Unit
);
export var CreateInstanceProfile = op(
  n0,
  _CIP,
  0,
  () => CreateInstanceProfileRequest,
  () => CreateInstanceProfileResponse
);
export var DeleteInstanceProfile = op(
  n0,
  _DIP,
  0,
  () => DeleteInstanceProfileRequest,
  () => Unit
);
export var GetAccountAuthorizationDetails = op(
  n0,
  _GAAD,
  0,
  () => GetAccountAuthorizationDetailsRequest,
  () => GetAccountAuthorizationDetailsResponse
);
export var GetInstanceProfile = op(
  n0,
  _GIP,
  0,
  () => GetInstanceProfileRequest,
  () => GetInstanceProfileResponse
);
export var ListInstanceProfiles = op(
  n0,
  _LIP,
  0,
  () => ListInstanceProfilesRequest,
  () => ListInstanceProfilesResponse
);
export var ListInstanceProfilesForRole = op(
  n0,
  _LIPFR,
  0,
  () => ListInstanceProfilesForRoleRequest,
  () => ListInstanceProfilesForRoleResponse
);
export var ListInstanceProfileTags = op(
  n0,
  _LIPT,
  0,
  () => ListInstanceProfileTagsRequest,
  () => ListInstanceProfileTagsResponse
);
export var RemoveRoleFromInstanceProfile = op(
  n0,
  _RRFIP,
  0,
  () => RemoveRoleFromInstanceProfileRequest,
  () => Unit
);
export var TagInstanceProfile = op(
  n0,
  _TIP,
  0,
  () => TagInstanceProfileRequest,
  () => Unit
);
export var UntagInstanceProfile = op(
  n0,
  _UIP,
  0,
  () => UntagInstanceProfileRequest,
  () => Unit
);
