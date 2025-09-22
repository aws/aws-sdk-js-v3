// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _DMA,
  _DMAR,
  _DMARe,
  _DR,
  _dR,
  _eQN,
  _f,
  _Fi,
  _it,
  _MAS,
  _MASo,
  _MASS,
  _mASS,
  _MR,
  _mR,
  _MSo,
  _mSo,
  _NTe,
  _nTe,
  _PI,
  _pI,
  _PIu,
  _xN,
  FilterList,
  n0,
  ValueStringList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeMovingAddressesRequest = struct(
  n0,
  _DMAR,
  0,
  [_DR, _PIu, _NTe, _Fi, _MR],
  [
    [
      2,
      {
        [_eQN]: `DryRun`,
        [_xN]: _dR,
      },
    ],
    [
      () => ValueStringList,
      {
        [_eQN]: `PublicIp`,
        [_xN]: _pI,
      },
    ],
    [
      0,
      {
        [_eQN]: `NextToken`,
        [_xN]: _nTe,
      },
    ],
    [
      () => FilterList,
      {
        [_eQN]: `Filter`,
        [_xN]: _f,
      },
    ],
    [
      1,
      {
        [_eQN]: `MaxResults`,
        [_xN]: _mR,
      },
    ],
  ]
);
export var DescribeMovingAddressesResult = struct(
  n0,
  _DMARe,
  0,
  [_MAS, _NTe],
  [
    [
      () => MovingAddressStatusSet,
      {
        [_eQN]: `MovingAddressStatusSet`,
        [_xN]: _mASS,
      },
    ],
    [
      0,
      {
        [_eQN]: `NextToken`,
        [_xN]: _nTe,
      },
    ],
  ]
);
export var MovingAddressStatus = struct(
  n0,
  _MASo,
  0,
  [_MSo, _PI],
  [
    [
      0,
      {
        [_eQN]: `MoveStatus`,
        [_xN]: _mSo,
      },
    ],
    [
      0,
      {
        [_eQN]: `PublicIp`,
        [_xN]: _pI,
      },
    ],
  ]
);
export var MovingAddressStatusSet = list(n0, _MASS, 0, [
  () => MovingAddressStatus,
  {
    [_xN]: _it,
  },
]);
export var DescribeMovingAddresses = op(
  n0,
  _DMA,
  0,
  () => DescribeMovingAddressesRequest,
  () => DescribeMovingAddressesResult
);
