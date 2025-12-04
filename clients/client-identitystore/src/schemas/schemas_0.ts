const _A = "Address";
const _ADE = "AccessDeniedException";
const _AI = "AlternateIdentifier";
const _AO = "AttributeOperation";
const _AOt = "AttributeOperations";
const _AP = "AttributePath";
const _AV = "AttributeValue";
const _Ad = "Addresses";
const _B = "Birthdate";
const _C = "Country";
const _CA = "CreatedAt";
const _CB = "CreatedBy";
const _CE = "ConflictException";
const _CG = "CreateGroup";
const _CGM = "CreateGroupMembership";
const _CGMR = "CreateGroupMembershipRequest";
const _CGMRr = "CreateGroupMembershipResponse";
const _CGR = "CreateGroupRequest";
const _CGRr = "CreateGroupResponse";
const _CU = "CreateUser";
const _CUR = "CreateUserRequest";
const _CURr = "CreateUserResponse";
const _D = "Description";
const _DG = "DeleteGroup";
const _DGM = "DeleteGroupMembership";
const _DGMR = "DeleteGroupMembershipRequest";
const _DGMRe = "DeleteGroupMembershipResponse";
const _DGMRes = "DescribeGroupMembershipRequest";
const _DGMResc = "DescribeGroupMembershipResponse";
const _DGMe = "DescribeGroupMembership";
const _DGR = "DeleteGroupRequest";
const _DGRe = "DeleteGroupResponse";
const _DGRes = "DescribeGroupRequest";
const _DGResc = "DescribeGroupResponse";
const _DGe = "DescribeGroup";
const _DN = "DisplayName";
const _DU = "DeleteUser";
const _DUR = "DeleteUserRequest";
const _DURe = "DeleteUserResponse";
const _DURes = "DescribeUserRequest";
const _DUResc = "DescribeUserResponse";
const _DUe = "DescribeUser";
const _Di = "Display";
const _E = "Emails";
const _EI = "ExternalIds";
const _EII = "ExternalIdIdentifier";
const _EIIx = "ExternalIdIssuer";
const _EIx = "ExternalId";
const _Em = "Email";
const _F = "Formatted";
const _FN = "FamilyName";
const _Fi = "Filter";
const _Fil = "Filters";
const _G = "Group";
const _GDN = "GroupDisplayName";
const _GGI = "GetGroupId";
const _GGIR = "GetGroupIdRequest";
const _GGIRe = "GetGroupIdResponse";
const _GGMI = "GetGroupMembershipId";
const _GGMIR = "GetGroupMembershipIdRequest";
const _GGMIRe = "GetGroupMembershipIdResponse";
const _GI = "GroupId";
const _GIr = "GroupIds";
const _GM = "GroupMembership";
const _GMER = "GroupMembershipExistenceResult";
const _GMERr = "GroupMembershipExistenceResults";
const _GMr = "GroupMemberships";
const _GN = "GivenName";
const _GUI = "GetUserId";
const _GUIR = "GetUserIdRequest";
const _GUIRe = "GetUserIdResponse";
const _Gr = "Groups";
const _HP = "HonorificPrefix";
const _HS = "HonorificSuffix";
const _I = "Issuer";
const _IMIG = "IsMemberInGroups";
const _IMIGR = "IsMemberInGroupsRequest";
const _IMIGRs = "IsMemberInGroupsResponse";
const _ISE = "InternalServerException";
const _ISI = "IdentityStoreId";
const _Id = "Id";
const _L = "Locality";
const _LG = "ListGroups";
const _LGM = "ListGroupMemberships";
const _LGMFM = "ListGroupMembershipsForMember";
const _LGMFMR = "ListGroupMembershipsForMemberRequest";
const _LGMFMRi = "ListGroupMembershipsForMemberResponse";
const _LGMR = "ListGroupMembershipsRequest";
const _LGMRi = "ListGroupMembershipsResponse";
const _LGR = "ListGroupsRequest";
const _LGRi = "ListGroupsResponse";
const _LU = "ListUsers";
const _LUR = "ListUsersRequest";
const _LURi = "ListUsersResponse";
const _Lo = "Locale";
const _M = "Message";
const _ME = "MembershipExists";
const _MI = "MemberId";
const _MIe = "MembershipId";
const _MN = "MiddleName";
const _MR = "MaxResults";
const _N = "Name";
const _NN = "NickName";
const _NT = "NextToken";
const _O = "Operations";
const _P = "Primary";
const _PC = "PostalCode";
const _PL = "PreferredLanguage";
const _PN = "PhoneNumbers";
const _PNh = "PhoneNumber";
const _PU = "ProfileUrl";
const _Ph = "Photos";
const _Pho = "Photo";
const _R = "Reason";
const _RA = "Retry-After";
const _RAS = "RetryAfterSeconds";
const _RI = "RequestId";
const _RIe = "ResourceId";
const _RNFE = "ResourceNotFoundException";
const _RT = "ResourceType";
const _Re = "Region";
const _Res = "Results";
const _SA = "StreetAddress";
const _SBT = "SensitiveBooleanType";
const _SQEE = "ServiceQuotaExceededException";
const _SST = "SensitiveStringType";
const _T = "Type";
const _TE = "ThrottlingException";
const _Ti = "Title";
const _Tim = "Timezone";
const _U = "Users";
const _UA = "UpdatedAt";
const _UAn = "UniqueAttribute";
const _UB = "UpdatedBy";
const _UG = "UpdateGroup";
const _UGR = "UpdateGroupRequest";
const _UGRp = "UpdateGroupResponse";
const _UI = "UserId";
const _UN = "UserName";
const _US = "UserStatus";
const _UT = "UserType";
const _UU = "UpdateUser";
const _UUR = "UpdateUserRequest";
const _UURp = "UpdateUserResponse";
const _Us = "User";
const _V = "Value";
const _VE = "ValidationException";
const _W = "Website";
const _c = "client";
const _e = "error";
const _hE = "httpError";
const _hH = "httpHeader";
const _s = "server";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.identitystore";
const n0 = "com.amazonaws.identitystore";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type {
  StaticErrorSchema,
  StaticListSchema,
  StaticOperationSchema,
  StaticSimpleSchema,
  StaticStructureSchema,
} from "@smithy/types";

