// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ARll,
  _DR,
  _dR,
  _DRes,
  _DRRe,
  _DRRes,
  _Endp,
  _eQN,
  _Fi,
  _Fil,
  _it,
  _OIS,
  _oIS,
  _rEe,
  _Reg,
  _Regi,
  _rIeg,
  _RL,
  _RN,
  _RNe,
  _rNe,
  _RNSL,
  _xN,
  FilterList,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeRegionsRequest = struct(
  n0,
  _DRRe,
  0,
  [_RNe, _ARll, _DR, _Fi],
  [
    [
      () => RegionNameStringList,
      {
        [_xN]: _RN,
      },
    ],
    2,
    [
      2,
      {
        [_eQN]: `DryRun`,
        [_xN]: _dR,
      },
    ],
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
  ]
);
export var DescribeRegionsResult = struct(
  n0,
  _DRRes,
  0,
  [_Reg],
  [
    [
      () => RegionList,
      {
        [_eQN]: `RegionInfo`,
        [_xN]: _rIeg,
      },
    ],
  ]
);
export var Region = struct(
  n0,
  _Regi,
  0,
  [_OIS, _RN, _Endp],
  [
    [
      0,
      {
        [_eQN]: `OptInStatus`,
        [_xN]: _oIS,
      },
    ],
    [
      0,
      {
        [_eQN]: `RegionName`,
        [_xN]: _rNe,
      },
    ],
    [
      0,
      {
        [_eQN]: `RegionEndpoint`,
        [_xN]: _rEe,
      },
    ],
  ]
);
export var RegionList = list(n0, _RL, 0, [
  () => Region,
  {
    [_xN]: _it,
  },
]);
export var RegionNameStringList = list(n0, _RNSL, 0, [
  0,
  {
    [_xN]: _RN,
  },
]);
export var DescribeRegions = op(
  n0,
  _DRes,
  0,
  () => DescribeRegionsRequest,
  () => DescribeRegionsResult
);
