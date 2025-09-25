// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AAI,
  _Ar,
  _CGM,
  _CGMR,
  _CGMRr,
  _DGM,
  _DGMe,
  _DGMR,
  _DGMRe,
  _DGMRes,
  _DGMResc,
  _GM,
  _GML,
  _GN,
  _h,
  _hQ,
  _LGM,
  _LGMR,
  _LGMRi,
  _MN,
  _MR,
  _mr,
  _Na,
  _NT,
  _nt,
  _RI,
  _St,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateGroupMembershipRequest = struct(
  n0,
  _CGMR,
  0,
  [_MN, _GN, _AAI, _Na],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var CreateGroupMembershipResponse = struct(n0, _CGMRr, 0, [_GM, _RI, _St], [() => GroupMember, 0, [1, 32]]);
export var DeleteGroupMembershipRequest = struct(
  n0,
  _DGMR,
  0,
  [_MN, _GN, _AAI, _Na],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var DeleteGroupMembershipResponse = struct(n0, _DGMRe, 0, [_RI, _St], [0, [1, 32]]);
export var DescribeGroupMembershipRequest = struct(
  n0,
  _DGMRes,
  0,
  [_MN, _GN, _AAI, _Na],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var DescribeGroupMembershipResponse = struct(n0, _DGMResc, 0, [_GM, _RI, _St], [() => GroupMember, 0, [1, 32]]);
export var GroupMember = struct(n0, _GM, 0, [_Ar, _MN], [0, 0]);
export var ListGroupMembershipsRequest = struct(
  n0,
  _LGMR,
  0,
  [_GN, _NT, _MR, _AAI, _Na],
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
    [0, 1],
  ]
);
export var ListGroupMembershipsResponse = struct(
  n0,
  _LGMRi,
  0,
  [_GML, _NT, _RI, _St],
  [() => GroupMemberList, 0, 0, [1, 32]]
);
export var GroupMemberList = list(n0, _GML, 0, () => GroupMember);
export var CreateGroupMembership = op(
  n0,
  _CGM,
  {
    [_h]: ["PUT", "/accounts/{AwsAccountId}/namespaces/{Namespace}/groups/{GroupName}/members/{MemberName}", 200],
  },
  () => CreateGroupMembershipRequest,
  () => CreateGroupMembershipResponse
);
export var DeleteGroupMembership = op(
  n0,
  _DGM,
  {
    [_h]: ["DELETE", "/accounts/{AwsAccountId}/namespaces/{Namespace}/groups/{GroupName}/members/{MemberName}", 200],
  },
  () => DeleteGroupMembershipRequest,
  () => DeleteGroupMembershipResponse
);
export var DescribeGroupMembership = op(
  n0,
  _DGMe,
  {
    [_h]: ["GET", "/accounts/{AwsAccountId}/namespaces/{Namespace}/groups/{GroupName}/members/{MemberName}", 200],
  },
  () => DescribeGroupMembershipRequest,
  () => DescribeGroupMembershipResponse
);
export var ListGroupMemberships = op(
  n0,
  _LGM,
  {
    [_h]: ["GET", "/accounts/{AwsAccountId}/namespaces/{Namespace}/groups/{GroupName}/members", 200],
  },
  () => ListGroupMembershipsRequest,
  () => ListGroupMembershipsResponse
);
