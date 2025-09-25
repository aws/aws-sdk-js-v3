// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Act,
  _ASle,
  _CT,
  _CTA,
  _CTB,
  _DTA,
  _Ena,
  _EPv,
  _LMAH,
  _LMAHR,
  _LMAHRi,
  _LMAi,
  _LMAR,
  _LMARi,
  _LMT,
  _MAA,
  _MAH,
  _MAHL,
  _MAHS,
  _MAN,
  _MASL,
  _MASo,
  _MASon,
  _MDI,
  _MDIA,
  _MR,
  _MSN,
  _NT,
  _SBo,
  _SE,
  _SO,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListMonitoringAlertHistoryRequest = struct(
  n0,
  _LMAHR,
  0,
  [_MSN, _MAN, _SBo, _SO, _NT, _MR, _CTB, _CTA, _SE],
  [0, 0, 0, 0, 0, 1, 4, 4, 0]
);
export var ListMonitoringAlertHistoryResponse = struct(
  n0,
  _LMAHRi,
  0,
  [_MAH, _NT],
  [() => MonitoringAlertHistoryList, 0]
);
export var ListMonitoringAlertsRequest = struct(n0, _LMAR, 0, [_MSN, _NT, _MR], [0, 0, 1]);
export var ListMonitoringAlertsResponse = struct(n0, _LMARi, 0, [_MASo, _NT], [() => MonitoringAlertSummaryList, 0]);
export var ModelDashboardIndicatorAction = struct(n0, _MDIA, 0, [_Ena], [2]);
export var MonitoringAlertActions = struct(n0, _MAA, 0, [_MDI], [() => ModelDashboardIndicatorAction]);
export var MonitoringAlertHistorySummary = struct(n0, _MAHS, 0, [_MSN, _MAN, _CT, _ASle], [0, 0, 4, 0]);
export var MonitoringAlertSummary = struct(
  n0,
  _MASon,
  0,
  [_MAN, _CT, _LMT, _ASle, _DTA, _EPv, _Act],
  [0, 4, 4, 0, 1, 1, () => MonitoringAlertActions]
);
export var MonitoringAlertHistoryList = list(n0, _MAHL, 0, () => MonitoringAlertHistorySummary);
export var MonitoringAlertSummaryList = list(n0, _MASL, 0, () => MonitoringAlertSummary);
export var ListMonitoringAlertHistory = op(
  n0,
  _LMAH,
  0,
  () => ListMonitoringAlertHistoryRequest,
  () => ListMonitoringAlertHistoryResponse
);
export var ListMonitoringAlerts = op(
  n0,
  _LMAi,
  0,
  () => ListMonitoringAlertsRequest,
  () => ListMonitoringAlertsResponse
);