import {
  AccessDeniedException as __AccessDeniedException,
  ConflictException as __ConflictException,
  InternalServerException as __InternalServerException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ServiceQuotaExceededException as __ServiceQuotaExceededException,
  ThrottlingException as __ThrottlingException,
  ValidationException as __ValidationException,
} from "../models/errors";
import { IdentitystoreServiceException as __IdentitystoreServiceException } from "../models/IdentitystoreServiceException";

/* eslint no-var: 0 */

export var ExternalIdIdentifier: StaticSimpleSchema = [0, n0, _EII, 8, 0];
export var ExternalIdIssuer: StaticSimpleSchema = [0, n0, _EIIx, 8, 0];
export var GroupDisplayName: StaticSimpleSchema = [0, n0, _GDN, 8, 0];
export var SensitiveBooleanType: StaticSimpleSchema = [0, n0, _SBT, 8, 2];
export var SensitiveStringType: StaticSimpleSchema = [0, n0, _SST, 8, 0];
export var UserName: StaticSimpleSchema = [0, n0, _UN, 8, 0];
export var AccessDeniedException: StaticErrorSchema = [
  -3,
  n0,
  _ADE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_M, _RI, _R],
  [0, 0, 0],
];
TypeRegistry.for(n0).registerError(AccessDeniedException, __AccessDeniedException);

