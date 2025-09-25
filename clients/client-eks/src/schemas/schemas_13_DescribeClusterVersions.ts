// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _cTl,
  _CVI,
  _CVL,
  _cVl,
  _cVlu,
  _DCV,
  _DCVR,
  _DCVRe,
  _dO,
  _dPV,
  _dV,
  _eOESD,
  _eOSSD,
  _hQ,
  _ht,
  _iA,
  _kPV,
  _mR,
  _nT,
  _rD,
  _s,
  _vS,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ClusterVersionInformation = struct(
  n0,
  _CVI,
  0,
  [_cVl, _cTl, _dPV, _dV, _rD, _eOSSD, _eOESD, _s, _vS, _kPV],
  [0, 0, 0, 2, 4, 4, 4, 0, 0, 0]
);
export var DescribeClusterVersionsRequest = struct(
  n0,
  _DCVR,
  0,
  [_cTl, _mR, _nT, _dO, _iA, _cVlu, _s, _vS],
  [
    [
      0,
      {
        [_hQ]: _cTl,
      },
    ],
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
    [
      2,
      {
        [_hQ]: _dO,
      },
    ],
    [
      2,
      {
        [_hQ]: _iA,
      },
    ],
    [
      64 | 0,
      {
        [_hQ]: _cVlu,
      },
    ],
    [
      0,
      {
        [_hQ]: _s,
      },
    ],
    [
      0,
      {
        [_hQ]: _vS,
      },
    ],
  ]
);
export var DescribeClusterVersionsResponse = struct(n0, _DCVRe, 0, [_nT, _cVlu], [0, () => ClusterVersionList]);
export var ClusterVersionList = list(n0, _CVL, 0, () => ClusterVersionInformation);
export var DescribeClusterVersions = op(
  n0,
  _DCV,
  {
    [_ht]: ["GET", "/cluster-versions", 200],
  },
  () => DescribeClusterVersionsRequest,
  () => DescribeClusterVersionsResponse
);
