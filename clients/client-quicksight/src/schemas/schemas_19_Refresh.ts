// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AAI,
  _Ar,
  _CIr,
  _CIRr,
  _CIRre,
  _CRS,
  _CRSR,
  _CRSRr,
  _DOM,
  _DOW,
  _DRSe,
  _DRSRes,
  _DRSResc,
  _DSI,
  _h,
  _II,
  _Int,
  _ISn,
  _ITn,
  _LRS,
  _LRSR,
  _LRSRi,
  _RF,
  _RI,
  _ROD,
  _RS,
  _RSe,
  _RTef,
  _SADT,
  _Sc,
  _SFc,
  _SI,
  _SROE,
  _St,
  _Ti,
  _TOTD,
  _URS,
  _URSR,
  _URSRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateIngestionRequest = struct(n0, _CIRr, 0, [_DSI, _II, _AAI, _ITn], [[0, 1], [0, 1], [0, 1], 0]);
export var CreateIngestionResponse = struct(n0, _CIRre, 0, [_Ar, _II, _ISn, _RI, _St], [0, 0, 0, 0, [1, 32]]);
export var CreateRefreshScheduleRequest = struct(
  n0,
  _CRSR,
  0,
  [_DSI, _AAI, _Sc],
  [[0, 1], [0, 1], () => RefreshSchedule]
);
export var CreateRefreshScheduleResponse = struct(n0, _CRSRr, 0, [_St, _RI, _SI, _Ar], [[1, 32], 0, 0, 0]);
export var DescribeRefreshScheduleRequest = struct(
  n0,
  _DRSRes,
  0,
  [_AAI, _DSI, _SI],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var DescribeRefreshScheduleResponse = struct(
  n0,
  _DRSResc,
  0,
  [_RSe, _St, _RI, _Ar],
  [() => RefreshSchedule, [1, 32], 0, 0]
);
export var ListRefreshSchedulesRequest = struct(
  n0,
  _LRSR,
  0,
  [_AAI, _DSI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var ListRefreshSchedulesResponse = struct(n0, _LRSRi, 0, [_RS, _St, _RI], [() => RefreshSchedules, [1, 32], 0]);
export var RefreshFrequency = struct(n0, _RF, 0, [_Int, _ROD, _Ti, _TOTD], [0, () => ScheduleRefreshOnEntity, 0, 0]);
export var RefreshSchedule = struct(n0, _RSe, 0, [_SI, _SFc, _SADT, _RTef, _Ar], [0, () => RefreshFrequency, 4, 0, 0]);
export var ScheduleRefreshOnEntity = struct(n0, _SROE, 0, [_DOW, _DOM], [0, 0]);
export var UpdateRefreshScheduleRequest = struct(
  n0,
  _URSR,
  0,
  [_DSI, _AAI, _Sc],
  [[0, 1], [0, 1], () => RefreshSchedule]
);
export var UpdateRefreshScheduleResponse = struct(n0, _URSRp, 0, [_St, _RI, _SI, _Ar], [[1, 32], 0, 0, 0]);
export var RefreshSchedules = list(n0, _RS, 0, () => RefreshSchedule);
export var CreateIngestion = op(
  n0,
  _CIr,
  {
    [_h]: ["PUT", "/accounts/{AwsAccountId}/data-sets/{DataSetId}/ingestions/{IngestionId}", 200],
  },
  () => CreateIngestionRequest,
  () => CreateIngestionResponse
);
export var CreateRefreshSchedule = op(
  n0,
  _CRS,
  {
    [_h]: ["POST", "/accounts/{AwsAccountId}/data-sets/{DataSetId}/refresh-schedules", 200],
  },
  () => CreateRefreshScheduleRequest,
  () => CreateRefreshScheduleResponse
);
export var DescribeRefreshSchedule = op(
  n0,
  _DRSe,
  {
    [_h]: ["GET", "/accounts/{AwsAccountId}/data-sets/{DataSetId}/refresh-schedules/{ScheduleId}", 200],
  },
  () => DescribeRefreshScheduleRequest,
  () => DescribeRefreshScheduleResponse
);
export var ListRefreshSchedules = op(
  n0,
  _LRS,
  {
    [_h]: ["GET", "/accounts/{AwsAccountId}/data-sets/{DataSetId}/refresh-schedules", 200],
  },
  () => ListRefreshSchedulesRequest,
  () => ListRefreshSchedulesResponse
);
export var UpdateRefreshSchedule = op(
  n0,
  _URS,
  {
    [_h]: ["PUT", "/accounts/{AwsAccountId}/data-sets/{DataSetId}/refresh-schedules", 200],
  },
  () => UpdateRefreshScheduleRequest,
  () => UpdateRefreshScheduleResponse
);
