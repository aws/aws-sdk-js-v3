// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _ARPD,
  _AWSSN,
  _CD,
  _CR,
  _CRR,
  _CRRr,
  _CS,
  _CSLR,
  _CSLRR,
  _CSLRRr,
  _D,
  _GR,
  _GRR,
  _GRRe,
  _IT,
  _LR,
  _LRR,
  _LRRi,
  _LUD,
  _Ma,
  _MI,
  _MSD,
  _P,
  _PB,
  _PPa,
  _R,
  _RI,
  _rLT,
  _RLU,
  _RN,
  _Ro,
  _Rol,
  _T,
  _URD,
  _URDR,
  _URDRp,
  _URp,
  _URRp,
  _URRpd,
  AttachedPermissionsBoundary,
  n0,
  tagListType,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateRoleRequest = struct(
  n0,
  _CRR,
  0,
  [_P, _RN, _ARPD, _D, _MSD, _PB, _T],
  [0, 0, 0, 0, 1, 0, () => tagListType]
);
export var CreateRoleResponse = struct(n0, _CRRr, 0, [_Ro], [() => Role]);
export var CreateServiceLinkedRoleRequest = struct(n0, _CSLRR, 0, [_AWSSN, _D, _CS], [0, 0, 0]);
export var CreateServiceLinkedRoleResponse = struct(n0, _CSLRRr, 0, [_Ro], [() => Role]);
export var GetRoleRequest = struct(n0, _GRR, 0, [_RN], [0]);
export var GetRoleResponse = struct(n0, _GRRe, 0, [_Ro], [() => Role]);
export var ListRolesRequest = struct(n0, _LRR, 0, [_PPa, _Ma, _MI], [0, 0, 1]);
export var ListRolesResponse = struct(n0, _LRRi, 0, [_Rol, _IT, _Ma], [() => roleListType, 2, 0]);
export var Role = struct(
  n0,
  _Ro,
  0,
  [_P, _RN, _RI, _A, _CD, _ARPD, _D, _MSD, _PB, _T, _RLU],
  [0, 0, 0, 0, 4, 0, 0, 1, () => AttachedPermissionsBoundary, () => tagListType, () => RoleLastUsed]
);
export var RoleLastUsed = struct(n0, _RLU, 0, [_LUD, _R], [4, 0]);
export var UpdateRoleDescriptionRequest = struct(n0, _URDR, 0, [_RN, _D], [0, 0]);
export var UpdateRoleDescriptionResponse = struct(n0, _URDRp, 0, [_Ro], [() => Role]);
export var UpdateRoleRequest = struct(n0, _URRp, 0, [_RN, _D, _MSD], [0, 0, 1]);
export var UpdateRoleResponse = struct(n0, _URRpd, 0, [], []);
export var roleListType = list(n0, _rLT, 0, () => Role);
export var CreateRole = op(
  n0,
  _CR,
  0,
  () => CreateRoleRequest,
  () => CreateRoleResponse
);
export var CreateServiceLinkedRole = op(
  n0,
  _CSLR,
  0,
  () => CreateServiceLinkedRoleRequest,
  () => CreateServiceLinkedRoleResponse
);
export var GetRole = op(
  n0,
  _GR,
  0,
  () => GetRoleRequest,
  () => GetRoleResponse
);
export var ListRoles = op(
  n0,
  _LR,
  0,
  () => ListRolesRequest,
  () => ListRolesResponse
);
export var UpdateRole = op(
  n0,
  _URp,
  0,
  () => UpdateRoleRequest,
  () => UpdateRoleResponse
);
export var UpdateRoleDescription = op(
  n0,
  _URD,
  0,
  () => UpdateRoleDescriptionRequest,
  () => UpdateRoleDescriptionResponse
);
