// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AMC,
  _Ar,
  _Co,
  _CPS,
  _CPSR,
  _CPSRr,
  _DAAES,
  _DV,
  _DVy,
  _ET,
  _GPS,
  _GPSR,
  _GPSRe,
  _h,
  _I,
  _lOAMC,
  _lOPS,
  _LPS,
  _LPSR,
  _LPSRi,
  _MR,
  _N,
  _NT,
  _O,
  _PCN,
  _PCr,
  _PR,
  _PS,
  _R,
  _RAES,
  _RC,
  _RPC,
  _RR,
  _RWDS,
  _SI,
  _ST,
  _STt,
  _TSRW,
  _TST,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AvailMatchingCriteria = struct(n0, _AMC, 0, [_DV, _O], [0, 0]);
export var CreatePrefetchScheduleRequest = struct(
  n0,
  _CPSR,
  0,
  [_Co, _N, _PCN, _R, _RPC, _ST, _SI],
  [() => PrefetchConsumption, [0, 1], [0, 1], () => PrefetchRetrieval, () => RecurringPrefetchConfiguration, 0, 0]
);
export var CreatePrefetchScheduleResponse = struct(
  n0,
  _CPSRr,
  0,
  [_Ar, _Co, _N, _PCN, _R, _RPC, _ST, _SI],
  [0, () => PrefetchConsumption, 0, 0, () => PrefetchRetrieval, () => RecurringPrefetchConfiguration, 0, 0]
);
export var GetPrefetchScheduleRequest = struct(
  n0,
  _GPSR,
  0,
  [_N, _PCN],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetPrefetchScheduleResponse = struct(
  n0,
  _GPSRe,
  0,
  [_Ar, _Co, _N, _PCN, _R, _ST, _RPC, _SI],
  [0, () => PrefetchConsumption, 0, 0, () => PrefetchRetrieval, 0, () => RecurringPrefetchConfiguration, 0]
);
export var ListPrefetchSchedulesRequest = struct(n0, _LPSR, 0, [_MR, _NT, _PCN, _ST, _SI], [1, 0, [0, 1], 0, 0]);
export var ListPrefetchSchedulesResponse = struct(n0, _LPSRi, 0, [_I, _NT], [() => __listOfPrefetchSchedule, 0]);
export var PrefetchConsumption = struct(n0, _PCr, 0, [_AMC, _ET, _STt], [() => __listOfAvailMatchingCriteria, 7, 7]);
export var PrefetchRetrieval = struct(
  n0,
  _PR,
  0,
  [_DVy, _ET, _STt, _TST, _TSRW],
  [128 | 0, 7, 7, 0, () => TrafficShapingRetrievalWindow]
);
export var PrefetchSchedule = struct(
  n0,
  _PS,
  0,
  [_Ar, _Co, _N, _PCN, _R, _ST, _RPC, _SI],
  [0, () => PrefetchConsumption, 0, 0, () => PrefetchRetrieval, 0, () => RecurringPrefetchConfiguration, 0]
);
export var RecurringConsumption = struct(n0, _RC, 0, [_RAES, _AMC], [1, () => __listOfAvailMatchingCriteria]);
export var RecurringPrefetchConfiguration = struct(
  n0,
  _RPC,
  0,
  [_STt, _ET, _RC, _RR],
  [7, 7, () => RecurringConsumption, () => RecurringRetrieval]
);
export var RecurringRetrieval = struct(
  n0,
  _RR,
  0,
  [_DVy, _DAAES, _TST, _TSRW],
  [128 | 0, 1, 0, () => TrafficShapingRetrievalWindow]
);
export var TrafficShapingRetrievalWindow = struct(n0, _TSRW, 0, [_RWDS], [1]);
export var __listOfAvailMatchingCriteria = list(n0, _lOAMC, 0, () => AvailMatchingCriteria);
export var __listOfPrefetchSchedule = list(n0, _lOPS, 0, () => PrefetchSchedule);
export var CreatePrefetchSchedule = op(
  n0,
  _CPS,
  {
    [_h]: ["POST", "/prefetchSchedule/{PlaybackConfigurationName}/{Name}", 200],
  },
  () => CreatePrefetchScheduleRequest,
  () => CreatePrefetchScheduleResponse
);
export var GetPrefetchSchedule = op(
  n0,
  _GPS,
  {
    [_h]: ["GET", "/prefetchSchedule/{PlaybackConfigurationName}/{Name}", 200],
  },
  () => GetPrefetchScheduleRequest,
  () => GetPrefetchScheduleResponse
);
export var ListPrefetchSchedules = op(
  n0,
  _LPS,
  {
    [_h]: ["POST", "/prefetchSchedule/{PlaybackConfigurationName}", 200],
  },
  () => ListPrefetchSchedulesRequest,
  () => ListPrefetchSchedulesResponse
);
