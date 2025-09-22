export const _A = "Attributes";
export const _ADE = "AccessDeniedException";
export const _AGM = "AddGroupMember";
export const _AGMR = "AddGroupMemberRequest";
export const _AGMRd = "AddGroupMemberResult";
export const _AV = "AttributeValue";
export const _BAV = "BooleanAttributeValue";
export const _BOOL = "BOOL";
export const _CE = "ConflictException";
export const _CG = "CreateGroup";
export const _CGR = "CreateGroupRequest";
export const _CGRr = "CreateGroupResult";
export const _CT = "ClientToken";
export const _CU = "CreateUser";
export const _CUR = "CreateUserRequest";
export const _CURr = "CreateUserResult";
export const _DG = "DeleteGroup";
export const _DGR = "DeleteGroupRequest";
export const _DGRe = "DeleteGroupResult";
export const _DGRes = "DescribeGroupRequest";
export const _DGResc = "DescribeGroupResult";
export const _DGe = "DescribeGroup";
export const _DI = "DirectoryId";
export const _DN = "DistinguishedName";
export const _DU = "DeleteUser";
export const _DUE = "DirectoryUnavailableException";
export const _DUR = "DeleteUserRequest";
export const _DURe = "DeleteUserResult";
export const _DURes = "DescribeUserRequest";
export const _DUResc = "DescribeUserResult";
export const _DURi = "DisableUserRequest";
export const _DURis = "DisableUserResult";
export const _DUe = "DescribeUser";
export const _DUi = "DisableUser";
export const _E = "Enabled";
export const _EA = "EmailAddress";
export const _G = "Group";
export const _GL = "GroupList";
export const _GN = "GivenName";
export const _GNr = "GroupName";
export const _GS = "GroupScope";
export const _GSL = "GroupSummaryList";
export const _GSr = "GroupSummary";
export const _GT = "GroupType";
export const _Gr = "Groups";
export const _ISE = "InternalServerException";
export const _LG = "ListGroups";
export const _LGFM = "ListGroupsForMember";
export const _LGFMR = "ListGroupsForMemberRequest";
export const _LGFMRi = "ListGroupsForMemberResult";
export const _LGM = "ListGroupMembers";
export const _LGMR = "ListGroupMembersRequest";
export const _LGMRi = "ListGroupMembersResult";
export const _LGR = "ListGroupsRequest";
export const _LGRi = "ListGroupsResult";
export const _LU = "ListUsers";
export const _LUR = "ListUsersRequest";
export const _LURi = "ListUsersResult";
export const _M = "Message";
export const _ML = "MemberList";
export const _MN = "MemberName";
export const _MR = "MemberRealm";
export const _MRa = "MaxResults";
export const _MT = "MemberType";
export const _Me = "Members";
export const _Mem = "Member";
export const _N = "N";
export const _NAV = "NumberAttributeValue";
export const _NT = "NextToken";
export const _OA = "OtherAttributes";
export const _R = "Reason";
export const _RA = "Retry-After";
export const _RAS = "RetryAfterSeconds";
export const _RGM = "RemoveGroupMember";
export const _RGMR = "RemoveGroupMemberRequest";
export const _RGMRe = "RemoveGroupMemberResult";
export const _RNFE = "ResourceNotFoundException";
export const _Re = "Realm";
export const _S = "Surname";
export const _SA = "SearchAttributes";
export const _SAMAN = "SAMAccountName";
export const _SAV = "StringAttributeValue";
export const _SG = "SearchGroups";
export const _SGR = "SearchGroupsRequest";
export const _SGRe = "SearchGroupsResult";
export const _SID = "SID";
export const _SS = "SearchString";
export const _SSAV = "StringSetAttributeValue";
export const _SS_ = "SS";
export const _SU = "SearchUsers";
export const _SUR = "SearchUsersRequest";
export const _SURe = "SearchUsersResult";
export const _S_ = "S";
export const _TE = "ThrottlingException";
export const _U = "Users";
export const _UG = "UpdateGroup";
export const _UGR = "UpdateGroupRequest";
export const _UGRp = "UpdateGroupResult";
export const _UL = "UserList";
export const _UPN = "UserPrincipalName";
export const _US = "UserSummary";
export const _USL = "UserSummaryList";
export const _UT = "UpdateType";
export const _UU = "UpdateUser";
export const _UUR = "UpdateUserRequest";
export const _UURp = "UpdateUserResult";
export const _Us = "User";
export const _VE = "ValidationException";
export const _c = "client";
export const _e = "error";
export const _h = "http";
export const _hE = "httpError";
export const _hH = "httpHeader";
export const _hQ = "httpQuery";
export const _s = "server";
export const n0 = "com.amazonaws.directoryservicedata";

// smithy-typescript generated code
import { error } from "@smithy/core/schema";

import { DirectoryServiceDataServiceException as __DirectoryServiceDataServiceException } from "../models/DirectoryServiceDataServiceException";
import {
  AccessDeniedException as __AccessDeniedException,
  DirectoryUnavailableException as __DirectoryUnavailableException,
  InternalServerException as __InternalServerException,
  ThrottlingException as __ThrottlingException,
  ValidationException as __ValidationException,
} from "../models/index";

/* eslint no-var: 0 */

export var AccessDeniedException = error(
  n0,
  _ADE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_M, _R],
  [0, 0],

  __AccessDeniedException
);
export var DirectoryUnavailableException = error(
  n0,
  _DUE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M, _R],
  [0, 0],

  __DirectoryUnavailableException
);
export var InternalServerException = error(
  n0,
  _ISE,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_M],
  [0],

  __InternalServerException
);
export var ThrottlingException = error(
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_M, _RAS],
  [
    0,
    [
      1,
      {
        [_hH]: _RA,
      },
    ],
  ],

  __ThrottlingException
);
export var ValidationException = error(
  n0,
  _VE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M, _R],
  [0, 0],

  __ValidationException
);
export var Unit = "unit" as const;

export var DirectoryServiceDataServiceException = error(
  "smithy.ts.sdk.synthetic.com.amazonaws.directoryservicedata",
  "DirectoryServiceDataServiceException",
  0,
  [],
  [],
  __DirectoryServiceDataServiceException
);
