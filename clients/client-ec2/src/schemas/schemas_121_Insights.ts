// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CDre,
  _cDre,
  _CNIP,
  _CNIPR,
  _CNIPRr,
  _CT,
  _D,
  _d,
  _dA,
  _dAe,
  _DAes,
  _DAest,
  _DIe,
  _dIe,
  _DNIP,
  _DNIPes,
  _DNIPR,
  _DNIPRe,
  _DNIPRes,
  _DNIPResc,
  _DPe,
  _dPes,
  _dPR,
  _DPRe,
  _DR,
  _eQN,
  _FAD,
  _fAD,
  _FAS,
  _fAS,
  _Fi,
  _Fil,
  _FP,
  _fP,
  _FPR,
  _it,
  _MR,
  _NIP,
  _nIP,
  _NIPA,
  _nIPA,
  _NIPe,
  _NIPI,
  _nIPI,
  _NIPIet,
  _NIPIL,
  _NIPL,
  _nIPS,
  _NTe,
  _nTe,
  _PFa,
  _Pr,
  _pr,
  _PRF,
  _RFPR,
  _S,
  _s,
  _sA,
  _SAo,
  _sAo,
  _SAou,
  _SIo,
  _sIo,
  _sPR,
  _SPRo,
  _T,
  _TP,
  _tP,
  _TS,
  _tS,
  _TSa,
  _xN,
  FilterList,
  n0,
  TagList,
  TagSpecificationList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateNetworkInsightsPathRequest = struct(
  n0,
  _CNIPR,
  0,
  [_SIo, _DIe, _S, _D, _Pr, _DPe, _TS, _DR, _CT, _FAS, _FAD],
  [
    0,
    0,
    0,
    0,
    0,
    1,
    [
      () => TagSpecificationList,
      {
        [_xN]: _TSa,
      },
    ],
    2,
    [0, 4],
    () => PathRequestFilter,
    () => PathRequestFilter,
  ]
);
export var CreateNetworkInsightsPathResult = struct(
  n0,
  _CNIPRr,
  0,
  [_NIP],
  [
    [
      () => NetworkInsightsPath,
      {
        [_eQN]: `NetworkInsightsPath`,
        [_xN]: _nIP,
      },
    ],
  ]
);
export var DeleteNetworkInsightsPathRequest = struct(n0, _DNIPR, 0, [_DR, _NIPI], [2, 0]);
export var DeleteNetworkInsightsPathResult = struct(
  n0,
  _DNIPRe,
  0,
  [_NIPI],
  [
    [
      0,
      {
        [_eQN]: `NetworkInsightsPathId`,
        [_xN]: _nIPI,
      },
    ],
  ]
);
export var DescribeNetworkInsightsPathsRequest = struct(
  n0,
  _DNIPRes,
  0,
  [_NIPIet, _Fi, _MR, _DR, _NTe],
  [
    [
      () => NetworkInsightsPathIdList,
      {
        [_xN]: _NIPI,
      },
    ],
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
    1,
    2,
    0,
  ]
);
export var DescribeNetworkInsightsPathsResult = struct(
  n0,
  _DNIPResc,
  0,
  [_NIPe, _NTe],
  [
    [
      () => NetworkInsightsPathList,
      {
        [_eQN]: `NetworkInsightsPathSet`,
        [_xN]: _nIPS,
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
export var FilterPortRange = struct(
  n0,
  _FPR,
  0,
  [_FP, _TP],
  [
    [
      1,
      {
        [_eQN]: `FromPort`,
        [_xN]: _fP,
      },
    ],
    [
      1,
      {
        [_eQN]: `ToPort`,
        [_xN]: _tP,
      },
    ],
  ]
);
export var NetworkInsightsPath = struct(
  n0,
  _NIP,
  0,
  [_NIPI, _NIPA, _CDre, _S, _D, _SAo, _DAes, _SIo, _DIe, _Pr, _DPe, _T, _FAS, _FAD],
  [
    [
      0,
      {
        [_eQN]: `NetworkInsightsPathId`,
        [_xN]: _nIPI,
      },
    ],
    [
      0,
      {
        [_eQN]: `NetworkInsightsPathArn`,
        [_xN]: _nIPA,
      },
    ],
    [
      4,
      {
        [_eQN]: `CreatedDate`,
        [_xN]: _cDre,
      },
    ],
    [
      0,
      {
        [_eQN]: `Source`,
        [_xN]: _s,
      },
    ],
    [
      0,
      {
        [_eQN]: `Destination`,
        [_xN]: _d,
      },
    ],
    [
      0,
      {
        [_eQN]: `SourceArn`,
        [_xN]: _sA,
      },
    ],
    [
      0,
      {
        [_eQN]: `DestinationArn`,
        [_xN]: _dA,
      },
    ],
    [
      0,
      {
        [_eQN]: `SourceIp`,
        [_xN]: _sIo,
      },
    ],
    [
      0,
      {
        [_eQN]: `DestinationIp`,
        [_xN]: _dIe,
      },
    ],
    [
      0,
      {
        [_eQN]: `Protocol`,
        [_xN]: _pr,
      },
    ],
    [
      1,
      {
        [_eQN]: `DestinationPort`,
        [_xN]: _dPes,
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
      () => PathFilter,
      {
        [_eQN]: `FilterAtSource`,
        [_xN]: _fAS,
      },
    ],
    [
      () => PathFilter,
      {
        [_eQN]: `FilterAtDestination`,
        [_xN]: _fAD,
      },
    ],
  ]
);
export var PathFilter = struct(
  n0,
  _PFa,
  0,
  [_SAou, _SPRo, _DAest, _DPRe],
  [
    [
      0,
      {
        [_eQN]: `SourceAddress`,
        [_xN]: _sAo,
      },
    ],
    [
      () => FilterPortRange,
      {
        [_eQN]: `SourcePortRange`,
        [_xN]: _sPR,
      },
    ],
    [
      0,
      {
        [_eQN]: `DestinationAddress`,
        [_xN]: _dAe,
      },
    ],
    [
      () => FilterPortRange,
      {
        [_eQN]: `DestinationPortRange`,
        [_xN]: _dPR,
      },
    ],
  ]
);
export var PathRequestFilter = struct(
  n0,
  _PRF,
  0,
  [_SAou, _SPRo, _DAest, _DPRe],
  [0, () => RequestFilterPortRange, 0, () => RequestFilterPortRange]
);
export var RequestFilterPortRange = struct(n0, _RFPR, 0, [_FP, _TP], [1, 1]);
export var NetworkInsightsPathIdList = list(n0, _NIPIL, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var NetworkInsightsPathList = list(n0, _NIPL, 0, [
  () => NetworkInsightsPath,
  {
    [_xN]: _it,
  },
]);
export var CreateNetworkInsightsPath = op(
  n0,
  _CNIP,
  0,
  () => CreateNetworkInsightsPathRequest,
  () => CreateNetworkInsightsPathResult
);
export var DeleteNetworkInsightsPath = op(
  n0,
  _DNIP,
  0,
  () => DeleteNetworkInsightsPathRequest,
  () => DeleteNetworkInsightsPathResult
);
export var DescribeNetworkInsightsPaths = op(
  n0,
  _DNIPes,
  0,
  () => DescribeNetworkInsightsPathsRequest,
  () => DescribeNetworkInsightsPathsResult
);