export var Address: StaticStructureSchema = [
  3,
  n0,
  _A,
  0,
  [_SA, _L, _Re, _PC, _C, _F, _T, _P],
  [
    [() => SensitiveStringType, 0],
    [() => SensitiveStringType, 0],
    [() => SensitiveStringType, 0],
    [() => SensitiveStringType, 0],
    [() => SensitiveStringType, 0],
    [() => SensitiveStringType, 0],
    [() => SensitiveStringType, 0],
    [() => SensitiveBooleanType, 0],
  ],
];
export var AttributeOperation: StaticStructureSchema = [3, n0, _AO, 0, [_AP, _AV], [0, 15]];
export var ConflictException: StaticErrorSchema = [
  -3,
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M, _RI, _R],
  [0, 0, 0],
];
TypeRegistry.for(n0).registerError(ConflictException, __ConflictException);

export var CreateGroupMembershipRequest: StaticStructureSchema = [
  3,
  n0,
  _CGMR,
  0,
  [_ISI, _GI, _MI],
  [0, 0, () => MemberId],
];
export var CreateGroupMembershipResponse: StaticStructureSchema = [3, n0, _CGMRr, 0, [_MIe, _ISI], [0, 0]];
export var CreateGroupRequest: StaticStructureSchema = [
  3,
  n0,
  _CGR,
  0,
  [_ISI, _DN, _D],
  [0, [() => GroupDisplayName, 0], [() => SensitiveStringType, 0]],
];
export var CreateGroupResponse: StaticStructureSchema = [3, n0, _CGRr, 0, [_GI, _ISI], [0, 0]];
export var CreateUserRequest: StaticStructureSchema = [
  3,
  n0,
  _CUR,
  0,
  [_ISI, _UN, _N, _DN, _NN, _PU, _E, _Ad, _PN, _UT, _Ti, _PL, _Lo, _Tim, _Ph, _W, _B],
  [
    0,
    [() => UserName, 0],
    [() => Name, 0],
    [() => SensitiveStringType, 0],
    [() => SensitiveStringType, 0],
    [() => SensitiveStringType, 0],
    [() => Emails, 0],
    [() => Addresses, 0],
    [() => PhoneNumbers, 0],
    [() => SensitiveStringType, 0],
    [() => SensitiveStringType, 0],
    [() => SensitiveStringType, 0],
    [() => SensitiveStringType, 0],
    [() => SensitiveStringType, 0],
    [() => Photos, 0],
    [() => SensitiveStringType, 0],
    [() => SensitiveStringType, 0],
  ],
];
export var CreateUserResponse: StaticStructureSchema = [3, n0, _CURr, 0, [_ISI, _UI], [0, 0]];
export var DeleteGroupMembershipRequest: StaticStructureSchema = [3, n0, _DGMR, 0, [_ISI, _MIe], [0, 0]];
export var DeleteGroupMembershipResponse: StaticStructureSchema = [3, n0, _DGMRe, 0, [], []];
export var DeleteGroupRequest: StaticStructureSchema = [3, n0, _DGR, 0, [_ISI, _GI], [0, 0]];
export var DeleteGroupResponse: StaticStructureSchema = [3, n0, _DGRe, 0, [], []];
export var DeleteUserRequest: StaticStructureSchema = [3, n0, _DUR, 0, [_ISI, _UI], [0, 0]];
export var DeleteUserResponse: StaticStructureSchema = [3, n0, _DURe, 0, [], []];
export var DescribeGroupMembershipRequest: StaticStructureSchema = [3, n0, _DGMRes, 0, [_ISI, _MIe], [0, 0]];
export var DescribeGroupMembershipResponse: StaticStructureSchema = [
  3,
  n0,
  _DGMResc,
  0,
  [_ISI, _MIe, _GI, _MI, _CA, _UA, _CB, _UB],
  [0, 0, 0, () => MemberId, 4, 4, 0, 0],
];
export var DescribeGroupRequest: StaticStructureSchema = [3, n0, _DGRes, 0, [_ISI, _GI], [0, 0]];
export var DescribeGroupResponse: StaticStructureSchema = [
  3,
  n0,
  _DGResc,
  0,
  [_GI, _DN, _EI, _D, _CA, _UA, _CB, _UB, _ISI],
  [0, [() => GroupDisplayName, 0], [() => ExternalIds, 0], [() => SensitiveStringType, 0], 4, 4, 0, 0, 0],
];
export var DescribeUserRequest: StaticStructureSchema = [3, n0, _DURes, 0, [_ISI, _UI], [0, 0]];
export var DescribeUserResponse: StaticStructureSchema = [
  3,
  n0,
  _DUResc,
  0,
  [
    _ISI,
    _UI,
    _UN,
    _EI,
    _N,
    _DN,
    _NN,
    _PU,
    _E,
    _Ad,
    _PN,
    _UT,
    _Ti,
    _PL,
    _Lo,
    _Tim,
    _US,
    _Ph,
    _W,
    _B,
    _CA,
    _CB,
    _UA,
    _UB,
  ],
  [
    0,
    0,
    [() => UserName, 0],
    [() => ExternalIds, 0],
    [() => Name, 0],
    [() => SensitiveStringType, 0],
    [() => SensitiveStringType, 0],
    [() => SensitiveStringType, 0],
    [() => Emails, 0],
    [() => Addresses, 0],
    [() => PhoneNumbers, 0],
    [() => SensitiveStringType, 0],
    [() => SensitiveStringType, 0],
    [() => SensitiveStringType, 0],
    [() => SensitiveStringType, 0],
    [() => SensitiveStringType, 0],
    0,
    [() => Photos, 0],
    [() => SensitiveStringType, 0],
    [() => SensitiveStringType, 0],
    4,
    0,
    4,
    0,
  ],
];
export var Email: StaticStructureSchema = [
  3,
  n0,
  _Em,
  0,
  [_V, _T, _P],
  [
    [() => SensitiveStringType, 0],
    [() => SensitiveStringType, 0],
    [() => SensitiveBooleanType, 0],
  ],
];
export var ExternalId: StaticStructureSchema = [
  3,
  n0,
  _EIx,
  0,
  [_I, _Id],
  [
    [() => ExternalIdIssuer, 0],
    [() => ExternalIdIdentifier, 0],
  ],
];
export var Filter: StaticStructureSchema = [3, n0, _Fi, 0, [_AP, _AV], [0, [() => SensitiveStringType, 0]]];
export var GetGroupIdRequest: StaticStructureSchema = [
  3,
  n0,
  _GGIR,
  0,
  [_ISI, _AI],
  [0, [() => AlternateIdentifier, 0]],
];
export var GetGroupIdResponse: StaticStructureSchema = [3, n0, _GGIRe, 0, [_GI, _ISI], [0, 0]];
export var GetGroupMembershipIdRequest: StaticStructureSchema = [
  3,
  n0,
  _GGMIR,
  0,
  [_ISI, _GI, _MI],
  [0, 0, () => MemberId],
];
export var GetGroupMembershipIdResponse: StaticStructureSchema = [3, n0, _GGMIRe, 0, [_MIe, _ISI], [0, 0]];
export var GetUserIdRequest: StaticStructureSchema = [
  3,
  n0,
  _GUIR,
  0,
  [_ISI, _AI],
  [0, [() => AlternateIdentifier, 0]],
];
export var GetUserIdResponse: StaticStructureSchema = [3, n0, _GUIRe, 0, [_ISI, _UI], [0, 0]];
export var Group: StaticStructureSchema = [
  3,
  n0,
  _G,
  0,
  [_GI, _DN, _EI, _D, _CA, _UA, _CB, _UB, _ISI],
  [0, [() => GroupDisplayName, 0], [() => ExternalIds, 0], [() => SensitiveStringType, 0], 4, 4, 0, 0, 0],
];
export var GroupMembership: StaticStructureSchema = [
  3,
  n0,
  _GM,
  0,
  [_ISI, _MIe, _GI, _MI, _CA, _UA, _CB, _UB],
  [0, 0, 0, () => MemberId, 4, 4, 0, 0],
];
export var GroupMembershipExistenceResult: StaticStructureSchema = [
  3,
  n0,
  _GMER,
  0,
  [_GI, _MI, _ME],
  [0, () => MemberId, [() => SensitiveBooleanType, 0]],
];
export var InternalServerException: StaticErrorSchema = [
  -3,
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
];
TypeRegistry.for(n0).registerError(InternalServerException, __InternalServerException);

