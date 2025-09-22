// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _CSG,
  _CSGR,
  _CSGRr,
  _De,
  _DR,
  _dR,
  _eQN,
  _GD,
  _GIr,
  _gIr,
  _GN,
  _SGA,
  _sGA,
  _T,
  _TS,
  _tS,
  _TSa,
  _VI,
  _xN,
  n0,
  TagList,
  TagSpecificationList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateSecurityGroupRequest = struct(
  n0,
  _CSGR,
  0,
  [_De, _GN, _VI, _TS, _DR],
  [
    [
      0,
      {
        [_xN]: _GD,
      },
    ],
    0,
    0,
    [
      () => TagSpecificationList,
      {
        [_xN]: _TSa,
      },
    ],
    [
      2,
      {
        [_eQN]: `DryRun`,
        [_xN]: _dR,
      },
    ],
  ]
);
export var CreateSecurityGroupResult = struct(
  n0,
  _CSGRr,
  0,
  [_GIr, _T, _SGA],
  [
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
        [_eQN]: `SecurityGroupArn`,
        [_xN]: _sGA,
      },
    ],
  ]
);
export var CreateSecurityGroup = op(
  n0,
  _CSG,
  0,
  () => CreateSecurityGroupRequest,
  () => CreateSecurityGroupResult
);
