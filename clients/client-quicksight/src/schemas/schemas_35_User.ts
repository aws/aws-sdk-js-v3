// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AAc,
  _AAI,
  _Act,
  _AIAMPA,
  _AIAMPAL,
  _ANs,
  _Ar,
  _CFPU,
  _CPN,
  _DUCP,
  _DUCPR,
  _DUCPRe,
  _DUe,
  _DUes,
  _DUR,
  _DURe,
  _DURes,
  _DUResc,
  _ELFPT,
  _ELFPU,
  _ELI,
  _Em,
  _GLr,
  _h,
  _hQ,
  _IAa,
  _ITd,
  _LIAMPAFU,
  _LIAMPAFUR,
  _LIAMPAFURi,
  _LU,
  _LUG,
  _LUGR,
  _LUGRi,
  _LUR,
  _LURi,
  _MR,
  _mr,
  _Na,
  _NT,
  _nt,
  _PA,
  _PIr,
  _RI,
  _Ro,
  _RU,
  _RUR,
  _RURe,
  _SNe,
  _St,
  _Ta,
  _UCP,
  _UIU,
  _UL,
  _UN,
  _UR,
  _Us,
  _UU,
  _UUCP,
  _UUCPR,
  _UUCPRp,
  _UUR,
  _UURp,
  n0,
  TagList,
} from "./schemas_0";
import { GroupList } from "./schemas_25_Group";

/* eslint no-var: 0 */