export var IsMemberInGroupsRequest: StaticStructureSchema = [
  3,
  n0,
  _IMIGR,
  0,
  [_ISI, _MI, _GIr],
  [0, () => MemberId, 64 | 0],
];
export var IsMemberInGroupsResponse: StaticStructureSchema = [
  3,
  n0,
  _IMIGRs,
  0,
  [_Res],
  [[() => GroupMembershipExistenceResults, 0]],
];
export var ListGroupMembershipsForMemberRequest: StaticStructureSchema = [
  3,
  n0,
  _LGMFMR,
  0,
  [_ISI, _MI, _MR, _NT],
  [0, () => MemberId, 1, 0],
];
export var ListGroupMembershipsForMemberResponse: StaticStructureSchema = [
  3,
  n0,
  _LGMFMRi,
  0,
  [_GMr, _NT],
  [() => GroupMemberships, 0],
];
export var ListGroupMembershipsRequest: StaticStructureSchema = [3, n0, _LGMR, 0, [_ISI, _GI, _MR, _NT], [0, 0, 1, 0]];
export var ListGroupMembershipsResponse: StaticStructureSchema = [
  3,
  n0,
  _LGMRi,
  0,
  [_GMr, _NT],
  [() => GroupMemberships, 0],
];
export var ListGroupsRequest: StaticStructureSchema = [
  3,
  n0,
  _LGR,
  0,
  [_ISI, _MR, _NT, _Fil],
  [0, 1, 0, [() => Filters, 0]],
];
export var ListGroupsResponse: StaticStructureSchema = [3, n0, _LGRi, 0, [_Gr, _NT], [[() => Groups, 0], 0]];
export var ListUsersRequest: StaticStructureSchema = [
  3,
  n0,
  _LUR,
  0,
  [_ISI, _MR, _NT, _Fil],
  [0, 1, 0, [() => Filters, 0]],
];
export var ListUsersResponse: StaticStructureSchema = [3, n0, _LURi, 0, [_U, _NT], [[() => Users, 0], 0]];
export var Name: StaticStructureSchema = [
  3,
  n0,
  _N,
  0,
  [_F, _FN, _GN, _MN, _HP, _HS],
  [
    [() => SensitiveStringType, 0],
    [() => SensitiveStringType, 0],
    [() => SensitiveStringType, 0],
    [() => SensitiveStringType, 0],
    [() => SensitiveStringType, 0],
    [() => SensitiveStringType, 0],
  ],
];
export var PhoneNumber: StaticStructureSchema = [
  3,
  n0,
  _PNh,
  0,
  [_V, _T, _P],
  [
    [() => SensitiveStringType, 0],
    [() => SensitiveStringType, 0],
    [() => SensitiveBooleanType, 0],
  ],
];
export var Photo: StaticStructureSchema = [
  3,
  n0,
  _Pho,
  0,
  [_V, _T, _Di, _P],
  [
    [() => SensitiveStringType, 0],
    [() => SensitiveStringType, 0],
    [() => SensitiveStringType, 0],
    [() => SensitiveBooleanType, 0],
  ],
];
export var ResourceNotFoundException: StaticErrorSchema = [
  -3,
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_RT, _RIe, _R, _M, _RI],
  [0, 0, 0, 0, 0],
];
TypeRegistry.for(n0).registerError(ResourceNotFoundException, __ResourceNotFoundException);

