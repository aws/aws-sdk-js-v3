// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _BO,
  _C,
  _Co,
  _Cou,
  _D,
  _DDi,
  _Dep,
  _DGe,
  _DGRes,
  _DGResc,
  _DNi,
  _DNP,
  _DRes,
  _DRRes,
  _DRResc,
  _DUe,
  _DURes,
  _DUResc,
  _ED,
  _Em,
  _F,
  _FN,
  _G,
  _GI,
  _Gr,
  _HFGAL,
  _I,
  _In,
  _IPISI,
  _IPUI,
  _IPUIP,
  _JT,
  _LG,
  _LGF,
  _LGM,
  _LGMR,
  _LGMRi,
  _LGR,
  _LGRi,
  _LN,
  _LR,
  _LRF,
  _LRR,
  _LRRi,
  _LU,
  _LUF,
  _LUR,
  _LURi,
  _MDD,
  _Me,
  _Mem,
  _MPD,
  _MRa,
  _N,
  _NP,
  _NT,
  _O,
  _OI,
  _PEP,
  _Res,
  _Reso,
  _RI,
  _S,
  _St,
  _Te,
  _Ty,
  _U,
  _UIs,
  _UP,
  _UR,
  _Us,
  _ZC,
  n0,
} from "./schemas_0";
import { UserAttribute } from "./schemas_7_User";
import { BookingOptions, ResourceDescription } from "./schemas_24_Resource";

/* eslint no-var: 0 */

export var DescribeGroupRequest = struct(n0, _DGRes, 0, [_OI, _GI], [0, 0]);
export var DescribeGroupResponse = struct(n0, _DGResc, 0, [_GI, _N, _Em, _S, _ED, _DDi, _HFGAL], [0, 0, 0, 0, 4, 4, 2]);
export var DescribeResourceRequest = struct(n0, _DRRes, 0, [_OI, _RI], [0, 0]);
export var DescribeResourceResponse = struct(
  n0,
  _DRResc,
  0,
  [_RI, _Em, _N, _Ty, _BO, _S, _ED, _DDi, _D, _HFGAL],
  [0, 0, 0, 0, () => BookingOptions, 0, 4, 4, [() => ResourceDescription, 0], 2]
);
export var DescribeUserRequest = struct(n0, _DURes, 0, [_OI, _UIs], [0, 0]);
export var DescribeUserResponse = struct(
  n0,
  _DUResc,
  0,
  [
    _UIs,
    _N,
    _Em,
    _DNi,
    _S,
    _UR,
    _ED,
    _DDi,
    _MPD,
    _MDD,
    _FN,
    _LN,
    _HFGAL,
    _In,
    _Te,
    _St,
    _JT,
    _C,
    _Co,
    _ZC,
    _Dep,
    _Cou,
    _O,
    _IPUI,
    _IPISI,
  ],
  [
    0,
    0,
    0,
    [() => UserAttribute, 0],
    0,
    0,
    4,
    4,
    4,
    4,
    [() => UserAttribute, 0],
    [() => UserAttribute, 0],
    2,
    [() => UserAttribute, 0],
    [() => UserAttribute, 0],
    [() => UserAttribute, 0],
    [() => UserAttribute, 0],
    [() => UserAttribute, 0],
    [() => UserAttribute, 0],
    [() => UserAttribute, 0],
    [() => UserAttribute, 0],
    [() => UserAttribute, 0],
    [() => UserAttribute, 0],
    0,
    0,
  ]
);
export var Group = struct(n0, _G, 0, [_I, _Em, _N, _S, _ED, _DDi], [0, 0, 0, 0, 4, 4]);
export var ListGroupMembersRequest = struct(n0, _LGMR, 0, [_OI, _GI, _NT, _MRa], [0, 0, 0, 1]);
export var ListGroupMembersResponse = struct(n0, _LGMRi, 0, [_Me, _NT], [() => Members, 0]);
export var ListGroupsFilters = struct(n0, _LGF, 0, [_NP, _PEP, _S], [0, 0, 0]);
export var ListGroupsRequest = struct(n0, _LGR, 0, [_OI, _NT, _MRa, _F], [0, 0, 1, () => ListGroupsFilters]);
export var ListGroupsResponse = struct(n0, _LGRi, 0, [_Gr, _NT], [() => Groups, 0]);
export var ListResourcesFilters = struct(n0, _LRF, 0, [_NP, _PEP, _S], [0, 0, 0]);
export var ListResourcesRequest = struct(n0, _LRR, 0, [_OI, _NT, _MRa, _F], [0, 0, 1, () => ListResourcesFilters]);
export var ListResourcesResponse = struct(n0, _LRRi, 0, [_Res, _NT], [[() => Resources, 0], 0]);
export var ListUsersFilters = struct(
  n0,
  _LUF,
  0,
  [_UP, _DNP, _PEP, _S, _IPUIP],
  [0, [() => UserAttribute, 0], 0, 0, 0]
);
export var ListUsersRequest = struct(n0, _LUR, 0, [_OI, _NT, _MRa, _F], [0, 0, 1, [() => ListUsersFilters, 0]]);
export var ListUsersResponse = struct(n0, _LURi, 0, [_U, _NT], [() => Users, 0]);
export var Member = struct(n0, _Mem, 0, [_I, _N, _Ty, _S, _ED, _DDi], [0, 0, 0, 0, 4, 4]);
export var Resource = struct(
  n0,
  _Reso,
  0,
  [_I, _Em, _N, _Ty, _S, _ED, _DDi, _D],
  [0, 0, 0, 0, 0, 4, 4, [() => ResourceDescription, 0]]
);
export var User = struct(
  n0,
  _Us,
  0,
  [_I, _Em, _N, _DNi, _S, _UR, _ED, _DDi, _IPUI, _IPISI],
  [0, 0, 0, 0, 0, 0, 4, 4, 0, 0]
);
export var Groups = list(n0, _Gr, 0, () => Group);
export var Members = list(n0, _Me, 0, () => Member);
export var Resources = list(n0, _Res, 0, [() => Resource, 0]);
export var Users = list(n0, _U, 0, () => User);
export var DescribeGroup = op(
  n0,
  _DGe,
  2,
  () => DescribeGroupRequest,
  () => DescribeGroupResponse
);
export var DescribeResource = op(
  n0,
  _DRes,
  2,
  () => DescribeResourceRequest,
  () => DescribeResourceResponse
);
export var DescribeUser = op(
  n0,
  _DUe,
  2,
  () => DescribeUserRequest,
  () => DescribeUserResponse
);
export var ListGroupMembers = op(
  n0,
  _LGM,
  2,
  () => ListGroupMembersRequest,
  () => ListGroupMembersResponse
);
export var ListGroups = op(
  n0,
  _LG,
  2,
  () => ListGroupsRequest,
  () => ListGroupsResponse
);
export var ListResources = op(
  n0,
  _LR,
  2,
  () => ListResourcesRequest,
  () => ListResourcesResponse
);
export var ListUsers = op(
  n0,
  _LU,
  2,
  () => ListUsersRequest,
  () => ListUsersResponse
);
