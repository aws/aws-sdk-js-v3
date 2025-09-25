// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _CG,
  _CGR,
  _CGRr,
  _CT,
  _CU,
  _CUR,
  _CURr,
  _DI,
  _DN,
  _E,
  _EA,
  _G,
  _GL,
  _GN,
  _Gr,
  _GS,
  _GSL,
  _GSr,
  _GT,
  _h,
  _hQ,
  _LG,
  _LGR,
  _LGRi,
  _LU,
  _LUR,
  _LURi,
  _MRa,
  _NT,
  _OA,
  _Re,
  _S,
  _SA,
  _SAMAN,
  _SG,
  _SGR,
  _SGRe,
  _SID,
  _SS,
  _SU,
  _SUR,
  _SURe,
  _U,
  _UL,
  _UPN,
  _US,
  _Us,
  _USL,
  n0,
} from "./schemas_0";
import { Attributes, EmailAddress } from "./schemas_2_Group";
import { GivenName, Surname } from "./schemas_6_User";

/* eslint no-var: 0 */

export var DistinguishedName = sim(n0, _DN, 0, 8);
export var NextToken = sim(n0, _NT, 0, 8);
export var SearchString = sim(n0, _SS, 0, 8);
export var UserPrincipalName = sim(n0, _UPN, 0, 8);
export var CreateGroupRequest = struct(
  n0,
  _CGR,
  0,
  [_DI, _SAMAN, _GT, _GS, _OA, _CT],
  [
    [
      0,
      {
        [_hQ]: _DI,
      },
    ],
    0,
    0,
    0,
    [() => Attributes, 0],
    [0, 4],
  ]
);
export var CreateGroupResult = struct(n0, _CGRr, 0, [_DI, _SAMAN, _SID], [0, 0, 0]);
export var CreateUserRequest = struct(
  n0,
  _CUR,
  0,
  [_DI, _SAMAN, _EA, _GN, _S, _OA, _CT],
  [
    [
      0,
      {
        [_hQ]: _DI,
      },
    ],
    0,
    [() => EmailAddress, 0],
    [() => GivenName, 0],
    [() => Surname, 0],
    [() => Attributes, 0],
    [0, 4],
  ]
);
export var CreateUserResult = struct(n0, _CURr, 0, [_DI, _SID, _SAMAN], [0, 0, 0]);
export var Group = struct(
  n0,
  _G,
  0,
  [_SID, _SAMAN, _DN, _GT, _GS, _OA],
  [0, 0, [() => DistinguishedName, 0], 0, 0, [() => Attributes, 0]]
);
export var GroupSummary = struct(n0, _GSr, 0, [_SID, _SAMAN, _GT, _GS], [0, 0, 0, 0]);
export var ListGroupsRequest = struct(
  n0,
  _LGR,
  0,
  [_DI, _Re, _NT, _MRa],
  [
    [
      0,
      {
        [_hQ]: _DI,
      },
    ],
    0,
    [() => NextToken, 0],
    1,
  ]
);
export var ListGroupsResult = struct(
  n0,
  _LGRi,
  0,
  [_DI, _Re, _Gr, _NT],
  [0, 0, () => GroupSummaryList, [() => NextToken, 0]]
);
export var ListUsersRequest = struct(
  n0,
  _LUR,
  0,
  [_DI, _Re, _NT, _MRa],
  [
    [
      0,
      {
        [_hQ]: _DI,
      },
    ],
    0,
    [() => NextToken, 0],
    1,
  ]
);
export var ListUsersResult = struct(
  n0,
  _LURi,
  0,
  [_DI, _Re, _U, _NT],
  [0, 0, [() => UserSummaryList, 0], [() => NextToken, 0]]
);
export var SearchGroupsRequest = struct(
  n0,
  _SGR,
  0,
  [_DI, _SS, _SA, _Re, _NT, _MRa],
  [
    [
      0,
      {
        [_hQ]: _DI,
      },
    ],
    [() => SearchString, 0],
    64 | 0,
    0,
    [() => NextToken, 0],
    1,
  ]
);
export var SearchGroupsResult = struct(
  n0,
  _SGRe,
  0,
  [_DI, _Re, _Gr, _NT],
  [0, 0, [() => GroupList, 0], [() => NextToken, 0]]
);
export var SearchUsersRequest = struct(
  n0,
  _SUR,
  0,
  [_DI, _Re, _SS, _SA, _NT, _MRa],
  [
    [
      0,
      {
        [_hQ]: _DI,
      },
    ],
    0,
    [() => SearchString, 0],
    64 | 0,
    [() => NextToken, 0],
    1,
  ]
);
export var SearchUsersResult = struct(
  n0,
  _SURe,
  0,
  [_DI, _Re, _U, _NT],
  [0, 0, [() => UserList, 0], [() => NextToken, 0]]
);
export var User = struct(
  n0,
  _Us,
  0,
  [_SID, _SAMAN, _DN, _UPN, _EA, _GN, _S, _E, _OA],
  [
    0,
    0,
    [() => DistinguishedName, 0],
    [() => UserPrincipalName, 0],
    [() => EmailAddress, 0],
    [() => GivenName, 0],
    [() => Surname, 0],
    2,
    [() => Attributes, 0],
  ]
);
export var UserSummary = struct(
  n0,
  _US,
  0,
  [_SID, _SAMAN, _GN, _S, _E],
  [0, 0, [() => GivenName, 0], [() => Surname, 0], 2]
);
export var GroupList = list(n0, _GL, 0, [() => Group, 0]);
export var GroupSummaryList = list(n0, _GSL, 0, () => GroupSummary);
export var LdapDisplayNameList = 64 | 0;

export var UserList = list(n0, _UL, 0, [() => User, 0]);
export var UserSummaryList = list(n0, _USL, 0, [() => UserSummary, 0]);
export var CreateGroup = op(
  n0,
  _CG,
  {
    [_h]: ["POST", "/Groups/CreateGroup", 200],
  },
  () => CreateGroupRequest,
  () => CreateGroupResult
);
export var CreateUser = op(
  n0,
  _CU,
  {
    [_h]: ["POST", "/Users/CreateUser", 200],
  },
  () => CreateUserRequest,
  () => CreateUserResult
);
export var ListGroups = op(
  n0,
  _LG,
  {
    [_h]: ["POST", "/Groups/ListGroups", 200],
  },
  () => ListGroupsRequest,
  () => ListGroupsResult
);
export var ListUsers = op(
  n0,
  _LU,
  {
    [_h]: ["POST", "/Users/ListUsers", 200],
  },
  () => ListUsersRequest,
  () => ListUsersResult
);
export var SearchGroups = op(
  n0,
  _SG,
  {
    [_h]: ["POST", "/Groups/SearchGroups", 200],
  },
  () => SearchGroupsRequest,
  () => SearchGroupsResult
);
export var SearchUsers = op(
  n0,
  _SU,
  {
    [_h]: ["POST", "/Users/SearchUsers", 200],
  },
  () => SearchUsersRequest,
  () => SearchUsersResult
);
