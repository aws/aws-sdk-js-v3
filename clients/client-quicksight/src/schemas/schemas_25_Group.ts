// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AAI,
  _Ar,
  _CGr,
  _CGRr,
  _CGRre,
  _De,
  _DGes,
  _DGRes,
  _DGResc,
  _Fi,
  _GLr,
  _GN,
  _Gr,
  _GSF,
  _GSFL,
  _h,
  _hQ,
  _LG,
  _LGR,
  _LGRi,
  _MR,
  _mr,
  _N,
  _Na,
  _NT,
  _nt,
  _Op,
  _PIr,
  _RI,
  _SG,
  _SGR,
  _SGRe,
  _St,
  _UGp,
  _UGR,
  _UGRp,
  _V,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateGroupRequest = struct(n0, _CGRr, 0, [_GN, _De, _AAI, _Na], [0, 0, [0, 1], [0, 1]]);
export var CreateGroupResponse = struct(n0, _CGRre, 0, [_Gr, _RI, _St], [() => Group, 0, [1, 32]]);
export var DescribeGroupRequest = struct(
  n0,
  _DGRes,
  0,
  [_GN, _AAI, _Na],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var DescribeGroupResponse = struct(n0, _DGResc, 0, [_Gr, _RI, _St], [() => Group, 0, [1, 32]]);
export var Group = struct(n0, _Gr, 0, [_Ar, _GN, _De, _PIr], [0, 0, 0, 0]);
export var GroupSearchFilter = struct(n0, _GSF, 0, [_Op, _N, _V], [0, 0, 0]);
export var ListGroupsRequest = struct(
  n0,
  _LGR,
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
export var ListGroupsResponse = struct(n0, _LGRi, 0, [_GLr, _NT, _RI, _St], [() => GroupList, 0, 0, [1, 32]]);
export var SearchGroupsRequest = struct(
  n0,
  _SGR,
  0,
  [_AAI, _NT, _MR, _Na, _Fi],
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
    () => GroupSearchFilterList,
  ]
);
export var SearchGroupsResponse = struct(n0, _SGRe, 0, [_GLr, _NT, _RI, _St], [() => GroupList, 0, 0, [1, 32]]);
export var UpdateGroupRequest = struct(n0, _UGR, 0, [_GN, _De, _AAI, _Na], [[0, 1], 0, [0, 1], [0, 1]]);
export var UpdateGroupResponse = struct(n0, _UGRp, 0, [_Gr, _RI, _St], [() => Group, 0, [1, 32]]);
export var GroupList = list(n0, _GLr, 0, () => Group);
export var GroupSearchFilterList = list(n0, _GSFL, 0, () => GroupSearchFilter);
export var CreateGroup = op(
  n0,
  _CGr,
  {
    [_h]: ["POST", "/accounts/{AwsAccountId}/namespaces/{Namespace}/groups", 200],
  },
  () => CreateGroupRequest,
  () => CreateGroupResponse
);
export var DescribeGroup = op(
  n0,
  _DGes,
  {
    [_h]: ["GET", "/accounts/{AwsAccountId}/namespaces/{Namespace}/groups/{GroupName}", 200],
  },
  () => DescribeGroupRequest,
  () => DescribeGroupResponse
);
export var ListGroups = op(
  n0,
  _LG,
  {
    [_h]: ["GET", "/accounts/{AwsAccountId}/namespaces/{Namespace}/groups", 200],
  },
  () => ListGroupsRequest,
  () => ListGroupsResponse
);
export var SearchGroups = op(
  n0,
  _SG,
  {
    [_h]: ["POST", "/accounts/{AwsAccountId}/namespaces/{Namespace}/groups-search", 200],
  },
  () => SearchGroupsRequest,
  () => SearchGroupsResponse
);
export var UpdateGroup = op(
  n0,
  _UGp,
  {
    [_h]: ["PUT", "/accounts/{AwsAccountId}/namespaces/{Namespace}/groups/{GroupName}", 200],
  },
  () => UpdateGroupRequest,
  () => UpdateGroupResponse
);