export var ActiveIAMPolicyAssignment = struct(n0, _AIAMPA, 0, [_ANs, _PA], [0, 0]);
export var DeleteUserCustomPermissionRequest = struct(
  n0,
  _DUCPR,
  0,
  [_UN, _AAI, _Na],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var DeleteUserCustomPermissionResponse = struct(n0, _DUCPRe, 0, [_RI, _St], [0, [1, 32]]);
export var DeleteUserRequest = struct(
  n0,
  _DUR,
  0,
  [_UN, _AAI, _Na],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var DeleteUserResponse = struct(n0, _DURe, 0, [_RI, _St], [0, [1, 32]]);
export var DescribeUserRequest = struct(
  n0,
  _DURes,
  0,
  [_UN, _AAI, _Na],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var DescribeUserResponse = struct(n0, _DUResc, 0, [_Us, _RI, _St], [() => User, 0, [1, 32]]);
export var ListIAMPolicyAssignmentsForUserRequest = struct(
  n0,
  _LIAMPAFUR,
  0,
  [_AAI, _UN, _NT, _MR, _Na],
  [
    [0, 1],
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
  ]
);
export var ListIAMPolicyAssignmentsForUserResponse = struct(
  n0,
  _LIAMPAFURi,
  0,
  [_AAc, _RI, _NT, _St],
  [() => ActiveIAMPolicyAssignmentList, 0, 0, [1, 32]]
);
export var ListUserGroupsRequest = struct(
  n0,
  _LUGR,
  0,
  [_UN, _AAI, _Na, _NT, _MR],
  [
    [0, 1],
    [0, 1],
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
  ]
);
export var ListUserGroupsResponse = struct(n0, _LUGRi, 0, [_GLr, _NT, _RI, _St], [() => GroupList, 0, 0, [1, 32]]);
export var ListUsersRequest = struct(
  n0,
  _LUR,
  0,
  [_AAI, _NT, _MR, _Na],
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
  ]
);
export var ListUsersResponse = struct(n0, _LURi, 0, [_UL, _NT, _RI, _St], [() => UserList, 0, 0, [1, 32]]);
export var RegisterUserRequest = struct(
  n0,
  _RUR,
  0,
  [_ITd, _Em, _UR, _IAa, _SNe, _AAI, _Na, _UN, _CPN, _ELFPT, _CFPU, _ELI, _Ta],
  [0, 0, 0, 0, 0, [0, 1], [0, 1], 0, 0, 0, 0, 0, () => TagList]
);
export var RegisterUserResponse = struct(n0, _RURe, 0, [_Us, _UIU, _RI, _St], [() => User, 0, 0, [1, 32]]);
export var UpdateUserCustomPermissionRequest = struct(
  n0,
  _UUCPR,
  0,
  [_UN, _AAI, _Na, _CPN],
  [[0, 1], [0, 1], [0, 1], 0]
);
export var UpdateUserCustomPermissionResponse = struct(n0, _UUCPRp, 0, [_RI, _St], [0, [1, 32]]);
export var UpdateUserRequest = struct(
  n0,
  _UUR,
  0,
  [_UN, _AAI, _Na, _Em, _Ro, _CPN, _UCP, _ELFPT, _CFPU, _ELI],
  [[0, 1], [0, 1], [0, 1], 0, 0, 0, 2, 0, 0, 0]
);
export var UpdateUserResponse = struct(n0, _UURp, 0, [_Us, _RI, _St], [() => User, 0, [1, 32]]);
export var User = struct(
  n0,
  _Us,
  0,
  [_Ar, _UN, _Em, _Ro, _ITd, _Act, _PIr, _CPN, _ELFPT, _ELFPU, _ELI],
  [0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0]
);
export var ActiveIAMPolicyAssignmentList = list(n0, _AIAMPAL, 0, () => ActiveIAMPolicyAssignment);
export var UserList = list(n0, _UL, 0, () => User);
export var DeleteUser = op(
  n0,
  _DUe,
  {
    [_h]: ["DELETE", "/accounts/{AwsAccountId}/namespaces/{Namespace}/users/{UserName}", 200],
  },
  () => DeleteUserRequest,
  () => DeleteUserResponse
);
export var DeleteUserCustomPermission = op(
  n0,
  _DUCP,
  {
    [_h]: ["DELETE", "/accounts/{AwsAccountId}/namespaces/{Namespace}/users/{UserName}/custom-permission", 200],
  },
  () => DeleteUserCustomPermissionRequest,
  () => DeleteUserCustomPermissionResponse
);
export var DescribeUser = op(
  n0,
  _DUes,
  {
    [_h]: ["GET", "/accounts/{AwsAccountId}/namespaces/{Namespace}/users/{UserName}", 200],
  },
  () => DescribeUserRequest,
  () => DescribeUserResponse
);
export var ListIAMPolicyAssignmentsForUser = op(
  n0,
  _LIAMPAFU,
  {
    [_h]: ["GET", "/accounts/{AwsAccountId}/namespaces/{Namespace}/users/{UserName}/iam-policy-assignments", 200],
  },
  () => ListIAMPolicyAssignmentsForUserRequest,
  () => ListIAMPolicyAssignmentsForUserResponse
);
export var ListUserGroups = op(
  n0,
  _LUG,
  {
    [_h]: ["GET", "/accounts/{AwsAccountId}/namespaces/{Namespace}/users/{UserName}/groups", 200],
  },
  () => ListUserGroupsRequest,
  () => ListUserGroupsResponse
);
export var ListUsers = op(
  n0,
  _LU,
  {
    [_h]: ["GET", "/accounts/{AwsAccountId}/namespaces/{Namespace}/users", 200],
  },
  () => ListUsersRequest,
  () => ListUsersResponse
);
export var RegisterUser = op(
  n0,
  _RU,
  {
    [_h]: ["POST", "/accounts/{AwsAccountId}/namespaces/{Namespace}/users", 200],
  },
  () => RegisterUserRequest,
  () => RegisterUserResponse
);
export var UpdateUser = op(
  n0,
  _UU,
  {
    [_h]: ["PUT", "/accounts/{AwsAccountId}/namespaces/{Namespace}/users/{UserName}", 200],
  },
  () => UpdateUserRequest,
  () => UpdateUserResponse
);
export var UpdateUserCustomPermission = op(
  n0,
  _UUCP,
  {
    [_h]: ["PUT", "/accounts/{AwsAccountId}/namespaces/{Namespace}/users/{UserName}/custom-permission", 200],
  },
  () => UpdateUserCustomPermissionRequest,
  () => UpdateUserCustomPermissionResponse
);
