// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _CPG,
  _CPGR,
  _CPGRr,
  _DR,
  _dR,
  _eQN,
  _GA,
  _gA,
  _GIr,
  _gIr,
  _GN,
  _gN,
  _PCa,
  _pCa,
  _PG,
  _pG,
  _SLp,
  _sLp,
  _St,
  _st,
  _Str,
  _str,
  _T,
  _TS,
  _tS,
  _TSa,
  _xN,
  n0,
  TagList,
  TagSpecificationList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreatePlacementGroupRequest = struct(
  n0,
  _CPGR,
  0,
  [_PCa, _TS, _SLp, _DR, _GN, _Str],
  [
    1,
    [
      () => TagSpecificationList,
      {
        [_xN]: _TSa,
      },
    ],
    0,
    [
      2,
      {
        [_eQN]: `DryRun`,
        [_xN]: _dR,
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
        [_eQN]: `Strategy`,
        [_xN]: _str,
      },
    ],
  ]
);
export var CreatePlacementGroupResult = struct(
  n0,
  _CPGRr,
  0,
  [_PG],
  [
    [
      () => PlacementGroup,
      {
        [_eQN]: `PlacementGroup`,
        [_xN]: _pG,
      },
    ],
  ]
);
export var PlacementGroup = struct(
  n0,
  _PG,
  0,
  [_GN, _St, _Str, _PCa, _GIr, _T, _GA, _SLp],
  [
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
        [_eQN]: `State`,
        [_xN]: _st,
      },
    ],
    [
      0,
      {
        [_eQN]: `Strategy`,
        [_xN]: _str,
      },
    ],
    [
      1,
      {
        [_eQN]: `PartitionCount`,
        [_xN]: _pCa,
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
        [_eQN]: `GroupArn`,
        [_xN]: _gA,
      },
    ],
    [
      0,
      {
        [_eQN]: `SpreadLevel`,
        [_xN]: _sLp,
      },
    ],
  ]
);
export var CreatePlacementGroup = op(
  n0,
  _CPG,
  0,
  () => CreatePlacementGroupRequest,
  () => CreatePlacementGroupResult
);
