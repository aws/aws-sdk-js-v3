// smithy-typescript generated code
import { list, op, sim, struct, struct as uni } from "@smithy/core/schema";

import {
  _Ad,
  _AI,
  _AP,
  _AV,
  _D,
  _DGe,
  _DGRes,
  _DGResc,
  _DN,
  _DUe,
  _DURes,
  _DUResc,
  _E,
  _EI,
  _EII,
  _EIIx,
  _EIx,
  _Fi,
  _Fil,
  _G,
  _GGI,
  _GGIR,
  _GGIRe,
  _GI,
  _Gr,
  _GUI,
  _GUIR,
  _GUIRe,
  _I,
  _Id,
  _ISI,
  _LG,
  _LGR,
  _LGRi,
  _Lo,
  _LU,
  _LUR,
  _LURi,
  _MR,
  _N,
  _NN,
  _NT,
  _PL,
  _PN,
  _PU,
  _Ti,
  _Tim,
  _U,
  _UA,
  _UI,
  _UN,
  _Us,
  _UT,
  n0,
} from "./schemas_0";
import {
  Addresses,
  Emails,
  GroupDisplayName,
  Name,
  PhoneNumbers,
  SensitiveStringType,
  UserName,
} from "./schemas_4_Group";

/* eslint no-var: 0 */

export var ExternalIdIdentifier = sim(n0, _EII, 0, 8);
export var ExternalIdIssuer = sim(n0, _EIIx, 0, 8);
export var DescribeGroupRequest = struct(n0, _DGRes, 0, [_ISI, _GI], [0, 0]);
export var DescribeGroupResponse = struct(
  n0,
  _DGResc,
  0,
  [_GI, _DN, _EI, _D, _ISI],
  [0, [() => GroupDisplayName, 0], [() => ExternalIds, 0], [() => SensitiveStringType, 0], 0]
);
export var DescribeUserRequest = struct(n0, _DURes, 0, [_ISI, _UI], [0, 0]);
export var DescribeUserResponse = struct(
  n0,
  _DUResc,
  0,
  [_UN, _UI, _EI, _N, _DN, _NN, _PU, _E, _Ad, _PN, _UT, _Ti, _PL, _Lo, _Tim, _ISI],
  [
    [() => UserName, 0],
    0,
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
  ]
);
export var ExternalId = struct(
  n0,
  _EIx,
  0,
  [_I, _Id],
  [
    [() => ExternalIdIssuer, 0],
    [() => ExternalIdIdentifier, 0],
  ]
);
export var Filter = struct(n0, _Fi, 0, [_AP, _AV], [0, [() => SensitiveStringType, 0]]);
export var GetGroupIdRequest = struct(n0, _GGIR, 0, [_ISI, _AI], [0, [() => AlternateIdentifier, 0]]);
export var GetGroupIdResponse = struct(n0, _GGIRe, 0, [_GI, _ISI], [0, 0]);
export var GetUserIdRequest = struct(n0, _GUIR, 0, [_ISI, _AI], [0, [() => AlternateIdentifier, 0]]);
export var GetUserIdResponse = struct(n0, _GUIRe, 0, [_UI, _ISI], [0, 0]);
export var Group = struct(
  n0,
  _G,
  0,
  [_GI, _DN, _EI, _D, _ISI],
  [0, [() => GroupDisplayName, 0], [() => ExternalIds, 0], [() => SensitiveStringType, 0], 0]
);
export var ListGroupsRequest = struct(n0, _LGR, 0, [_ISI, _MR, _NT, _Fil], [0, 1, 0, [() => Filters, 0]]);
export var ListGroupsResponse = struct(n0, _LGRi, 0, [_Gr, _NT], [[() => Groups, 0], 0]);
export var ListUsersRequest = struct(n0, _LUR, 0, [_ISI, _MR, _NT, _Fil], [0, 1, 0, [() => Filters, 0]]);
export var ListUsersResponse = struct(n0, _LURi, 0, [_U, _NT], [[() => Users, 0], 0]);
export var UniqueAttribute = struct(n0, _UA, 0, [_AP, _AV], [0, 15]);
export var User = struct(
  n0,
  _Us,
  0,
  [_UN, _UI, _EI, _N, _DN, _NN, _PU, _E, _Ad, _PN, _UT, _Ti, _PL, _Lo, _Tim, _ISI],
  [
    [() => UserName, 0],
    0,
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
  ]
);
export var ExternalIds = list(n0, _EI, 0, [() => ExternalId, 0]);
export var Filters = list(n0, _Fil, 0, [() => Filter, 0]);
export var Groups = list(n0, _Gr, 0, [() => Group, 0]);
export var Users = list(n0, _U, 0, [() => User, 0]);
export var AlternateIdentifier = uni(n0, _AI, 0, [_EIx, _UA], [[() => ExternalId, 0], () => UniqueAttribute]);
export var DescribeGroup = op(
  n0,
  _DGe,
  0,
  () => DescribeGroupRequest,
  () => DescribeGroupResponse
);
export var DescribeUser = op(
  n0,
  _DUe,
  0,
  () => DescribeUserRequest,
  () => DescribeUserResponse
);
export var GetGroupId = op(
  n0,
  _GGI,
  0,
  () => GetGroupIdRequest,
  () => GetGroupIdResponse
);
export var GetUserId = op(
  n0,
  _GUI,
  0,
  () => GetUserIdRequest,
  () => GetUserIdResponse
);
export var ListGroups = op(
  n0,
  _LG,
  0,
  () => ListGroupsRequest,
  () => ListGroupsResponse
);
export var ListUsers = op(
  n0,
  _LU,
  0,
  () => ListUsersRequest,
  () => ListUsersResponse
);
