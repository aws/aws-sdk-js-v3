// smithy-typescript generated code
import { list, map, op, sim, struct } from "@smithy/core/schema";

import {
  _AC,
  _ETn,
  _GMWET,
  _GMWETR,
  _GMWETRe,
  _MC,
  _ME,
  _MWTP,
  _MWTPL,
  _MWTPV,
  _MWTPVE,
  _MWTPVL,
  _NAo,
  _NC,
  _NE,
  _NTot,
  _Pr,
  _SD,
  _SR,
  _St,
  _STt,
  _TA,
  _TAa,
  _TEI,
  _TI,
  _TPa,
  _Ty,
  _Va,
  _WEI,
  AlarmConfiguration,
  AlarmStateInformationList,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var MaintenanceWindowTaskParameterValue = sim(n0, _MWTPV, 0, 8);
export var GetMaintenanceWindowExecutionTaskRequest = struct(n0, _GMWETR, 0, [_WEI, _TI], [0, 0]);
export var GetMaintenanceWindowExecutionTaskResult = struct(
  n0,
  _GMWETRe,
  0,
  [_WEI, _TEI, _TAa, _SR, _Ty, _TPa, _Pr, _MC, _ME, _St, _SD, _STt, _ETn, _AC, _TA],
  [
    0,
    0,
    0,
    0,
    0,
    [() => MaintenanceWindowTaskParametersList, 0],
    1,
    0,
    0,
    0,
    0,
    4,
    4,
    () => AlarmConfiguration,
    () => AlarmStateInformationList,
  ]
);
export var MaintenanceWindowTaskParameterValueExpression = struct(
  n0,
  _MWTPVE,
  8,
  [_Va],
  [[() => MaintenanceWindowTaskParameterValueList, 0]]
);
export var NotificationConfig = struct(n0, _NC, 0, [_NAo, _NE, _NTot], [0, 64 | 0, 0]);
export var MaintenanceWindowTaskParametersList = list(n0, _MWTPL, 8, [() => MaintenanceWindowTaskParameters, 0]);
export var MaintenanceWindowTaskParameterValueList = list(n0, _MWTPVL, 8, [
  () => MaintenanceWindowTaskParameterValue,
  0,
]);
export var NotificationEventList = 64 | 0;

export var MaintenanceWindowTaskParameters = map(
  n0,
  _MWTP,
  8,
  [0, 0],
  [() => MaintenanceWindowTaskParameterValueExpression, 0]
);
export var GetMaintenanceWindowExecutionTask = op(
  n0,
  _GMWET,
  0,
  () => GetMaintenanceWindowExecutionTaskRequest,
  () => GetMaintenanceWindowExecutionTaskResult
);
