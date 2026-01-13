const _A = "Attributes";
const _ADE = "AccessDeniedException";
const _AGM = "AddGroupMember";
const _AGMR = "AddGroupMemberRequest";
const _AGMRd = "AddGroupMemberResult";
const _AV = "AttributeValue";
const _BAV = "BooleanAttributeValue";
const _BOOL = "BOOL";
const _CE = "ConflictException";
const _CG = "CreateGroup";
const _CGR = "CreateGroupRequest";
const _CGRr = "CreateGroupResult";
const _CT = "ClientToken";
const _CU = "CreateUser";
const _CUR = "CreateUserRequest";
const _CURr = "CreateUserResult";
const _DG = "DeleteGroup";
const _DGR = "DeleteGroupRequest";
const _DGRe = "DeleteGroupResult";
const _DGRes = "DescribeGroupRequest";
const _DGResc = "DescribeGroupResult";
const _DGe = "DescribeGroup";
const _DI = "DirectoryId";
const _DN = "DistinguishedName";
const _DU = "DeleteUser";
const _DUE = "DirectoryUnavailableException";
const _DUR = "DeleteUserRequest";
const _DURe = "DeleteUserResult";
const _DURes = "DescribeUserRequest";
const _DUResc = "DescribeUserResult";
const _DURi = "DisableUserRequest";
const _DURis = "DisableUserResult";
const _DUe = "DescribeUser";
const _DUi = "DisableUser";
const _E = "Enabled";
const _EA = "EmailAddress";
const _G = "Group";
const _GL = "GroupList";
const _GN = "GivenName";
const _GNr = "GroupName";
const _GS = "GroupScope";
const _GSL = "GroupSummaryList";
const _GSr = "GroupSummary";
const _GT = "GroupType";
const _Gr = "Groups";
const _ISE = "InternalServerException";
const _LG = "ListGroups";
const _LGFM = "ListGroupsForMember";
const _LGFMR = "ListGroupsForMemberRequest";
const _LGFMRi = "ListGroupsForMemberResult";
const _LGM = "ListGroupMembers";
const _LGMR = "ListGroupMembersRequest";
const _LGMRi = "ListGroupMembersResult";
const _LGR = "ListGroupsRequest";
const _LGRi = "ListGroupsResult";
const _LU = "ListUsers";
const _LUR = "ListUsersRequest";
const _LURi = "ListUsersResult";
const _M = "Message";
const _ML = "MemberList";
const _MN = "MemberName";
const _MR = "MemberRealm";
const _MRa = "MaxResults";
const _MT = "MemberType";
const _Me = "Members";
const _Mem = "Member";
const _N = "N";
const _NAV = "NumberAttributeValue";
const _NT = "NextToken";
const _OA = "OtherAttributes";
const _R = "Reason";
const _RA = "Retry-After";
const _RAS = "RetryAfterSeconds";
const _RGM = "RemoveGroupMember";
const _RGMR = "RemoveGroupMemberRequest";
const _RGMRe = "RemoveGroupMemberResult";
const _RNFE = "ResourceNotFoundException";
const _Re = "Realm";
const _S = "Surname";
const _SA = "SearchAttributes";
const _SAMAN = "SAMAccountName";
const _SAV = "StringAttributeValue";
const _SG = "SearchGroups";
const _SGR = "SearchGroupsRequest";
const _SGRe = "SearchGroupsResult";
const _SID = "SID";
const _SS = "SearchString";
const _SSAV = "StringSetAttributeValue";
const _SS_ = "SS";
const _SU = "SearchUsers";
const _SUR = "SearchUsersRequest";
const _SURe = "SearchUsersResult";
const _S_ = "S";
const _TE = "ThrottlingException";
const _U = "Users";
const _UG = "UpdateGroup";
const _UGR = "UpdateGroupRequest";
const _UGRp = "UpdateGroupResult";
const _UL = "UserList";
const _UPN = "UserPrincipalName";
const _US = "UserSummary";
const _USL = "UserSummaryList";
const _UT = "UpdateType";
const _UU = "UpdateUser";
const _UUR = "UpdateUserRequest";
const _UURp = "UpdateUserResult";
const _Us = "User";
const _VE = "ValidationException";
const _c = "client";
const _e = "error";
const _h = "http";
const _hE = "httpError";
const _hH = "httpHeader";
const _hQ = "httpQuery";
const _s = "server";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.directoryservicedata";
const n0 = "com.amazonaws.directoryservicedata";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type {
  StaticErrorSchema,
  StaticListSchema,
  StaticMapSchema,
  StaticOperationSchema,
  StaticSimpleSchema,
  StaticStructureSchema,
  StaticUnionSchema,
} from "@smithy/types";

