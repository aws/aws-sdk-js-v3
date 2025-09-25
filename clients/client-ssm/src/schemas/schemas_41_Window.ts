// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AC,
  _DMWET,
  _DMWETR,
  _DMWETRe,
  _ETn,
  _Fi,
  _MR,
  _MWETI,
  _MWETIL,
  _NT,
  _SD,
  _St,
  _STt,
  _TA,
  _TAa,
  _TEI,
  _TTa,
  _WEI,
  _WETI,
  AlarmConfiguration,
  AlarmStateInformationList,
  n0,
} from "./schemas_0";
import { MaintenanceWindowFilterList } from "./schemas_58_Describe";

/* eslint no-var: 0 */

export var DescribeMaintenanceWindowExecutionTasksRequest = struct(
  n0,
  _DMWETR,
  0,
  [_WEI, _Fi, _MR, _NT],
  [0, () => MaintenanceWindowFilterList, 1, 0]
);
export var DescribeMaintenanceWindowExecutionTasksResult = struct(
  n0,
  _DMWETRe,
  0,
  [_WETI, _NT],
  [() => MaintenanceWindowExecutionTaskIdentityList, 0]
);
export var MaintenanceWindowExecutionTaskIdentity = struct(
  n0,
  _MWETI,
  0,
  [_WEI, _TEI, _St, _SD, _STt, _ETn, _TAa, _TTa, _AC, _TA],
  [0, 0, 0, 0, 4, 4, 0, 0, () => AlarmConfiguration, () => AlarmStateInformationList]
);
export var MaintenanceWindowExecutionTaskIdentityList = list(
  n0,
  _MWETIL,
  0,
  () => MaintenanceWindowExecutionTaskIdentity
);
export var DescribeMaintenanceWindowExecutionTasks = op(
  n0,
  _DMWET,
  0,
  () => DescribeMaintenanceWindowExecutionTasksRequest,
  () => DescribeMaintenanceWindowExecutionTasksResult
);
