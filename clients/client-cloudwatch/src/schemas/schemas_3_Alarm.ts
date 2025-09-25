// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  InvalidFormatFault as __InvalidFormatFault,
  LimitExceededFault as __LimitExceededFault,
  ResourceNotFound as __ResourceNotFound,
} from "../models/index";
import {
  _AA,
  _AAl,
  _AC,
  _ACA,
  _ACI,
  _ACl,
  _ACUT,
  _ADl,
  _AE,
  _AHI,
  _AHIl,
  _AN,
  _ANl,
  _ANP,
  _AP,
  _aQE,
  _AR,
  _AS,
  _ASB,
  _ASEP,
  _ASR,
  _ASWP,
  _AT,
  _ATl,
  _c,
  _CA,
  _CAo,
  _CAom,
  _CI,
  _CO,
  _COAN,
  _D,
  _DAA,
  _DAAI,
  _DAC,
  _DACI,
  _DACO,
  _DAe,
  _DAes,
  _DAFM,
  _DAFMI,
  _DAFMO,
  _DAH,
  _DAHI,
  _DAHO,
  _DAI,
  _DAIe,
  _DAO,
  _DTA,
  _e,
  _EAA,
  _EAAI,
  _ED,
  _ELSCP,
  _EP,
  _ESv,
  _ESx,
  _HD,
  _hE,
  _HIT,
  _HS,
  _IDA,
  _IFF,
  _LEF,
  _m,
  _MA,
  _MAe,
  _Me,
  _MN,
  _MR,
  _N,
  _NT,
  _OKA,
  _P,
  _PCA,
  _PCAI,
  _PMA,
  _PMAI,
  _POAN,
  _RNF,
  _SAS,
  _SASI,
  _SB,
  _SD,
  _SR,
  _SRD,
  _St,
  _STT,
  _SUT,
  _SV,
  _T,
  _Ta,
  _Th,
  _TMD,
  _TMI,
  _U,
  n0,
  Unit,
} from "./schemas_0";
import { TagList } from "./schemas_1_Put";
import { Dimensions, MetricDataQueries } from "./schemas_4_Metric";

/* eslint no-var: 0 */

