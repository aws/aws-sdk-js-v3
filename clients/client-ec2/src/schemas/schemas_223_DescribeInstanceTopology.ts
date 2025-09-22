// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AZ,
  _aZ,
  _CBI,
  _cBI,
  _DIT,
  _DITR,
  _DITRe,
  _DR,
  _eQN,
  _Fi,
  _Fil,
  _GN,
  _gN,
  _GNr,
  _II,
  _iI,
  _IIn,
  _Ins,
  _iSns,
  _ISnstan,
  _IT,
  _iT,
  _it,
  _ITnstanc,
  _MR,
  _NN,
  _NNL,
  _nNS,
  _NTe,
  _nTe,
  _xN,
  _ZI,
  _zI,
  FilterList,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeInstanceTopologyRequest = struct(
  n0,
  _DITR,
  0,
  [_DR, _NTe, _MR, _IIn, _GNr, _Fi],
  [
    2,
    0,
    1,
    [
      64 | 0,
      {
        [_xN]: _II,
      },
    ],
    [
      64 | 0,
      {
        [_xN]: _GN,
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
export var DescribeInstanceTopologyResult = struct(
  n0,
  _DITRe,
  0,
  [_Ins, _NTe],
  [
    [
      () => InstanceSet,
      {
        [_eQN]: `InstanceSet`,
        [_xN]: _iSns,
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
export var InstanceTopology = struct(
  n0,
  _ITnstanc,
  0,
  [_II, _IT, _GN, _NN, _AZ, _ZI, _CBI],
  [
    [
      0,
      {
        [_eQN]: `InstanceId`,
        [_xN]: _iI,
      },
    ],
    [
      0,
      {
        [_eQN]: `InstanceType`,
        [_xN]: _iT,
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
      () => NetworkNodesList,
      {
        [_eQN]: `NetworkNodeSet`,
        [_xN]: _nNS,
      },
    ],
    [
      0,
      {
        [_eQN]: `AvailabilityZone`,
        [_xN]: _aZ,
      },
    ],
    [
      0,
      {
        [_eQN]: `ZoneId`,
        [_xN]: _zI,
      },
    ],
    [
      0,
      {
        [_eQN]: `CapacityBlockId`,
        [_xN]: _cBI,
      },
    ],
  ]
);
export var DescribeInstanceTopologyGroupNameSet = 64 | 0;

export var DescribeInstanceTopologyInstanceIdSet = 64 | 0;

export var InstanceSet = list(n0, _ISnstan, 0, [
  () => InstanceTopology,
  {
    [_xN]: _it,
  },
]);
export var NetworkNodesList = list(n0, _NNL, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var DescribeInstanceTopology = op(
  n0,
  _DIT,
  0,
  () => DescribeInstanceTopologyRequest,
  () => DescribeInstanceTopologyResult
);
