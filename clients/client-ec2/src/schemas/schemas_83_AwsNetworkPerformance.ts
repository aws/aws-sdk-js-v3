// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _D,
  _d,
  _DANPMS,
  _DANPMSi,
  _DANPMSR,
  _DANPMSRe,
  _DANPMSRi,
  _DANPMSRis,
  _DQ,
  _DQa,
  _DR,
  _DRa,
  _DRat,
  _dRSa,
  _EANPMS,
  _EANPMSR,
  _EANPMSRn,
  _ED,
  _eD,
  _eQN,
  _ETnd,
  _Fi,
  _Fil,
  _GANPD,
  _GANPDR,
  _GANPDRe,
  _I,
  _i,
  _it,
  _Met,
  _met,
  _MPe,
  _MPet,
  _mPS,
  _MR,
  _NTe,
  _nTe,
  _Ou,
  _ou,
  _pe,
  _Per,
  _S,
  _s,
  _SD,
  _sD,
  _SLub,
  _sSu,
  _ST,
  _Sta,
  _sta,
  _Stat,
  _stat,
  _Sub,
  _Subs,
  _V,
  _v,
  _xN,
  FilterList,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DataQuery = struct(n0, _DQ, 0, [_I, _S, _D, _Met, _Stat, _Per], [0, 0, 0, 0, 0, 0]);
export var DataResponse = struct(
  n0,
  _DRa,
  0,
  [_I, _S, _D, _Met, _Stat, _Per, _MPe],
  [
    [
      0,
      {
        [_eQN]: `Id`,
        [_xN]: _i,
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
        [_eQN]: `Metric`,
        [_xN]: _met,
      },
    ],
    [
      0,
      {
        [_eQN]: `Statistic`,
        [_xN]: _stat,
      },
    ],
    [
      0,
      {
        [_eQN]: `Period`,
        [_xN]: _pe,
      },
    ],
    [
      () => MetricPoints,
      {
        [_eQN]: `MetricPointSet`,
        [_xN]: _mPS,
      },
    ],
  ]
);
export var DescribeAwsNetworkPerformanceMetricSubscriptionsRequest = struct(
  n0,
  _DANPMSR,
  0,
  [_MR, _NTe, _Fi, _DR],
  [
    1,
    0,
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
    2,
  ]
);
export var DescribeAwsNetworkPerformanceMetricSubscriptionsResult = struct(
  n0,
  _DANPMSRe,
  0,
  [_NTe, _Sub],
  [
    [
      0,
      {
        [_eQN]: `NextToken`,
        [_xN]: _nTe,
      },
    ],
    [
      () => SubscriptionList,
      {
        [_eQN]: `SubscriptionSet`,
        [_xN]: _sSu,
      },
    ],
  ]
);
export var DisableAwsNetworkPerformanceMetricSubscriptionRequest = struct(
  n0,
  _DANPMSRi,
  0,
  [_S, _D, _Met, _Stat, _DR],
  [0, 0, 0, 0, 2]
);
export var DisableAwsNetworkPerformanceMetricSubscriptionResult = struct(
  n0,
  _DANPMSRis,
  0,
  [_Ou],
  [
    [
      2,
      {
        [_eQN]: `Output`,
        [_xN]: _ou,
      },
    ],
  ]
);
export var EnableAwsNetworkPerformanceMetricSubscriptionRequest = struct(
  n0,
  _EANPMSR,
  0,
  [_S, _D, _Met, _Stat, _DR],
  [0, 0, 0, 0, 2]
);
export var EnableAwsNetworkPerformanceMetricSubscriptionResult = struct(
  n0,
  _EANPMSRn,
  0,
  [_Ou],
  [
    [
      2,
      {
        [_eQN]: `Output`,
        [_xN]: _ou,
      },
    ],
  ]
);
export var GetAwsNetworkPerformanceDataRequest = struct(
  n0,
  _GANPDR,
  0,
  [_DQa, _ST, _ETnd, _MR, _NTe, _DR],
  [
    [
      () => DataQueries,
      {
        [_xN]: _DQ,
      },
    ],
    4,
    4,
    1,
    0,
    2,
  ]
);
export var GetAwsNetworkPerformanceDataResult = struct(
  n0,
  _GANPDRe,
  0,
  [_DRat, _NTe],
  [
    [
      () => DataResponses,
      {
        [_eQN]: `DataResponseSet`,
        [_xN]: _dRSa,
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
export var MetricPoint = struct(
  n0,
  _MPet,
  0,
  [_SD, _ED, _V, _Sta],
  [
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
      1,
      {
        [_eQN]: `Value`,
        [_xN]: _v,
      },
    ],
    [
      0,
      {
        [_eQN]: `Status`,
        [_xN]: _sta,
      },
    ],
  ]
);
export var Subscription = struct(
  n0,
  _Subs,
  0,
  [_S, _D, _Met, _Stat, _Per],
  [
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
        [_eQN]: `Metric`,
        [_xN]: _met,
      },
    ],
    [
      0,
      {
        [_eQN]: `Statistic`,
        [_xN]: _stat,
      },
    ],
    [
      0,
      {
        [_eQN]: `Period`,
        [_xN]: _pe,
      },
    ],
  ]
);
export var DataQueries = list(n0, _DQa, 0, () => DataQuery);
export var DataResponses = list(n0, _DRat, 0, [
  () => DataResponse,
  {
    [_xN]: _it,
  },
]);
export var MetricPoints = list(n0, _MPe, 0, [
  () => MetricPoint,
  {
    [_xN]: _it,
  },
]);
export var SubscriptionList = list(n0, _SLub, 0, [
  () => Subscription,
  {
    [_xN]: _it,
  },
]);
export var DescribeAwsNetworkPerformanceMetricSubscriptions = op(
  n0,
  _DANPMS,
  0,
  () => DescribeAwsNetworkPerformanceMetricSubscriptionsRequest,
  () => DescribeAwsNetworkPerformanceMetricSubscriptionsResult
);
export var DisableAwsNetworkPerformanceMetricSubscription = op(
  n0,
  _DANPMSi,
  0,
  () => DisableAwsNetworkPerformanceMetricSubscriptionRequest,
  () => DisableAwsNetworkPerformanceMetricSubscriptionResult
);
export var EnableAwsNetworkPerformanceMetricSubscription = op(
  n0,
  _EANPMS,
  0,
  () => EnableAwsNetworkPerformanceMetricSubscriptionRequest,
  () => EnableAwsNetworkPerformanceMetricSubscriptionResult
);
export var GetAwsNetworkPerformanceData = op(
  n0,
  _GANPD,
  0,
  () => GetAwsNetworkPerformanceDataRequest,
  () => GetAwsNetworkPerformanceDataResult
);
