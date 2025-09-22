// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AAI,
  _CPN,
  _CRM,
  _CRMR,
  _CRMRr,
  _DRCP,
  _DRCPe,
  _DRCPR,
  _DRCPRe,
  _DRCPRes,
  _DRCPResc,
  _DRM,
  _DRMR,
  _DRMRe,
  _h,
  _hQ,
  _LRM,
  _LRMR,
  _LRMRi,
  _MLe,
  _MN,
  _MR,
  _mr,
  _Na,
  _NT,
  _nt,
  _RI,
  _Ro,
  _St,
  _URCP,
  _URCPR,
  _URCPRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateRoleMembershipRequest = struct(
  n0,
  _CRMR,
  0,
  [_MN, _AAI, _Na, _Ro],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var CreateRoleMembershipResponse = struct(n0, _CRMRr, 0, [_RI, _St], [0, [1, 32]]);
export var DeleteRoleCustomPermissionRequest = struct(
  n0,
  _DRCPR,
  0,
  [_Ro, _AAI, _Na],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var DeleteRoleCustomPermissionResponse = struct(n0, _DRCPRe, 0, [_RI, _St], [0, 1]);
export var DeleteRoleMembershipRequest = struct(
  n0,
  _DRMR,
  0,
  [_MN, _Ro, _AAI, _Na],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var DeleteRoleMembershipResponse = struct(n0, _DRMRe, 0, [_RI, _St], [0, [1, 32]]);
export var DescribeRoleCustomPermissionRequest = struct(
  n0,
  _DRCPRes,
  0,
  [_Ro, _AAI, _Na],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var DescribeRoleCustomPermissionResponse = struct(n0, _DRCPResc, 0, [_CPN, _RI, _St], [0, 0, 1]);
export var ListRoleMembershipsRequest = struct(
  n0,
  _LRMR,
  0,
  [_Ro, _NT, _MR, _AAI, _Na],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _nt,
      },
    ],
    [
      1,
      {
        [_hQ]: _mr,
      },
    ],
    [0, 1],
    [0, 1],
  ]
);
export var ListRoleMembershipsResponse = struct(n0, _LRMRi, 0, [_MLe, _NT, _RI, _St], [64 | 0, 0, 0, [1, 32]]);
export var UpdateRoleCustomPermissionRequest = struct(
  n0,
  _URCPR,
  0,
  [_CPN, _Ro, _AAI, _Na],
  [0, [0, 1], [0, 1], [0, 1]]
);
export var UpdateRoleCustomPermissionResponse = struct(n0, _URCPRp, 0, [_RI, _St], [0, 1]);
export var CreateRoleMembership = op(
  n0,
  _CRM,
  {
    [_h]: ["POST", "/accounts/{AwsAccountId}/namespaces/{Namespace}/roles/{Role}/members/{MemberName}", 200],
  },
  () => CreateRoleMembershipRequest,
  () => CreateRoleMembershipResponse
);
export var DeleteRoleCustomPermission = op(
  n0,
  _DRCP,
  {
    [_h]: ["DELETE", "/accounts/{AwsAccountId}/namespaces/{Namespace}/roles/{Role}/custom-permission", 200],
  },
  () => DeleteRoleCustomPermissionRequest,
  () => DeleteRoleCustomPermissionResponse
);
export var DeleteRoleMembership = op(
  n0,
  _DRM,
  {
    [_h]: ["DELETE", "/accounts/{AwsAccountId}/namespaces/{Namespace}/roles/{Role}/members/{MemberName}", 200],
  },
  () => DeleteRoleMembershipRequest,
  () => DeleteRoleMembershipResponse
);
export var DescribeRoleCustomPermission = op(
  n0,
  _DRCPe,
  {
    [_h]: ["GET", "/accounts/{AwsAccountId}/namespaces/{Namespace}/roles/{Role}/custom-permission", 200],
  },
  () => DescribeRoleCustomPermissionRequest,
  () => DescribeRoleCustomPermissionResponse
);
export var ListRoleMemberships = op(
  n0,
  _LRM,
  {
    [_h]: ["GET", "/accounts/{AwsAccountId}/namespaces/{Namespace}/roles/{Role}/members", 200],
  },
  () => ListRoleMembershipsRequest,
  () => ListRoleMembershipsResponse
);
export var UpdateRoleCustomPermission = op(
  n0,
  _URCP,
  {
    [_h]: ["PUT", "/accounts/{AwsAccountId}/namespaces/{Namespace}/roles/{Role}/custom-permission", 200],
  },
  () => UpdateRoleCustomPermissionRequest,
  () => UpdateRoleCustomPermissionResponse
);
