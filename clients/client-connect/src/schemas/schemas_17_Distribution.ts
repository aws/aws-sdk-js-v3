// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _ACg,
  _ATDGU,
  _ATDGUR,
  _ATDGURs,
  _D,
  _Di,
  _Dis,
  _DL,
  _DTDG,
  _DTDGe,
  _DTDGR,
  _DTDGRe,
  _DTDGRes,
  _DTDGResc,
  _DTDGU,
  _DTDGUR,
  _DTDGURi,
  _Ena,
  _GTD,
  _GTDR,
  _GTDRe,
  _h,
  _hQ,
  _I,
  _IAns,
  _ID,
  _II,
  _LTDGU,
  _LTDGUR,
  _LTDGURi,
  _mR,
  _MRa,
  _N,
  _NT,
  _nT,
  _Per,
  _Reg,
  _SIC,
  _SID,
  _SIDL,
  _St,
  _Ta,
  _TCe,
  _TDG,
  _TDGI,
  _TDGUS,
  _TDGUSL,
  _UI,
  _UTD,
  _UTDR,
  _UTDRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AgentConfig = struct(n0, _ACg, 0, [_Di], [() => DistributionList]);
export var AssociateTrafficDistributionGroupUserRequest = struct(n0, _ATDGUR, 0, [_TDGI, _UI, _II], [[0, 1], 0, 0]);
export var AssociateTrafficDistributionGroupUserResponse = struct(n0, _ATDGURs, 0, [], []);
export var DeleteTrafficDistributionGroupRequest = struct(n0, _DTDGR, 0, [_TDGI], [[0, 1]]);
export var DeleteTrafficDistributionGroupResponse = struct(n0, _DTDGRe, 0, [], []);
export var DescribeTrafficDistributionGroupRequest = struct(n0, _DTDGRes, 0, [_TDGI], [[0, 1]]);
export var DescribeTrafficDistributionGroupResponse = struct(
  n0,
  _DTDGResc,
  0,
  [_TDG],
  [() => TrafficDistributionGroup]
);
export var DisassociateTrafficDistributionGroupUserRequest = struct(
  n0,
  _DTDGUR,
  0,
  [_TDGI, _UI, _II],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _UI,
      },
    ],
    [
      0,
      {
        [_hQ]: _II,
      },
    ],
  ]
);
export var DisassociateTrafficDistributionGroupUserResponse = struct(n0, _DTDGURi, 0, [], []);
export var Distribution = struct(n0, _Dis, 0, [_Reg, _Per], [0, 1]);
export var GetTrafficDistributionRequest = struct(n0, _GTDR, 0, [_I], [[0, 1]]);
export var GetTrafficDistributionResponse = struct(
  n0,
  _GTDRe,
  0,
  [_TCe, _I, _A, _SIC, _ACg],
  [() => TelephonyConfig, 0, 0, () => SignInConfig, () => AgentConfig]
);
export var ListTrafficDistributionGroupUsersRequest = struct(
  n0,
  _LTDGUR,
  0,
  [_TDGI, _MRa, _NT],
  [
    [0, 1],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListTrafficDistributionGroupUsersResponse = struct(
  n0,
  _LTDGURi,
  0,
  [_NT, _TDGUSL],
  [0, () => TrafficDistributionGroupUserSummaryList]
);
export var SignInConfig = struct(n0, _SIC, 0, [_Di], [() => SignInDistributionList]);
export var SignInDistribution = struct(n0, _SID, 0, [_Reg, _Ena], [0, 2]);
export var TelephonyConfig = struct(n0, _TCe, 0, [_Di], [() => DistributionList]);
export var TrafficDistributionGroup = struct(
  n0,
  _TDG,
  0,
  [_I, _A, _N, _D, _IAns, _St, _Ta, _ID],
  [0, 0, 0, 0, 0, 0, 128 | 0, 2]
);
export var TrafficDistributionGroupUserSummary = struct(n0, _TDGUS, 0, [_UI], [0]);
export var UpdateTrafficDistributionRequest = struct(
  n0,
  _UTDR,
  0,
  [_I, _TCe, _SIC, _ACg],
  [[0, 1], () => TelephonyConfig, () => SignInConfig, () => AgentConfig]
);
export var UpdateTrafficDistributionResponse = struct(n0, _UTDRp, 0, [], []);
export var DistributionList = list(n0, _DL, 0, () => Distribution);
export var SignInDistributionList = list(n0, _SIDL, 0, () => SignInDistribution);
export var TrafficDistributionGroupUserSummaryList = list(n0, _TDGUSL, 0, () => TrafficDistributionGroupUserSummary);
export var AssociateTrafficDistributionGroupUser = op(
  n0,
  _ATDGU,
  {
    [_h]: ["PUT", "/traffic-distribution-group/{TrafficDistributionGroupId}/user", 200],
  },
  () => AssociateTrafficDistributionGroupUserRequest,
  () => AssociateTrafficDistributionGroupUserResponse
);
export var DeleteTrafficDistributionGroup = op(
  n0,
  _DTDG,
  {
    [_h]: ["DELETE", "/traffic-distribution-group/{TrafficDistributionGroupId}", 200],
  },
  () => DeleteTrafficDistributionGroupRequest,
  () => DeleteTrafficDistributionGroupResponse
);
export var DescribeTrafficDistributionGroup = op(
  n0,
  _DTDGe,
  {
    [_h]: ["GET", "/traffic-distribution-group/{TrafficDistributionGroupId}", 200],
  },
  () => DescribeTrafficDistributionGroupRequest,
  () => DescribeTrafficDistributionGroupResponse
);
export var DisassociateTrafficDistributionGroupUser = op(
  n0,
  _DTDGU,
  {
    [_h]: ["DELETE", "/traffic-distribution-group/{TrafficDistributionGroupId}/user", 200],
  },
  () => DisassociateTrafficDistributionGroupUserRequest,
  () => DisassociateTrafficDistributionGroupUserResponse
);
export var GetTrafficDistribution = op(
  n0,
  _GTD,
  {
    [_h]: ["GET", "/traffic-distribution/{Id}", 200],
  },
  () => GetTrafficDistributionRequest,
  () => GetTrafficDistributionResponse
);
export var ListTrafficDistributionGroupUsers = op(
  n0,
  _LTDGU,
  {
    [_h]: ["GET", "/traffic-distribution-group/{TrafficDistributionGroupId}/user", 200],
  },
  () => ListTrafficDistributionGroupUsersRequest,
  () => ListTrafficDistributionGroupUsersResponse
);
export var UpdateTrafficDistribution = op(
  n0,
  _UTD,
  {
    [_h]: ["PUT", "/traffic-distribution/{Id}", 200],
  },
  () => UpdateTrafficDistributionRequest,
  () => UpdateTrafficDistributionResponse
);
