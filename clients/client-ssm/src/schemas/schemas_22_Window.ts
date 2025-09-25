// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CMWE,
  _CMWER,
  _CMWERa,
  _DMWE,
  _DMWER,
  _DMWERe,
  _ETn,
  _Fi,
  _GMWE,
  _GMWER,
  _GMWERe,
  _MR,
  _MWE,
  _MWEL,
  _NT,
  _SD,
  _St,
  _STt,
  _TIa,
  _WE,
  _WEI,
  _WI,
  n0,
} from "./schemas_0";
import { MaintenanceWindowFilterList } from "./schemas_58_Describe";

/* eslint no-var: 0 */

export var CancelMaintenanceWindowExecutionRequest = struct(n0, _CMWER, 0, [_WEI], [0]);
export var CancelMaintenanceWindowExecutionResult = struct(n0, _CMWERa, 0, [_WEI], [0]);
export var DescribeMaintenanceWindowExecutionsRequest = struct(
  n0,
  _DMWER,
  0,
  [_WI, _Fi, _MR, _NT],
  [0, () => MaintenanceWindowFilterList, 1, 0]
);
export var DescribeMaintenanceWindowExecutionsResult = struct(
  n0,
  _DMWERe,
  0,
  [_WE, _NT],
  [() => MaintenanceWindowExecutionList, 0]
);
export var GetMaintenanceWindowExecutionRequest = struct(n0, _GMWER, 0, [_WEI], [0]);
export var GetMaintenanceWindowExecutionResult = struct(
  n0,
  _GMWERe,
  0,
  [_WEI, _TIa, _St, _SD, _STt, _ETn],
  [0, 64 | 0, 0, 0, 4, 4]
);
export var MaintenanceWindowExecution = struct(n0, _MWE, 0, [_WI, _WEI, _St, _SD, _STt, _ETn], [0, 0, 0, 0, 4, 4]);
export var MaintenanceWindowExecutionList = list(n0, _MWEL, 0, () => MaintenanceWindowExecution);
export var MaintenanceWindowExecutionTaskIdList = 64 | 0;

export var CancelMaintenanceWindowExecution = op(
  n0,
  _CMWE,
  0,
  () => CancelMaintenanceWindowExecutionRequest,
  () => CancelMaintenanceWindowExecutionResult
);
export var DescribeMaintenanceWindowExecutions = op(
  n0,
  _DMWE,
  0,
  () => DescribeMaintenanceWindowExecutionsRequest,
  () => DescribeMaintenanceWindowExecutionsResult
);
export var GetMaintenanceWindowExecution = op(
  n0,
  _GMWE,
  0,
  () => GetMaintenanceWindowExecutionRequest,
  () => GetMaintenanceWindowExecutionResult
);
