// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AZ,
  _aZ,
  _DEG,
  _DEGR,
  _DEGRe,
  _DR,
  _EG,
  _EGH,
  _eGH,
  _EGI,
  _eGI,
  _EGIl,
  _EGIS,
  _EGS,
  _eGS,
  _EGSl,
  _eGSl,
  _EGT,
  _eGT,
  _eQN,
  _Fi,
  _Fil,
  _II,
  _iI,
  _it,
  _MR,
  _mR,
  _NTe,
  _nTe,
  _Sta,
  _sta,
  _T,
  _tS,
  _xN,
  FilterList,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeElasticGpusRequest = struct(
  n0,
  _DEGR,
  0,
  [_EGI, _DR, _Fi, _MR, _NTe],
  [
    [
      () => ElasticGpuIdSet,
      {
        [_xN]: _EGIl,
      },
    ],
    2,
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
    1,
    0,
  ]
);
export var DescribeElasticGpusResult = struct(
  n0,
  _DEGRe,
  0,
  [_EGS, _MR, _NTe],
  [
    [
      () => ElasticGpuSet,
      {
        [_eQN]: `ElasticGpuSet`,
        [_xN]: _eGS,
      },
    ],
    [
      1,
      {
        [_eQN]: `MaxResults`,
        [_xN]: _mR,
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
export var ElasticGpuHealth = struct(
  n0,
  _EGH,
  0,
  [_Sta],
  [
    [
      0,
      {
        [_eQN]: `Status`,
        [_xN]: _sta,
      },
    ],
  ]
);
export var ElasticGpus = struct(
  n0,
  _EG,
  0,
  [_EGIl, _AZ, _EGT, _EGH, _EGSl, _II, _T],
  [
    [
      0,
      {
        [_eQN]: `ElasticGpuId`,
        [_xN]: _eGI,
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
        [_eQN]: `ElasticGpuType`,
        [_xN]: _eGT,
      },
    ],
    [
      () => ElasticGpuHealth,
      {
        [_eQN]: `ElasticGpuHealth`,
        [_xN]: _eGH,
      },
    ],
    [
      0,
      {
        [_eQN]: `ElasticGpuState`,
        [_xN]: _eGSl,
      },
    ],
    [
      0,
      {
        [_eQN]: `InstanceId`,
        [_xN]: _iI,
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
export var ElasticGpuIdSet = list(n0, _EGIS, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var ElasticGpuSet = list(n0, _EGS, 0, [
  () => ElasticGpus,
  {
    [_xN]: _it,
  },
]);
export var DescribeElasticGpus = op(
  n0,
  _DEG,
  0,
  () => DescribeElasticGpusRequest,
  () => DescribeElasticGpusResult
);