export var AlarmContributor = struct(n0, _AC, 0, [_CI, _CA, _SR, _STT], [0, 128 | 0, 0, 4]);
export var AlarmHistoryItem = struct(
  n0,
  _AHI,
  0,
  [_AN, _ACI, _AT, _T, _HIT, _HS, _HD, _ACA],
  [0, 0, 0, 4, 0, 0, 0, 128 | 0]
);
export var CompositeAlarm = struct(
  n0,
  _CAo,
  0,
  [_AE, _AA, _AAl, _ACUT, _ADl, _AN, _AR, _IDA, _OKA, _SR, _SRD, _SUT, _SV, _STT, _ASB, _ASR, _AS, _ASWP, _ASEP],
  [2, 64 | 0, 0, 4, 0, 0, 0, 64 | 0, 64 | 0, 0, 0, 4, 0, 4, 0, 0, 0, 1, 1]
);
export var DeleteAlarmsInput = struct(n0, _DAI, 0, [_ANl], [64 | 0]);
export var DescribeAlarmContributorsInput = struct(n0, _DACI, 0, [_AN, _NT], [0, 0]);
export var DescribeAlarmContributorsOutput = struct(n0, _DACO, 0, [_ACl, _NT], [() => AlarmContributors, 0]);
export var DescribeAlarmHistoryInput = struct(
  n0,
  _DAHI,
  0,
  [_AN, _ACI, _ATl, _HIT, _SD, _ED, _MR, _NT, _SB],
  [0, 0, 64 | 0, 0, 4, 4, 1, 0, 0]
);
export var DescribeAlarmHistoryOutput = struct(n0, _DAHO, 0, [_AHIl, _NT], [() => AlarmHistoryItems, 0]);
export var DescribeAlarmsForMetricInput = struct(
  n0,
  _DAFMI,
  0,
  [_MN, _N, _St, _ESx, _D, _P, _U],
  [0, 0, 0, 0, () => Dimensions, 1, 0]
);
export var DescribeAlarmsForMetricOutput = struct(n0, _DAFMO, 0, [_MA], [() => MetricAlarms]);
export var DescribeAlarmsInput = struct(
  n0,
  _DAIe,
  0,
  [_ANl, _ANP, _ATl, _COAN, _POAN, _SV, _AP, _MR, _NT],
  [64 | 0, 0, 64 | 0, 0, 0, 0, 0, 1, 0]
);
export var DescribeAlarmsOutput = struct(
  n0,
  _DAO,
  0,
  [_CAom, _MA, _NT],
  [() => CompositeAlarms, () => MetricAlarms, 0]
);
export var DisableAlarmActionsInput = struct(n0, _DAAI, 0, [_ANl], [64 | 0]);
export var EnableAlarmActionsInput = struct(n0, _EAAI, 0, [_ANl], [64 | 0]);
export var InvalidFormatFault = error(
  n0,
  _IFF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidFormat`, 400],
  },
  [_m],
  [0],

  __InvalidFormatFault
);
export var LimitExceededFault = error(
  n0,
  _LEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`LimitExceeded`, 400],
  },
  [_m],
  [0],

  __LimitExceededFault
);
export var MetricAlarm = struct(
  n0,
  _MAe,
  0,
  [
    _AN,
    _AAl,
    _ADl,
    _ACUT,
    _AE,
    _OKA,
    _AA,
    _IDA,
    _SV,
    _SR,
    _SRD,
    _SUT,
    _MN,
    _N,
    _St,
    _ESx,
    _D,
    _P,
    _U,
    _EP,
    _DTA,
    _Th,
    _CO,
    _TMD,
    _ELSCP,
    _Me,
    _TMI,
    _ESv,
    _STT,
  ],
  [
    0,
    0,
    0,
    4,
    2,
    64 | 0,
    64 | 0,
    64 | 0,
    0,
    0,
    0,
    4,
    0,
    0,
    0,
    0,
    () => Dimensions,
    1,
    0,
    1,
    1,
    1,
    0,
    0,
    0,
    () => MetricDataQueries,
    0,
    0,
    4,
  ]
);
export var PutCompositeAlarmInput = struct(
  n0,
  _PCAI,
  0,
  [_AE, _AA, _ADl, _AN, _AR, _IDA, _OKA, _Ta, _AS, _ASWP, _ASEP],
  [2, 64 | 0, 0, 0, 0, 64 | 0, 64 | 0, () => TagList, 0, 1, 1]
);
export var PutMetricAlarmInput = struct(
  n0,
  _PMAI,
  0,
  [_AN, _ADl, _AE, _OKA, _AA, _IDA, _MN, _N, _St, _ESx, _D, _P, _U, _EP, _DTA, _Th, _CO, _TMD, _ELSCP, _Me, _Ta, _TMI],
  [
    0,
    0,
    2,
    64 | 0,
    64 | 0,
    64 | 0,
    0,
    0,
    0,
    0,
    () => Dimensions,
    1,
    0,
    1,
    1,
    1,
    0,
    0,
    0,
    () => MetricDataQueries,
    () => TagList,
    0,
  ]
);
export var ResourceNotFound = error(
  n0,
  _RNF,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`ResourceNotFound`, 404],
  },
  [_m],
  [0],

  __ResourceNotFound
);
export var SetAlarmStateInput = struct(n0, _SASI, 0, [_AN, _SV, _SR, _SRD], [0, 0, 0, 0]);
export var AlarmContributors = list(n0, _ACl, 0, () => AlarmContributor);
export var AlarmHistoryItems = list(n0, _AHIl, 0, () => AlarmHistoryItem);
export var AlarmNames = 64 | 0;

export var AlarmTypes = 64 | 0;

export var CompositeAlarms = list(n0, _CAom, 0, () => CompositeAlarm);
export var MetricAlarms = list(n0, _MA, 0, () => MetricAlarm);
export var ResourceList = 64 | 0;

export var ContributorAttributes = 128 | 0;

export var DeleteAlarms = op(
  n0,
  _DAe,
  0,
  () => DeleteAlarmsInput,
  () => Unit
);
export var DescribeAlarmContributors = op(
  n0,
  _DAC,
  0,
  () => DescribeAlarmContributorsInput,
  () => DescribeAlarmContributorsOutput
);
export var DescribeAlarmHistory = op(
  n0,
  _DAH,
  0,
  () => DescribeAlarmHistoryInput,
  () => DescribeAlarmHistoryOutput
);
export var DescribeAlarms = op(
  n0,
  _DAes,
  0,
  () => DescribeAlarmsInput,
  () => DescribeAlarmsOutput
);
export var DescribeAlarmsForMetric = op(
  n0,
  _DAFM,
  0,
  () => DescribeAlarmsForMetricInput,
  () => DescribeAlarmsForMetricOutput
);
export var DisableAlarmActions = op(
  n0,
  _DAA,
  0,
  () => DisableAlarmActionsInput,
  () => Unit
);
export var EnableAlarmActions = op(
  n0,
  _EAA,
  0,
  () => EnableAlarmActionsInput,
  () => Unit
);
export var PutCompositeAlarm = op(
  n0,
  _PCA,
  0,
  () => PutCompositeAlarmInput,
  () => Unit
);
export var PutMetricAlarm = op(
  n0,
  _PMA,
  0,
  () => PutMetricAlarmInput,
  () => Unit
);
export var SetAlarmState = op(
  n0,
  _SAS,
  0,
  () => SetAlarmStateInput,
  () => Unit
);