export var ServiceQuotaExceededException: StaticErrorSchema = [
  -3,
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_M, _RI],
  [0, 0],
];
TypeRegistry.for(n0).registerError(ServiceQuotaExceededException, __ServiceQuotaExceededException);

export var ThrottlingException: StaticErrorSchema = [
  -3,
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_M, _RI, _RAS, _R],
  [
    0,
    0,
    [
      1,
      {
        [_hH]: _RA,
      },
    ],
    0,
  ],
];
TypeRegistry.for(n0).registerError(ThrottlingException, __ThrottlingException);

export var UniqueAttribute: StaticStructureSchema = [3, n0, _UAn, 0, [_AP, _AV], [0, 15]];
export var UpdateGroupRequest: StaticStructureSchema = [
  3,
  n0,
  _UGR,
  0,
  [_ISI, _GI, _O],
  [0, 0, () => AttributeOperations],
];
export var UpdateGroupResponse: StaticStructureSchema = [3, n0, _UGRp, 0, [], []];
export var UpdateUserRequest: StaticStructureSchema = [
  3,
  n0,
  _UUR,
  0,
  [_ISI, _UI, _O],
  [0, 0, () => AttributeOperations],
];
export var UpdateUserResponse: StaticStructureSchema = [3, n0, _UURp, 0, [], []];
export var User: StaticStructureSchema = [
  3,
  n0,
  _Us,
  0,
  [
    _ISI,
    _UI,
    _UN,
    _EI,
    _N,
    _DN,
    _NN,
    _PU,
    _E,
    _Ad,
    _PN,
    _UT,
    _Ti,
    _PL,
    _Lo,
    _Tim,
    _US,
    _Ph,
    _W,
    _B,
    _CA,
    _CB,
    _UA,
    _UB,
  ],
  [
    0,
    0,
    [() => UserName, 0],
    [() => ExternalIds, 0],
    [() => Name, 0],
    [() => SensitiveStringType, 0],
    [() => SensitiveStringType, 0],
    [() => SensitiveStringType, 0],
    [() => Emails, 0],
    [() => Addresses, 0],
    [() => PhoneNumbers, 0],
    [() => SensitiveStringType, 0],
    [() => SensitiveStringType, 0],
    [() => SensitiveStringType, 0],
    [() => SensitiveStringType, 0],
    [() => SensitiveStringType, 0],
    0,
    [() => Photos, 0],
    [() => SensitiveStringType, 0],
    [() => SensitiveStringType, 0],
    4,
    0,
    4,
    0,
  ],
];
export var ValidationException: StaticErrorSchema = [
  -3,
  n0,
  _VE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M, _RI, _R],
  [0, 0, 0],
];
TypeRegistry.for(n0).registerError(ValidationException, __ValidationException);

