export const _A = "Address";
export const _ADE = "AccessDeniedException";
export const _AI = "AlternateIdentifier";
export const _AO = "AttributeOperation";
export const _AOt = "AttributeOperations";
export const _AP = "AttributePath";
export const _AV = "AttributeValue";
export const _Ad = "Addresses";
export const _C = "Country";
export const _CE = "ConflictException";
export const _CG = "CreateGroup";
export const _CGM = "CreateGroupMembership";
export const _CGMR = "CreateGroupMembershipRequest";
export const _CGMRr = "CreateGroupMembershipResponse";
export const _CGR = "CreateGroupRequest";
export const _CGRr = "CreateGroupResponse";
export const _CU = "CreateUser";
export const _CUR = "CreateUserRequest";
export const _CURr = "CreateUserResponse";
export const _D = "Description";
export const _DG = "DeleteGroup";
export const _DGM = "DeleteGroupMembership";
export const _DGMR = "DeleteGroupMembershipRequest";
export const _DGMRe = "DeleteGroupMembershipResponse";
export const _DGMRes = "DescribeGroupMembershipRequest";
export const _DGMResc = "DescribeGroupMembershipResponse";
export const _DGMe = "DescribeGroupMembership";
export const _DGR = "DeleteGroupRequest";
export const _DGRe = "DeleteGroupResponse";
export const _DGRes = "DescribeGroupRequest";
export const _DGResc = "DescribeGroupResponse";
export const _DGe = "DescribeGroup";
export const _DN = "DisplayName";
export const _DU = "DeleteUser";
export const _DUR = "DeleteUserRequest";
export const _DURe = "DeleteUserResponse";
export const _DURes = "DescribeUserRequest";
export const _DUResc = "DescribeUserResponse";
export const _DUe = "DescribeUser";
export const _E = "Emails";
export const _EI = "ExternalIds";
export const _EII = "ExternalIdIdentifier";
export const _EIIx = "ExternalIdIssuer";
export const _EIx = "ExternalId";
export const _Em = "Email";
export const _F = "Formatted";
export const _FN = "FamilyName";
export const _Fi = "Filter";
export const _Fil = "Filters";
export const _G = "Group";
export const _GDN = "GroupDisplayName";
export const _GGI = "GetGroupId";
export const _GGIR = "GetGroupIdRequest";
export const _GGIRe = "GetGroupIdResponse";
export const _GGMI = "GetGroupMembershipId";
export const _GGMIR = "GetGroupMembershipIdRequest";
export const _GGMIRe = "GetGroupMembershipIdResponse";
export const _GI = "GroupId";
export const _GIr = "GroupIds";
export const _GM = "GroupMembership";
export const _GMER = "GroupMembershipExistenceResult";
export const _GMERr = "GroupMembershipExistenceResults";
export const _GMr = "GroupMemberships";
export const _GN = "GivenName";
export const _GUI = "GetUserId";
export const _GUIR = "GetUserIdRequest";
export const _GUIRe = "GetUserIdResponse";
export const _Gr = "Groups";
export const _HP = "HonorificPrefix";
export const _HS = "HonorificSuffix";
export const _I = "Issuer";
export const _IMIG = "IsMemberInGroups";
export const _IMIGR = "IsMemberInGroupsRequest";
export const _IMIGRs = "IsMemberInGroupsResponse";
export const _ISE = "InternalServerException";
export const _ISI = "IdentityStoreId";
export const _Id = "Id";
export const _L = "Locality";
export const _LG = "ListGroups";
export const _LGM = "ListGroupMemberships";
export const _LGMFM = "ListGroupMembershipsForMember";
export const _LGMFMR = "ListGroupMembershipsForMemberRequest";
export const _LGMFMRi = "ListGroupMembershipsForMemberResponse";
export const _LGMR = "ListGroupMembershipsRequest";
export const _LGMRi = "ListGroupMembershipsResponse";
export const _LGR = "ListGroupsRequest";
export const _LGRi = "ListGroupsResponse";
export const _LU = "ListUsers";
export const _LUR = "ListUsersRequest";
export const _LURi = "ListUsersResponse";
export const _Lo = "Locale";
export const _M = "Message";
export const _ME = "MembershipExists";
export const _MI = "MemberId";
export const _MIe = "MembershipId";
export const _MN = "MiddleName";
export const _MR = "MaxResults";
export const _N = "Name";
export const _NN = "NickName";
export const _NT = "NextToken";
export const _O = "Operations";
export const _P = "Primary";
export const _PC = "PostalCode";
export const _PL = "PreferredLanguage";
export const _PN = "PhoneNumbers";
export const _PNh = "PhoneNumber";
export const _PU = "ProfileUrl";
export const _R = "Region";
export const _RA = "Retry-After";
export const _RAS = "RetryAfterSeconds";
export const _RI = "RequestId";
export const _RIe = "ResourceId";
export const _RNFE = "ResourceNotFoundException";
export const _RT = "ResourceType";
export const _Re = "Reason";
export const _Res = "Results";
export const _SA = "StreetAddress";
export const _SBT = "SensitiveBooleanType";
export const _SQEE = "ServiceQuotaExceededException";
export const _SST = "SensitiveStringType";
export const _T = "Type";
export const _TE = "ThrottlingException";
export const _Ti = "Title";
export const _Tim = "Timezone";
export const _U = "Users";
export const _UA = "UniqueAttribute";
export const _UG = "UpdateGroup";
export const _UGR = "UpdateGroupRequest";
export const _UGRp = "UpdateGroupResponse";
export const _UI = "UserId";
export const _UN = "UserName";
export const _UT = "UserType";
export const _UU = "UpdateUser";
export const _UUR = "UpdateUserRequest";
export const _UURp = "UpdateUserResponse";
export const _Us = "User";
export const _V = "Value";
export const _VE = "ValidationException";
export const _c = "client";
export const _e = "error";
export const _hE = "httpError";
export const _hH = "httpHeader";
export const _s = "server";
export const n0 = "com.amazonaws.identitystore";

// smithy-typescript generated code
import { error } from "@smithy/core/schema";

import { IdentitystoreServiceException as __IdentitystoreServiceException } from "../models/IdentitystoreServiceException";
import {
  AccessDeniedException as __AccessDeniedException,
  InternalServerException as __InternalServerException,
  ResourceNotFoundException as __ResourceNotFoundException,
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
  [_M, _RI],
  [0, 0],

  __AccessDeniedException
);
export var InternalServerException = error(
  n0,
  _ISE,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_M, _RI, _RAS],
  [
    0,
    0,
    [
      1,
      {
        [_hH]: _RA,
      },
    ],
  ],

  __InternalServerException
);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_RT, _RIe, _M, _RI],
  [0, 0, 0, 0],

  __ResourceNotFoundException
);
export var ThrottlingException = error(
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_M, _RI, _RAS],
  [
    0,
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
  [_M, _RI],
  [0, 0],

  __ValidationException
);
export var IdentitystoreServiceException = error(
  "smithy.ts.sdk.synthetic.com.amazonaws.identitystore",
  "IdentitystoreServiceException",
  0,
  [],
  [],
  __IdentitystoreServiceException
);
