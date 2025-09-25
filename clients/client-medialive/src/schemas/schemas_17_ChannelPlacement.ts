// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Ar,
  _ar,
  _CCPG,
  _CCPGR,
  _CCPGRr,
  _ch,
  _Cha,
  _CI,
  _cI,
  _CPG,
  _cPG,
  _CPGI,
  _DCPG,
  _DCPGe,
  _DCPGR,
  _DCPGRe,
  _DCPGRes,
  _DCPGResc,
  _DCPGS,
  _hQ,
  _ht,
  _I,
  _i,
  _iTd,
  _jN,
  _LCPG,
  _LCPGR,
  _LCPGRi,
  _lODCPGS,
  _MR,
  _mR,
  _N,
  _n,
  _No,
  _no,
  _NT,
  _nT,
  _RIe,
  _rIe,
  _St,
  _st,
  _Ta,
  _ta,
  _UCPG,
  _UCPGR,
  _UCPGRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateChannelPlacementGroupRequest = struct(
  n0,
  _CCPGR,
  0,
  [_CI, _N, _No, _RIe, _Ta],
  [
    [0, 1],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _no,
      },
    ],
    [
      0,
      {
        [_jN]: _rIe,
        [_iTd]: 1,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _ta,
      },
    ],
  ]
);
export var CreateChannelPlacementGroupResponse = struct(
  n0,
  _CCPGRr,
  0,
  [_Ar, _Cha, _CI, _I, _N, _No, _St],
  [
    [
      0,
      {
        [_jN]: _ar,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _ch,
      },
    ],
    [
      0,
      {
        [_jN]: _cI,
      },
    ],
    [
      0,
      {
        [_jN]: _i,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _no,
      },
    ],
    [
      0,
      {
        [_jN]: _st,
      },
    ],
  ]
);
export var DeleteChannelPlacementGroupRequest = struct(
  n0,
  _DCPGR,
  0,
  [_CPGI, _CI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteChannelPlacementGroupResponse = struct(
  n0,
  _DCPGRe,
  0,
  [_Ar, _Cha, _CI, _I, _N, _No, _St],
  [
    [
      0,
      {
        [_jN]: _ar,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _ch,
      },
    ],
    [
      0,
      {
        [_jN]: _cI,
      },
    ],
    [
      0,
      {
        [_jN]: _i,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _no,
      },
    ],
    [
      0,
      {
        [_jN]: _st,
      },
    ],
  ]
);
export var DescribeChannelPlacementGroupRequest = struct(
  n0,
  _DCPGRes,
  0,
  [_CPGI, _CI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DescribeChannelPlacementGroupResponse = struct(
  n0,
  _DCPGResc,
  0,
  [_Ar, _Cha, _CI, _I, _N, _No, _St],
  [
    [
      0,
      {
        [_jN]: _ar,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _ch,
      },
    ],
    [
      0,
      {
        [_jN]: _cI,
      },
    ],
    [
      0,
      {
        [_jN]: _i,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _no,
      },
    ],
    [
      0,
      {
        [_jN]: _st,
      },
    ],
  ]
);
export var DescribeChannelPlacementGroupSummary = struct(
  n0,
  _DCPGS,
  0,
  [_Ar, _Cha, _CI, _I, _N, _No, _St],
  [
    [
      0,
      {
        [_jN]: _ar,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _ch,
      },
    ],
    [
      0,
      {
        [_jN]: _cI,
      },
    ],
    [
      0,
      {
        [_jN]: _i,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _no,
      },
    ],
    [
      0,
      {
        [_jN]: _st,
      },
    ],
  ]
);
export var ListChannelPlacementGroupsRequest = struct(
  n0,
  _LCPGR,
  0,
  [_CI, _MR, _NT],
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
export var ListChannelPlacementGroupsResponse = struct(
  n0,
  _LCPGRi,
  0,
  [_CPG, _NT],
  [
    [
      () => __listOfDescribeChannelPlacementGroupSummary,
      {
        [_jN]: _cPG,
      },
    ],
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
  ]
);
export var UpdateChannelPlacementGroupRequest = struct(
  n0,
  _UCPGR,
  0,
  [_CPGI, _CI, _N, _No],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _no,
      },
    ],
  ]
);
export var UpdateChannelPlacementGroupResponse = struct(
  n0,
  _UCPGRp,
  0,
  [_Ar, _Cha, _CI, _I, _N, _No, _St],
  [
    [
      0,
      {
        [_jN]: _ar,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _ch,
      },
    ],
    [
      0,
      {
        [_jN]: _cI,
      },
    ],
    [
      0,
      {
        [_jN]: _i,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _no,
      },
    ],
    [
      0,
      {
        [_jN]: _st,
      },
    ],
  ]
);
export var __listOfDescribeChannelPlacementGroupSummary = list(n0, _lODCPGS, 0, [
  () => DescribeChannelPlacementGroupSummary,
  0,
]);
export var CreateChannelPlacementGroup = op(
  n0,
  _CCPG,
  {
    [_ht]: ["POST", "/prod/clusters/{ClusterId}/channelplacementgroups", 201],
  },
  () => CreateChannelPlacementGroupRequest,
  () => CreateChannelPlacementGroupResponse
);
export var DeleteChannelPlacementGroup = op(
  n0,
  _DCPG,
  {
    [_ht]: ["DELETE", "/prod/clusters/{ClusterId}/channelplacementgroups/{ChannelPlacementGroupId}", 200],
  },
  () => DeleteChannelPlacementGroupRequest,
  () => DeleteChannelPlacementGroupResponse
);
export var DescribeChannelPlacementGroup = op(
  n0,
  _DCPGe,
  {
    [_ht]: ["GET", "/prod/clusters/{ClusterId}/channelplacementgroups/{ChannelPlacementGroupId}", 200],
  },
  () => DescribeChannelPlacementGroupRequest,
  () => DescribeChannelPlacementGroupResponse
);
export var ListChannelPlacementGroups = op(
  n0,
  _LCPG,
  {
    [_ht]: ["GET", "/prod/clusters/{ClusterId}/channelplacementgroups", 200],
  },
  () => ListChannelPlacementGroupsRequest,
  () => ListChannelPlacementGroupsResponse
);
export var UpdateChannelPlacementGroup = op(
  n0,
  _UCPG,
  {
    [_ht]: ["PUT", "/prod/clusters/{ClusterId}/channelplacementgroups/{ChannelPlacementGroupId}", 200],
  },
  () => UpdateChannelPlacementGroupRequest,
  () => UpdateChannelPlacementGroupResponse
);
