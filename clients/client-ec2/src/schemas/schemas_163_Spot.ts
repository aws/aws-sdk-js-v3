// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _b,
  _Bu,
  _Co,
  _co,
  _CSDS,
  _CSDSR,
  _CSDSRr,
  _DR,
  _dR,
  _DSDSe,
  _DSDSRe,
  _DSDSRes,
  _eQN,
  _Fa,
  _fa,
  _Me,
  _me,
  _OI,
  _oI,
  _Pre,
  _pre,
  _SDS,
  _sDS,
  _SISF,
  _St,
  _st,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateSpotDatafeedSubscriptionRequest = struct(
  n0,
  _CSDSR,
  0,
  [_DR, _Bu, _Pre],
  [
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
        [_eQN]: `Bucket`,
        [_xN]: _b,
      },
    ],
    [
      0,
      {
        [_eQN]: `Prefix`,
        [_xN]: _pre,
      },
    ],
  ]
);
export var CreateSpotDatafeedSubscriptionResult = struct(
  n0,
  _CSDSRr,
  0,
  [_SDS],
  [
    [
      () => SpotDatafeedSubscription,
      {
        [_eQN]: `SpotDatafeedSubscription`,
        [_xN]: _sDS,
      },
    ],
  ]
);
export var DescribeSpotDatafeedSubscriptionRequest = struct(
  n0,
  _DSDSRe,
  0,
  [_DR],
  [
    [
      2,
      {
        [_eQN]: `DryRun`,
        [_xN]: _dR,
      },
    ],
  ]
);
export var DescribeSpotDatafeedSubscriptionResult = struct(
  n0,
  _DSDSRes,
  0,
  [_SDS],
  [
    [
      () => SpotDatafeedSubscription,
      {
        [_eQN]: `SpotDatafeedSubscription`,
        [_xN]: _sDS,
      },
    ],
  ]
);
export var SpotDatafeedSubscription = struct(
  n0,
  _SDS,
  0,
  [_Bu, _Fa, _OI, _Pre, _St],
  [
    [
      0,
      {
        [_eQN]: `Bucket`,
        [_xN]: _b,
      },
    ],
    [
      () => SpotInstanceStateFault,
      {
        [_eQN]: `Fault`,
        [_xN]: _fa,
      },
    ],
    [
      0,
      {
        [_eQN]: `OwnerId`,
        [_xN]: _oI,
      },
    ],
    [
      0,
      {
        [_eQN]: `Prefix`,
        [_xN]: _pre,
      },
    ],
    [
      0,
      {
        [_eQN]: `State`,
        [_xN]: _st,
      },
    ],
  ]
);
export var SpotInstanceStateFault = struct(
  n0,
  _SISF,
  0,
  [_Co, _Me],
  [
    [
      0,
      {
        [_eQN]: `Code`,
        [_xN]: _co,
      },
    ],
    [
      0,
      {
        [_eQN]: `Message`,
        [_xN]: _me,
      },
    ],
  ]
);
export var CreateSpotDatafeedSubscription = op(
  n0,
  _CSDS,
  0,
  () => CreateSpotDatafeedSubscriptionRequest,
  () => CreateSpotDatafeedSubscriptionResult
);
export var DescribeSpotDatafeedSubscription = op(
  n0,
  _DSDSe,
  0,
  () => DescribeSpotDatafeedSubscriptionRequest,
  () => DescribeSpotDatafeedSubscriptionResult
);
