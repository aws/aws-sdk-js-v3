// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AZ,
  _aZ,
  _AZI,
  _aZI,
  _CBa,
  _CBap,
  _CBI,
  _cBI,
  _CBIa,
  _CBS,
  _cBS,
  _CBSa,
  _CBSap,
  _CBSS,
  _cBSS,
  _CD,
  _cD,
  _CRI,
  _cRI,
  _CRIa,
  _cRIS,
  _CRS,
  _CRSap,
  _CRSS,
  _cRSS,
  _DCBe,
  _DCBR,
  _DCBRe,
  _DCBS,
  _DCBSR,
  _DCBSRe,
  _DR,
  _ED,
  _eD,
  _eQN,
  _Fi,
  _Fil,
  _IS,
  _iS,
  _it,
  _MR,
  _NTe,
  _nTe,
  _SD,
  _sD,
  _St,
  _st,
  _T,
  _TAC,
  _tAC,
  _tC,
  _TCo,
  _tS,
  _TUC,
  _tUC,
  _UTl,
  _uTl,
  _xN,
  FilterList,
  n0,
  TagList,
} from "./schemas_0";
import { CapacityReservationIdSet } from "./schemas_244_Capacity";

/* eslint no-var: 0 */

export var CapacityBlock = struct(
  n0,
  _CBa,
  0,
  [_CBI, _UTl, _AZ, _AZI, _CRIa, _SD, _ED, _CD, _St, _T],
  [
    [
      0,
      {
        [_eQN]: `CapacityBlockId`,
        [_xN]: _cBI,
      },
    ],
    [
      0,
      {
        [_eQN]: `UltraserverType`,
        [_xN]: _uTl,
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
        [_eQN]: `AvailabilityZoneId`,
        [_xN]: _aZI,
      },
    ],
    [
      () => CapacityReservationIdSet,
      {
        [_eQN]: `CapacityReservationIdSet`,
        [_xN]: _cRIS,
      },
    ],
    [
      4,
      {
        [_eQN]: `StartDate`,
        [_xN]: _sD,
      },
    ],
    [
      4,
      {
        [_eQN]: `EndDate`,
        [_xN]: _eD,
      },
    ],
    [
      4,
      {
        [_eQN]: `CreateDate`,
        [_xN]: _cD,
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
      () => TagList,
      {
        [_eQN]: `TagSet`,
        [_xN]: _tS,
      },
    ],
  ]
);
export var CapacityBlockStatus = struct(
  n0,
  _CBS,
  0,
  [_CBI, _IS, _TCo, _TAC, _TUC, _CRS],
  [
    [
      0,
      {
        [_eQN]: `CapacityBlockId`,
        [_xN]: _cBI,
      },
    ],
    [
      0,
      {
        [_eQN]: `InterconnectStatus`,
        [_xN]: _iS,
      },
    ],
    [
      1,
      {
        [_eQN]: `TotalCapacity`,
        [_xN]: _tC,
      },
    ],
    [
      1,
      {
        [_eQN]: `TotalAvailableCapacity`,
        [_xN]: _tAC,
      },
    ],
    [
      1,
      {
        [_eQN]: `TotalUnavailableCapacity`,
        [_xN]: _tUC,
      },
    ],
    [
      () => CapacityReservationStatusSet,
      {
        [_eQN]: `CapacityReservationStatusSet`,
        [_xN]: _cRSS,
      },
    ],
  ]
);
export var CapacityReservationStatus = struct(
  n0,
  _CRSap,
  0,
  [_CRI, _TCo, _TAC, _TUC],
  [
    [
      0,
      {
        [_eQN]: `CapacityReservationId`,
        [_xN]: _cRI,
      },
    ],
    [
      1,
      {
        [_eQN]: `TotalCapacity`,
        [_xN]: _tC,
      },
    ],
    [
      1,
      {
        [_eQN]: `TotalAvailableCapacity`,
        [_xN]: _tAC,
      },
    ],
    [
      1,
      {
        [_eQN]: `TotalUnavailableCapacity`,
        [_xN]: _tUC,
      },
    ],
  ]
);
export var DescribeCapacityBlocksRequest = struct(
  n0,
  _DCBR,
  0,
  [_CBIa, _NTe, _MR, _Fi, _DR],
  [
    [
      () => CapacityBlockIds,
      {
        [_xN]: _CBI,
      },
    ],
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
export var DescribeCapacityBlocksResult = struct(
  n0,
  _DCBRe,
  0,
  [_CBap, _NTe],
  [
    [
      () => CapacityBlockSet,
      {
        [_eQN]: `CapacityBlockSet`,
        [_xN]: _cBS,
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
export var DescribeCapacityBlockStatusRequest = struct(
  n0,
  _DCBSR,
  0,
  [_CBIa, _NTe, _MR, _Fi, _DR],
  [
    [
      () => CapacityBlockIds,
      {
        [_xN]: _CBI,
      },
    ],
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
export var DescribeCapacityBlockStatusResult = struct(
  n0,
  _DCBSRe,
  0,
  [_CBSa, _NTe],
  [
    [
      () => CapacityBlockStatusSet,
      {
        [_eQN]: `CapacityBlockStatusSet`,
        [_xN]: _cBSS,
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
export var CapacityBlockIds = list(n0, _CBIa, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var CapacityBlockSet = list(n0, _CBSap, 0, [
  () => CapacityBlock,
  {
    [_xN]: _it,
  },
]);
export var CapacityBlockStatusSet = list(n0, _CBSS, 0, [
  () => CapacityBlockStatus,
  {
    [_xN]: _it,
  },
]);
export var CapacityReservationStatusSet = list(n0, _CRSS, 0, [
  () => CapacityReservationStatus,
  {
    [_xN]: _it,
  },
]);
export var DescribeCapacityBlocks = op(
  n0,
  _DCBe,
  0,
  () => DescribeCapacityBlocksRequest,
  () => DescribeCapacityBlocksResult
);
export var DescribeCapacityBlockStatus = op(
  n0,
  _DCBS,
  0,
  () => DescribeCapacityBlockStatusRequest,
  () => DescribeCapacityBlockStatusResult
);
