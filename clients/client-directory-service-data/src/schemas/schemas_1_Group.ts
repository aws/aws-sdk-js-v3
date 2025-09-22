// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { ResourceNotFoundException as __ResourceNotFoundException } from "../models/index";
import {
  _AGM,
  _AGMR,
  _AGMRd,
  _c,
  _CT,
  _DG,
  _DGe,
  _DGR,
  _DGRe,
  _DGRes,
  _DGResc,
  _DI,
  _DN,
  _DU,
  _DUe,
  _DUi,
  _DUR,
  _DURe,
  _DURes,
  _DUResc,
  _DURi,
  _DURis,
  _E,
  _e,
  _EA,
  _GN,
  _GNr,
  _Gr,
  _GS,
  _GT,
  _h,
  _hE,
  _hQ,
  _LGFM,
  _LGFMR,
  _LGFMRi,
  _LGM,
  _LGMR,
  _LGMRi,
  _M,
  _Me,
  _Mem,
  _ML,
  _MN,
  _MR,
  _MRa,
  _MT,
  _NT,
  _OA,
  _Re,
  _RGM,
  _RGMR,
  _RGMRe,
  _RNFE,
  _S,
  _SAMAN,
  _SID,
  _UG,
  _UGR,
  _UGRp,
  _UPN,
  _UT,
  _UU,
  _UUR,
  _UURp,
  n0,
} from "./schemas_0";
import { Attributes, EmailAddress } from "./schemas_2_Group";
import { DistinguishedName, GroupSummaryList, NextToken, UserPrincipalName } from "./schemas_3_Group";
import { GivenName, Surname } from "./schemas_6_User";

/* eslint no-var: 0 */

