// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CT,
  _CTA,
  _CTB,
  _DTA,
  _EN,
  _EPv,
  _LMS,
  _LMSR,
  _LMSRi,
  _LMT,
  _LMTA,
  _LMTB,
  _MAN,
  _MJDN,
  _MR,
  _MSA,
  _MSN,
  _MSS,
  _MSSL,
  _MSSo,
  _MSSon,
  _MTE,
  _MTo,
  _NCa,
  _NT,
  _SBo,
  _SE,
  _SO,
  _UMA,
  _UMAR,
  _UMARp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListMonitoringSchedulesRequest = struct(
  n0,
  _LMSR,
  0,
  [_EN, _SBo, _SO, _NT, _MR, _NCa, _CTB, _CTA, _LMTB, _LMTA, _SE, _MJDN, _MTE],
  [0, 0, 0, 0, 1, 0, 4, 4, 4, 4, 0, 0, 0]
);
export var ListMonitoringSchedulesResponse = struct(
  n0,
  _LMSRi,
  0,
  [_MSSo, _NT],
  [() => MonitoringScheduleSummaryList, 0]
);
export var MonitoringScheduleSummary = struct(
  n0,
  _MSSon,
  0,
  [_MSN, _MSA, _CT, _LMT, _MSS, _EN, _MJDN, _MTo],
  [0, 0, 4, 4, 0, 0, 0, 0]
);
export var UpdateMonitoringAlertRequest = struct(n0, _UMAR, 0, [_MSN, _MAN, _DTA, _EPv], [0, 0, 1, 1]);
export var UpdateMonitoringAlertResponse = struct(n0, _UMARp, 0, [_MSA, _MAN], [0, 0]);
export var MonitoringScheduleSummaryList = list(n0, _MSSL, 0, () => MonitoringScheduleSummary);
export var ListMonitoringSchedules = op(
  n0,
  _LMS,
  0,
  () => ListMonitoringSchedulesRequest,
  () => ListMonitoringSchedulesResponse
);
export var UpdateMonitoringAlert = op(
  n0,
  _UMA,
  0,
  () => UpdateMonitoringAlertRequest,
  () => UpdateMonitoringAlertResponse
);
