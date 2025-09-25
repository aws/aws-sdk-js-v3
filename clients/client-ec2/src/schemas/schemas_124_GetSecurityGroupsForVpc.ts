// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _De,
  _de,
  _DR,
  _eQN,
  _Fi,
  _Fil,
  _GIr,
  _gIr,
  _GN,
  _gN,
  _GSGFV,
  _GSGFVR,
  _GSGFVRe,
  _it,
  _MR,
  _NTe,
  _nTe,
  _OI,
  _oI,
  _PVIr,
  _pVIr,
  _SGFV,
  _SGFVe,
  _SGFVL,
  _sGFVS,
  _T,
  _tS,
  _VI,
  _xN,
  FilterList,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetSecurityGroupsForVpcRequest = struct(
  n0,
  _GSGFVR,
  0,
  [_VI, _NTe, _MR, _Fi, _DR],
  [
    0,
    0,
    1,
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
    2,
  ]
);
export var GetSecurityGroupsForVpcResult = struct(
  n0,
  _GSGFVRe,
  0,
  [_NTe, _SGFV],
  [
    [
      0,
      {
        [_eQN]: `NextToken`,
        [_xN]: _nTe,
      },
    ],
    [
      () => SecurityGroupForVpcList,
      {
        [_eQN]: `SecurityGroupForVpcSet`,
        [_xN]: _sGFVS,
      },
    ],
  ]
);
export var SecurityGroupForVpc = struct(
  n0,
  _SGFVe,
  0,
  [_De, _GN, _OI, _GIr, _T, _PVIr],
  [
    [
      0,
      {
        [_eQN]: `Description`,
        [_xN]: _de,
      },
    ],
    [
      0,
      {
        [_eQN]: `GroupName`,
        [_xN]: _gN,
      },
    ],
    [
      0,
      {
        [_eQN]: `OwnerId`,
        [_xN]: _oI,
      },
    ],
    [
      0,
      {
        [_eQN]: `GroupId`,
        [_xN]: _gIr,
      },
    ],
    [
      () => TagList,
      {
        [_eQN]: `TagSet`,
        [_xN]: _tS,
      },
    ],
    [
      0,
      {
        [_eQN]: `PrimaryVpcId`,
        [_xN]: _pVIr,
      },
    ],
  ]
);
export var SecurityGroupForVpcList = list(n0, _SGFVL, 0, [
  () => SecurityGroupForVpc,
  {
    [_xN]: _it,
  },
]);
export var GetSecurityGroupsForVpc = op(
  n0,
  _GSGFV,
  0,
  () => GetSecurityGroupsForVpcRequest,
  () => GetSecurityGroupsForVpcResult
);