export var AddGroupMemberRequest = struct(
  n0,
  _AGMR,
  0,
  [_DI, _GNr, _MN, _MR, _CT],
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
    [0, 4],
  ]
);
export var AddGroupMemberResult = struct(n0, _AGMRd, 0, [], []);
export var DeleteGroupRequest = struct(
  n0,
  _DGR,
  0,
  [_DI, _SAMAN, _CT],
  [
    [
      0,
      {
        [_hQ]: _DI,
      },
    ],
    0,
    [0, 4],
  ]
);
export var DeleteGroupResult = struct(n0, _DGRe, 0, [], []);
export var DeleteUserRequest = struct(
  n0,
  _DUR,
  0,
  [_DI, _SAMAN, _CT],
  [
    [
      0,
      {
        [_hQ]: _DI,
      },
    ],
    0,
    [0, 4],
  ]
);
export var DeleteUserResult = struct(n0, _DURe, 0, [], []);
export var DescribeGroupRequest = struct(
  n0,
  _DGRes,
  0,
  [_DI, _Re, _SAMAN, _OA],
  [
    [
      0,
      {
        [_hQ]: _DI,
      },
    ],
    0,
    0,
    64 | 0,
  ]
);
export var DescribeGroupResult = struct(
  n0,
  _DGResc,
  0,
  [_DI, _Re, _SID, _SAMAN, _DN, _GT, _GS, _OA],
  [0, 0, 0, 0, [() => DistinguishedName, 0], 0, 0, [() => Attributes, 0]]
);
export var DescribeUserRequest = struct(
  n0,
  _DURes,
  0,
  [_DI, _SAMAN, _OA, _Re],
  [
    [
      0,
      {
        [_hQ]: _DI,
      },
    ],
    0,
    64 | 0,
    0,
  ]
);
export var DescribeUserResult = struct(
  n0,
  _DUResc,
  0,
  [_DI, _Re, _SID, _SAMAN, _DN, _UPN, _EA, _GN, _S, _E, _OA],
  [
    0,
    0,
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
export var DisableUserRequest = struct(
  n0,
  _DURi,
  0,
  [_DI, _SAMAN, _CT],
  [
    [
      0,
      {
        [_hQ]: _DI,
      },
    ],
    0,
    [0, 4],
  ]
);
export var DisableUserResult = struct(n0, _DURis, 0, [], []);
export var ListGroupMembersRequest = struct(
  n0,
  _LGMR,
  0,
  [_DI, _Re, _MR, _SAMAN, _NT, _MRa],
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
    [() => NextToken, 0],
    1,
  ]
);
export var ListGroupMembersResult = struct(
  n0,
  _LGMRi,
  0,
  [_DI, _Re, _MR, _Me, _NT],
  [0, 0, 0, () => MemberList, [() => NextToken, 0]]
);
export var ListGroupsForMemberRequest = struct(
  n0,
  _LGFMR,
  0,
  [_DI, _Re, _MR, _SAMAN, _NT, _MRa],
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
    [() => NextToken, 0],
    1,
  ]
);
export var ListGroupsForMemberResult = struct(
  n0,
  _LGFMRi,
  0,
  [_DI, _Re, _MR, _Gr, _NT],
  [0, 0, 0, () => GroupSummaryList, [() => NextToken, 0]]
);
export var Member = struct(n0, _Mem, 0, [_SID, _SAMAN, _MT], [0, 0, 0]);
export var RemoveGroupMemberRequest = struct(
  n0,
  _RGMR,
  0,
  [_DI, _GNr, _MN, _MR, _CT],
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
    [0, 4],
  ]
);
export var RemoveGroupMemberResult = struct(n0, _RGMRe, 0, [], []);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M],
  [0],

  __ResourceNotFoundException
);
export var UpdateGroupRequest = struct(
  n0,
  _UGR,
  0,
  [_DI, _SAMAN, _GT, _GS, _OA, _UT, _CT],
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
    0,
    [0, 4],
  ]
);
export var UpdateGroupResult = struct(n0, _UGRp, 0, [], []);
export var UpdateUserRequest = struct(
  n0,
  _UUR,
  0,
  [_DI, _SAMAN, _EA, _GN, _S, _OA, _UT, _CT],
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
    0,
    [0, 4],
  ]
);
export var UpdateUserResult = struct(n0, _UURp, 0, [], []);
export var MemberList = list(n0, _ML, 0, () => Member);
export var AddGroupMember = op(
  n0,
  _AGM,
  {
    [_h]: ["POST", "/GroupMemberships/AddGroupMember", 200],
  },
  () => AddGroupMemberRequest,
  () => AddGroupMemberResult
);
export var DeleteGroup = op(
  n0,
  _DG,
  {
    [_h]: ["POST", "/Groups/DeleteGroup", 200],
  },
  () => DeleteGroupRequest,
  () => DeleteGroupResult
);
export var DeleteUser = op(
  n0,
  _DU,
  {
    [_h]: ["POST", "/Users/DeleteUser", 200],
  },
  () => DeleteUserRequest,
  () => DeleteUserResult
);
export var DescribeGroup = op(
  n0,
  _DGe,
  {
    [_h]: ["POST", "/Groups/DescribeGroup", 200],
  },
  () => DescribeGroupRequest,
  () => DescribeGroupResult
);
export var DescribeUser = op(
  n0,
  _DUe,
  {
    [_h]: ["POST", "/Users/DescribeUser", 200],
  },
  () => DescribeUserRequest,
  () => DescribeUserResult
);
export var DisableUser = op(
  n0,
  _DUi,
  {
    [_h]: ["POST", "/Users/DisableUser", 200],
  },
  () => DisableUserRequest,
  () => DisableUserResult
);
export var ListGroupMembers = op(
  n0,
  _LGM,
  {
    [_h]: ["POST", "/GroupMemberships/ListGroupMembers", 200],
  },
  () => ListGroupMembersRequest,
  () => ListGroupMembersResult
);
export var ListGroupsForMember = op(
  n0,
  _LGFM,
  {
    [_h]: ["POST", "/GroupMemberships/ListGroupsForMember", 200],
  },
  () => ListGroupsForMemberRequest,
  () => ListGroupsForMemberResult
);
export var RemoveGroupMember = op(
  n0,
  _RGM,
  {
    [_h]: ["POST", "/GroupMemberships/RemoveGroupMember", 200],
  },
  () => RemoveGroupMemberRequest,
  () => RemoveGroupMemberResult
);
export var UpdateGroup = op(
  n0,
  _UG,
  {
    [_h]: ["POST", "/Groups/UpdateGroup", 200],
  },
  () => UpdateGroupRequest,
  () => UpdateGroupResult
);
export var UpdateUser = op(
  n0,
  _UU,
  {
    [_h]: ["POST", "/Users/UpdateUser", 200],
  },
  () => UpdateUserRequest,
  () => UpdateUserResult
);
