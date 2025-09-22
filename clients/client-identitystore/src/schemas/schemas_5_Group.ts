// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _DGMe,
  _DGMRes,
  _DGMResc,
  _GGMI,
  _GGMIR,
  _GGMIRe,
  _GI,
  _GIr,
  _GM,
  _GMER,
  _GMERr,
  _GMr,
  _IMIG,
  _IMIGR,
  _IMIGRs,
  _ISI,
  _LGM,
  _LGMFM,
  _LGMFMR,
  _LGMFMRi,
  _LGMR,
  _LGMRi,
  _ME,
  _MI,
  _MIe,
  _MR,
  _NT,
  _Res,
  _UI,
  n0,
} from "./schemas_0";
import { SensitiveBooleanType } from "./schemas_6_User";

/* eslint no-var: 0 */

export var DescribeGroupMembershipRequest = struct(n0, _DGMRes, 0, [_ISI, _MIe], [0, 0]);
export var DescribeGroupMembershipResponse = struct(n0, _DGMResc, 0, [_ISI, _MIe, _GI, _MI], [0, 0, 0, () => MemberId]);
export var GetGroupMembershipIdRequest = struct(n0, _GGMIR, 0, [_ISI, _GI, _MI], [0, 0, () => MemberId]);
export var GetGroupMembershipIdResponse = struct(n0, _GGMIRe, 0, [_MIe, _ISI], [0, 0]);
export var GroupMembership = struct(n0, _GM, 0, [_ISI, _MIe, _GI, _MI], [0, 0, 0, () => MemberId]);
export var GroupMembershipExistenceResult = struct(
  n0,
  _GMER,
  0,
  [_GI, _MI, _ME],
  [0, () => MemberId, [() => SensitiveBooleanType, 0]]
);
export var IsMemberInGroupsRequest = struct(n0, _IMIGR, 0, [_ISI, _MI, _GIr], [0, () => MemberId, 64 | 0]);
export var IsMemberInGroupsResponse = struct(n0, _IMIGRs, 0, [_Res], [[() => GroupMembershipExistenceResults, 0]]);
export var ListGroupMembershipsForMemberRequest = struct(
  n0,
  _LGMFMR,
  0,
  [_ISI, _MI, _MR, _NT],
  [0, () => MemberId, 1, 0]
);
export var ListGroupMembershipsForMemberResponse = struct(n0, _LGMFMRi, 0, [_GMr, _NT], [() => GroupMemberships, 0]);
export var ListGroupMembershipsRequest = struct(n0, _LGMR, 0, [_ISI, _GI, _MR, _NT], [0, 0, 1, 0]);
export var ListGroupMembershipsResponse = struct(n0, _LGMRi, 0, [_GMr, _NT], [() => GroupMemberships, 0]);
export var GroupIds = 64 | 0;

export var GroupMembershipExistenceResults = list(n0, _GMERr, 0, [() => GroupMembershipExistenceResult, 0]);
export var GroupMemberships = list(n0, _GMr, 0, () => GroupMembership);
export var MemberId = uni(n0, _MI, 0, [_UI], [0]);
export var DescribeGroupMembership = op(
  n0,
  _DGMe,
  0,
  () => DescribeGroupMembershipRequest,
  () => DescribeGroupMembershipResponse
);
export var GetGroupMembershipId = op(
  n0,
  _GGMI,
  0,
  () => GetGroupMembershipIdRequest,
  () => GetGroupMembershipIdResponse
);
export var IsMemberInGroups = op(
  n0,
  _IMIG,
  0,
  () => IsMemberInGroupsRequest,
  () => IsMemberInGroupsResponse
);
export var ListGroupMemberships = op(
  n0,
  _LGM,
  0,
  () => ListGroupMembershipsRequest,
  () => ListGroupMembershipsResponse
);
export var ListGroupMembershipsForMember = op(
  n0,
  _LGMFM,
  0,
  () => ListGroupMembershipsForMemberRequest,
  () => ListGroupMembershipsForMemberResponse
);
