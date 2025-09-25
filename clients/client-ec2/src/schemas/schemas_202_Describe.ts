// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AZ,
  _aZ,
  _AZI,
  _aZI,
  _DR,
  _dR,
  _DSPH,
  _DSPHR,
  _DSPHRe,
  _eQN,
  _eTn,
  _ETnd,
  _Fi,
  _Fil,
  _IT,
  _iT,
  _it,
  _ITnst,
  _MR,
  _mR,
  _NTe,
  _nTe,
  _PDr,
  _pDr,
  _PDro,
  _SPH,
  _SPHL,
  _sPHS,
  _SPp,
  _sPp,
  _ST,
  _sT,
  _Ti,
  _ti,
  _xN,
  FilterList,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeSpotPriceHistoryRequest = struct(
  n0,
  _DSPHR,
  0,
  [_AZI, _DR, _ST, _ETnd, _ITnst, _PDro, _Fi, _AZ, _MR, _NTe],
  [
    0,
    [
      2,
      {
        [_eQN]: `DryRun`,
        [_xN]: _dR,
      },
    ],
    [
      4,
      {
        [_eQN]: `StartTime`,
        [_xN]: _sT,
      },
    ],
    [
      4,
      {
        [_eQN]: `EndTime`,
        [_xN]: _eTn,
      },
    ],
    [
      64 | 0,
      {
        [_xN]: _IT,
      },
    ],
    [
      64 | 0,
      {
        [_xN]: _PDr,
      },
    ],
    [
      () => FilterList,
      {
        [_xN]: _Fil,
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
export var DescribeSpotPriceHistoryResult = struct(
  n0,
  _DSPHRe,
  0,
  [_NTe, _SPH],
  [
    [
      0,
      {
        [_eQN]: `NextToken`,
        [_xN]: _nTe,
      },
    ],
    [
      () => SpotPriceHistoryList,
      {
        [_eQN]: `SpotPriceHistorySet`,
        [_xN]: _sPHS,
      },
    ],
  ]
);
export var SpotPrice = struct(
  n0,
  _SPp,
  0,
  [_AZ, _AZI, _IT, _PDr, _SPp, _Ti],
  [
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
      0,
      {
        [_eQN]: `InstanceType`,
        [_xN]: _iT,
      },
    ],
    [
      0,
      {
        [_eQN]: `ProductDescription`,
        [_xN]: _pDr,
      },
    ],
    [
      0,
      {
        [_eQN]: `SpotPrice`,
        [_xN]: _sPp,
      },
    ],
    [
      4,
      {
        [_eQN]: `Timestamp`,
        [_xN]: _ti,
      },
    ],
  ]
);
export var InstanceTypeList = 64 | 0;

export var ProductDescriptionList = 64 | 0;

export var SpotPriceHistoryList = list(n0, _SPHL, 0, [
  () => SpotPrice,
  {
    [_xN]: _it,
  },
]);
export var DescribeSpotPriceHistory = op(
  n0,
  _DSPH,
  0,
  () => DescribeSpotPriceHistoryRequest,
  () => DescribeSpotPriceHistoryResult
);