export var __Unit = "unit" as const;

export var IdentitystoreServiceException: StaticErrorSchema = [-3, _sm, "IdentitystoreServiceException", 0, [], []];
TypeRegistry.for(_sm).registerError(IdentitystoreServiceException, __IdentitystoreServiceException);

export var Addresses: StaticListSchema = [1, n0, _Ad, 0, [() => Address, 0]];
export var AttributeOperations: StaticListSchema = [1, n0, _AOt, 0, () => AttributeOperation];
export var Emails: StaticListSchema = [1, n0, _E, 0, [() => Email, 0]];
export var ExternalIds: StaticListSchema = [1, n0, _EI, 0, [() => ExternalId, 0]];
export var Filters: StaticListSchema = [1, n0, _Fil, 0, [() => Filter, 0]];
export var GroupIds = 64 | 0;

export var GroupMembershipExistenceResults: StaticListSchema = [
  1,
  n0,
  _GMERr,
  0,
  [() => GroupMembershipExistenceResult, 0],
];
export var GroupMemberships: StaticListSchema = [1, n0, _GMr, 0, () => GroupMembership];
export var Groups: StaticListSchema = [1, n0, _Gr, 0, [() => Group, 0]];
export var PhoneNumbers: StaticListSchema = [1, n0, _PN, 0, [() => PhoneNumber, 0]];
export var Photos: StaticListSchema = [1, n0, _Ph, 0, [() => Photo, 0]];
export var Users: StaticListSchema = [1, n0, _U, 0, [() => User, 0]];
export var AlternateIdentifier: StaticStructureSchema = [
  3,
  n0,
  _AI,
  0,
  [_EIx, _UAn],
  [[() => ExternalId, 0], () => UniqueAttribute],
];
export var MemberId: StaticStructureSchema = [3, n0, _MI, 0, [_UI], [0]];
export var CreateGroup: StaticOperationSchema = [9, n0, _CG, 0, () => CreateGroupRequest, () => CreateGroupResponse];
export var CreateGroupMembership: StaticOperationSchema = [
  9,
  n0,
  _CGM,
  0,
  () => CreateGroupMembershipRequest,
  () => CreateGroupMembershipResponse,
];
export var CreateUser: StaticOperationSchema = [9, n0, _CU, 0, () => CreateUserRequest, () => CreateUserResponse];
export var DeleteGroup: StaticOperationSchema = [9, n0, _DG, 2, () => DeleteGroupRequest, () => DeleteGroupResponse];
export var DeleteGroupMembership: StaticOperationSchema = [
  9,
  n0,
  _DGM,
  2,
  () => DeleteGroupMembershipRequest,
  () => DeleteGroupMembershipResponse,
];
export var DeleteUser: StaticOperationSchema = [9, n0, _DU, 2, () => DeleteUserRequest, () => DeleteUserResponse];
export var DescribeGroup: StaticOperationSchema = [
  9,
  n0,
  _DGe,
  0,
  () => DescribeGroupRequest,
  () => DescribeGroupResponse,
];
export var DescribeGroupMembership: StaticOperationSchema = [
  9,
  n0,
  _DGMe,
  0,
  () => DescribeGroupMembershipRequest,
  () => DescribeGroupMembershipResponse,
];
export var DescribeUser: StaticOperationSchema = [
  9,
  n0,
  _DUe,
  0,
  () => DescribeUserRequest,
  () => DescribeUserResponse,
];
export var GetGroupId: StaticOperationSchema = [9, n0, _GGI, 0, () => GetGroupIdRequest, () => GetGroupIdResponse];
export var GetGroupMembershipId: StaticOperationSchema = [
  9,
  n0,
  _GGMI,
  0,
  () => GetGroupMembershipIdRequest,
  () => GetGroupMembershipIdResponse,
];
export var GetUserId: StaticOperationSchema = [9, n0, _GUI, 0, () => GetUserIdRequest, () => GetUserIdResponse];
export var IsMemberInGroups: StaticOperationSchema = [
  9,
  n0,
  _IMIG,
  0,
  () => IsMemberInGroupsRequest,
  () => IsMemberInGroupsResponse,
];
export var ListGroupMemberships: StaticOperationSchema = [
  9,
  n0,
  _LGM,
  0,
  () => ListGroupMembershipsRequest,
  () => ListGroupMembershipsResponse,
];
export var ListGroupMembershipsForMember: StaticOperationSchema = [
  9,
  n0,
  _LGMFM,
  0,
  () => ListGroupMembershipsForMemberRequest,
  () => ListGroupMembershipsForMemberResponse,
];
export var ListGroups: StaticOperationSchema = [9, n0, _LG, 0, () => ListGroupsRequest, () => ListGroupsResponse];
export var ListUsers: StaticOperationSchema = [9, n0, _LU, 0, () => ListUsersRequest, () => ListUsersResponse];
export var UpdateGroup: StaticOperationSchema = [9, n0, _UG, 0, () => UpdateGroupRequest, () => UpdateGroupResponse];
export var UpdateUser: StaticOperationSchema = [9, n0, _UU, 0, () => UpdateUserRequest, () => UpdateUserResponse];