import { DirectoryServiceDataServiceException } from "../models/DirectoryServiceDataServiceException";
import {
  AccessDeniedException,
  ConflictException,
  DirectoryUnavailableException,
  InternalServerException,
  ResourceNotFoundException,
  ThrottlingException,
  ValidationException,
} from "../models/errors";

/* eslint no-var: 0 */
var BooleanAttributeValue: StaticSimpleSchema = [0, n0, _BAV, 8, 2];
var DistinguishedName: StaticSimpleSchema = [0, n0, _DN, 8, 0];
var EmailAddress: StaticSimpleSchema = [0, n0, _EA, 8, 0];
var GivenName: StaticSimpleSchema = [0, n0, _GN, 8, 0];
var NextToken: StaticSimpleSchema = [0, n0, _NT, 8, 0];
var NumberAttributeValue: StaticSimpleSchema = [0, n0, _NAV, 8, 1];
var SearchString: StaticSimpleSchema = [0, n0, _SS, 8, 0];
var StringAttributeValue: StaticSimpleSchema = [0, n0, _SAV, 8, 0];
var Surname: StaticSimpleSchema = [0, n0, _S, 8, 0];
var UserPrincipalName: StaticSimpleSchema = [0, n0, _UPN, 8, 0];
export var AccessDeniedException$: StaticErrorSchema = [-3, n0, _ADE,
  { [_e]: _c, [_hE]: 403 },
  [_M, _R],
  [0, 0]
];
TypeRegistry.for(n0).registerError(AccessDeniedException$, AccessDeniedException);
export var AddGroupMemberRequest$: StaticStructureSchema = [3, n0, _AGMR,
  0,
  [_DI, _GNr, _MN, _MR, _CT],
  [[0, { [_hQ]: _DI }], 0, 0, 0, [0, 4]]
];
export var AddGroupMemberResult$: StaticStructureSchema = [3, n0, _AGMRd,
  0,
  [],
  []
];
export var ConflictException$: StaticErrorSchema = [-3, n0, _CE,
  { [_e]: _c, [_hE]: 409 },
  [_M],
  [0]
];
TypeRegistry.for(n0).registerError(ConflictException$, ConflictException);
export var CreateGroupRequest$: StaticStructureSchema = [3, n0, _CGR,
  0,
  [_DI, _SAMAN, _GT, _GS, _OA, _CT],
  [[0, { [_hQ]: _DI }], 0, 0, 0, [() => Attributes, 0], [0, 4]]
];
export var CreateGroupResult$: StaticStructureSchema = [3, n0, _CGRr,
  0,
  [_DI, _SAMAN, _SID],
  [0, 0, 0]
];
export var CreateUserRequest$: StaticStructureSchema = [3, n0, _CUR,
  0,
  [_DI, _SAMAN, _EA, _GN, _S, _OA, _CT],
  [[0, { [_hQ]: _DI }], 0, [() => EmailAddress, 0], [() => GivenName, 0], [() => Surname, 0], [() => Attributes, 0], [0, 4]]
];
export var CreateUserResult$: StaticStructureSchema = [3, n0, _CURr,
  0,
  [_DI, _SID, _SAMAN],
  [0, 0, 0]
];
export var DeleteGroupRequest$: StaticStructureSchema = [3, n0, _DGR,
  0,
  [_DI, _SAMAN, _CT],
  [[0, { [_hQ]: _DI }], 0, [0, 4]]
];
export var DeleteGroupResult$: StaticStructureSchema = [3, n0, _DGRe,
  0,
  [],
  []
];
export var DeleteUserRequest$: StaticStructureSchema = [3, n0, _DUR,
  0,
  [_DI, _SAMAN, _CT],
  [[0, { [_hQ]: _DI }], 0, [0, 4]]
];
export var DeleteUserResult$: StaticStructureSchema = [3, n0, _DURe,
  0,
  [],
  []
];
export var DescribeGroupRequest$: StaticStructureSchema = [3, n0, _DGRes,
  0,
  [_DI, _Re, _SAMAN, _OA],
  [[0, { [_hQ]: _DI }], 0, 0, 64 | 0]
];
export var DescribeGroupResult$: StaticStructureSchema = [3, n0, _DGResc,
  0,
  [_DI, _Re, _SID, _SAMAN, _DN, _GT, _GS, _OA],
  [0, 0, 0, 0, [() => DistinguishedName, 0], 0, 0, [() => Attributes, 0]]
];
export var DescribeUserRequest$: StaticStructureSchema = [3, n0, _DURes,
  0,
  [_DI, _SAMAN, _OA, _Re],
  [[0, { [_hQ]: _DI }], 0, 64 | 0, 0]
];
export var DescribeUserResult$: StaticStructureSchema = [3, n0, _DUResc,
  0,
  [_DI, _Re, _SID, _SAMAN, _DN, _UPN, _EA, _GN, _S, _E, _OA],
  [0, 0, 0, 0, [() => DistinguishedName, 0], [() => UserPrincipalName, 0], [() => EmailAddress, 0], [() => GivenName, 0], [() => Surname, 0], 2, [() => Attributes, 0]]
];
export var DirectoryUnavailableException$: StaticErrorSchema = [-3, n0, _DUE,
  { [_e]: _c, [_hE]: 400 },
  [_M, _R],
  [0, 0]
];
TypeRegistry.for(n0).registerError(DirectoryUnavailableException$, DirectoryUnavailableException);
export var DisableUserRequest$: StaticStructureSchema = [3, n0, _DURi,
  0,
  [_DI, _SAMAN, _CT],
  [[0, { [_hQ]: _DI }], 0, [0, 4]]
];
export var DisableUserResult$: StaticStructureSchema = [3, n0, _DURis,
  0,
  [],
  []
];
export var Group$: StaticStructureSchema = [3, n0, _G,
  0,
  [_SID, _SAMAN, _DN, _GT, _GS, _OA],
  [0, 0, [() => DistinguishedName, 0], 0, 0, [() => Attributes, 0]]
];
export var GroupSummary$: StaticStructureSchema = [3, n0, _GSr,
  0,
  [_SID, _SAMAN, _GT, _GS],
  [0, 0, 0, 0]
];
export var InternalServerException$: StaticErrorSchema = [-3, n0, _ISE,
  { [_e]: _s, [_hE]: 500 },
  [_M],
  [0]
];
TypeRegistry.for(n0).registerError(InternalServerException$, InternalServerException);
export var ListGroupMembersRequest$: StaticStructureSchema = [3, n0, _LGMR,
  0,
  [_DI, _Re, _MR, _SAMAN, _NT, _MRa],
  [[0, { [_hQ]: _DI }], 0, 0, 0, [() => NextToken, 0], 1]
];
export var ListGroupMembersResult$: StaticStructureSchema = [3, n0, _LGMRi,
  0,
  [_DI, _Re, _MR, _Me, _NT],
  [0, 0, 0, () => MemberList, [() => NextToken, 0]]
];
export var ListGroupsForMemberRequest$: StaticStructureSchema = [3, n0, _LGFMR,
  0,
  [_DI, _Re, _MR, _SAMAN, _NT, _MRa],
  [[0, { [_hQ]: _DI }], 0, 0, 0, [() => NextToken, 0], 1]
];
export var ListGroupsForMemberResult$: StaticStructureSchema = [3, n0, _LGFMRi,
  0,
  [_DI, _Re, _MR, _Gr, _NT],
  [0, 0, 0, () => GroupSummaryList, [() => NextToken, 0]]
];
export var ListGroupsRequest$: StaticStructureSchema = [3, n0, _LGR,
  0,
  [_DI, _Re, _NT, _MRa],
  [[0, { [_hQ]: _DI }], 0, [() => NextToken, 0], 1]
];
export var ListGroupsResult$: StaticStructureSchema = [3, n0, _LGRi,
  0,
  [_DI, _Re, _Gr, _NT],
  [0, 0, () => GroupSummaryList, [() => NextToken, 0]]
];
export var ListUsersRequest$: StaticStructureSchema = [3, n0, _LUR,
  0,
  [_DI, _Re, _NT, _MRa],
  [[0, { [_hQ]: _DI }], 0, [() => NextToken, 0], 1]
];
export var ListUsersResult$: StaticStructureSchema = [3, n0, _LURi,
  0,
  [_DI, _Re, _U, _NT],
  [0, 0, [() => UserSummaryList, 0], [() => NextToken, 0]]
];
export var Member$: StaticStructureSchema = [3, n0, _Mem,
  0,
  [_SID, _SAMAN, _MT],
  [0, 0, 0]
];
export var RemoveGroupMemberRequest$: StaticStructureSchema = [3, n0, _RGMR,
  0,
  [_DI, _GNr, _MN, _MR, _CT],
  [[0, { [_hQ]: _DI }], 0, 0, 0, [0, 4]]
];
export var RemoveGroupMemberResult$: StaticStructureSchema = [3, n0, _RGMRe,
  0,
  [],
  []
];
export var ResourceNotFoundException$: StaticErrorSchema = [-3, n0, _RNFE,
  { [_e]: _c, [_hE]: 404 },
  [_M],
  [0]
];
TypeRegistry.for(n0).registerError(ResourceNotFoundException$, ResourceNotFoundException);
export var SearchGroupsRequest$: StaticStructureSchema = [3, n0, _SGR,
  0,
  [_DI, _SS, _SA, _Re, _NT, _MRa],
  [[0, { [_hQ]: _DI }], [() => SearchString, 0], 64 | 0, 0, [() => NextToken, 0], 1]
];
export var SearchGroupsResult$: StaticStructureSchema = [3, n0, _SGRe,
  0,
  [_DI, _Re, _Gr, _NT],
  [0, 0, [() => GroupList, 0], [() => NextToken, 0]]
];
export var SearchUsersRequest$: StaticStructureSchema = [3, n0, _SUR,
  0,
  [_DI, _Re, _SS, _SA, _NT, _MRa],
  [[0, { [_hQ]: _DI }], 0, [() => SearchString, 0], 64 | 0, [() => NextToken, 0], 1]
];
export var SearchUsersResult$: StaticStructureSchema = [3, n0, _SURe,
  0,
  [_DI, _Re, _U, _NT],
  [0, 0, [() => UserList, 0], [() => NextToken, 0]]
];
export var ThrottlingException$: StaticErrorSchema = [-3, n0, _TE,
  { [_e]: _c, [_hE]: 429 },
  [_M, _RAS],
  [0, [1, { [_hH]: _RA }]]
];
TypeRegistry.for(n0).registerError(ThrottlingException$, ThrottlingException);
export var UpdateGroupRequest$: StaticStructureSchema = [3, n0, _UGR,
  0,
  [_DI, _SAMAN, _GT, _GS, _OA, _UT, _CT],
  [[0, { [_hQ]: _DI }], 0, 0, 0, [() => Attributes, 0], 0, [0, 4]]
];
export var UpdateGroupResult$: StaticStructureSchema = [3, n0, _UGRp,
  0,
  [],
  []
];
export var UpdateUserRequest$: StaticStructureSchema = [3, n0, _UUR,
  0,
  [_DI, _SAMAN, _EA, _GN, _S, _OA, _UT, _CT],
  [[0, { [_hQ]: _DI }], 0, [() => EmailAddress, 0], [() => GivenName, 0], [() => Surname, 0], [() => Attributes, 0], 0, [0, 4]]
];
export var UpdateUserResult$: StaticStructureSchema = [3, n0, _UURp,
  0,
  [],
  []
];
export var User$: StaticStructureSchema = [3, n0, _Us,
  0,
  [_SID, _SAMAN, _DN, _UPN, _EA, _GN, _S, _E, _OA],
  [0, 0, [() => DistinguishedName, 0], [() => UserPrincipalName, 0], [() => EmailAddress, 0], [() => GivenName, 0], [() => Surname, 0], 2, [() => Attributes, 0]]
];
export var UserSummary$: StaticStructureSchema = [3, n0, _US,
  0,
  [_SID, _SAMAN, _GN, _S, _E],
  [0, 0, [() => GivenName, 0], [() => Surname, 0], 2]
];
export var ValidationException$: StaticErrorSchema = [-3, n0, _VE,
  { [_e]: _c, [_hE]: 400 },
  [_M, _R],
  [0, 0]
];
TypeRegistry.for(n0).registerError(ValidationException$, ValidationException);
export var DirectoryServiceDataServiceException$: StaticErrorSchema = [-3, _sm, "DirectoryServiceDataServiceException", 0, [], []];
TypeRegistry.for(_sm).registerError(DirectoryServiceDataServiceException$, DirectoryServiceDataServiceException);
var GroupList: StaticListSchema = [1, n0, _GL,
  0, [() => Group$,
    0]
];
var GroupSummaryList: StaticListSchema = [1, n0, _GSL,
  0, () => GroupSummary$
];
var LdapDisplayNameList = 64 | 0;
var MemberList: StaticListSchema = [1, n0, _ML,
  0, () => Member$
];
var StringSetAttributeValue: StaticListSchema = [1, n0, _SSAV,
  8, [() => StringAttributeValue,
    0]
];
var UserList: StaticListSchema = [1, n0, _UL,
  0, [() => User$,
    0]
];
var UserSummaryList: StaticListSchema = [1, n0, _USL,
  0, [() => UserSummary$,
    0]
];
var Attributes: StaticMapSchema = [2, n0, _A,
  0, [0,
    0]
  , [() => AttributeValue$,
    0]
];
export var AttributeValue$: StaticUnionSchema = [4, n0, _AV,
  0,
  [_S_, _N, _BOOL, _SS_],
  [[() => StringAttributeValue, 0], [() => NumberAttributeValue, 0], [() => BooleanAttributeValue, 0], [() => StringSetAttributeValue, 0]]
];
export var AddGroupMember$: StaticOperationSchema = [9, n0, _AGM,
  { [_h]: ["POST", "/GroupMemberships/AddGroupMember", 200] }, () => AddGroupMemberRequest$, () => AddGroupMemberResult$
];
export var CreateGroup$: StaticOperationSchema = [9, n0, _CG,
  { [_h]: ["POST", "/Groups/CreateGroup", 200] }, () => CreateGroupRequest$, () => CreateGroupResult$
];
export var CreateUser$: StaticOperationSchema = [9, n0, _CU,
  { [_h]: ["POST", "/Users/CreateUser", 200] }, () => CreateUserRequest$, () => CreateUserResult$
];
export var DeleteGroup$: StaticOperationSchema = [9, n0, _DG,
  { [_h]: ["POST", "/Groups/DeleteGroup", 200] }, () => DeleteGroupRequest$, () => DeleteGroupResult$
];
export var DeleteUser$: StaticOperationSchema = [9, n0, _DU,
  { [_h]: ["POST", "/Users/DeleteUser", 200] }, () => DeleteUserRequest$, () => DeleteUserResult$
];
export var DescribeGroup$: StaticOperationSchema = [9, n0, _DGe,
  { [_h]: ["POST", "/Groups/DescribeGroup", 200] }, () => DescribeGroupRequest$, () => DescribeGroupResult$
];
export var DescribeUser$: StaticOperationSchema = [9, n0, _DUe,
  { [_h]: ["POST", "/Users/DescribeUser", 200] }, () => DescribeUserRequest$, () => DescribeUserResult$
];
export var DisableUser$: StaticOperationSchema = [9, n0, _DUi,
  { [_h]: ["POST", "/Users/DisableUser", 200] }, () => DisableUserRequest$, () => DisableUserResult$
];
export var ListGroupMembers$: StaticOperationSchema = [9, n0, _LGM,
  { [_h]: ["POST", "/GroupMemberships/ListGroupMembers", 200] }, () => ListGroupMembersRequest$, () => ListGroupMembersResult$
];
export var ListGroups$: StaticOperationSchema = [9, n0, _LG,
  { [_h]: ["POST", "/Groups/ListGroups", 200] }, () => ListGroupsRequest$, () => ListGroupsResult$
];
export var ListGroupsForMember$: StaticOperationSchema = [9, n0, _LGFM,
  { [_h]: ["POST", "/GroupMemberships/ListGroupsForMember", 200] }, () => ListGroupsForMemberRequest$, () => ListGroupsForMemberResult$
];
export var ListUsers$: StaticOperationSchema = [9, n0, _LU,
  { [_h]: ["POST", "/Users/ListUsers", 200] }, () => ListUsersRequest$, () => ListUsersResult$
];
export var RemoveGroupMember$: StaticOperationSchema = [9, n0, _RGM,
  { [_h]: ["POST", "/GroupMemberships/RemoveGroupMember", 200] }, () => RemoveGroupMemberRequest$, () => RemoveGroupMemberResult$
];
export var SearchGroups$: StaticOperationSchema = [9, n0, _SG,
  { [_h]: ["POST", "/Groups/SearchGroups", 200] }, () => SearchGroupsRequest$, () => SearchGroupsResult$
];
export var SearchUsers$: StaticOperationSchema = [9, n0, _SU,
  { [_h]: ["POST", "/Users/SearchUsers", 200] }, () => SearchUsersRequest$, () => SearchUsersResult$
];
export var UpdateGroup$: StaticOperationSchema = [9, n0, _UG,
  { [_h]: ["POST", "/Groups/UpdateGroup", 200] }, () => UpdateGroupRequest$, () => UpdateGroupResult$
];
export var UpdateUser$: StaticOperationSchema = [9, n0, _UU,
  { [_h]: ["POST", "/Users/UpdateUser", 200] }, () => UpdateUserRequest$, () => UpdateUserResult$
];
