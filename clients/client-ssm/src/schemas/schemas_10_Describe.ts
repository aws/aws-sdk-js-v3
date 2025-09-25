// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _DMWS,
  _DMWSR,
  _DMWSRe,
  _ET,
  _Fi,
  _K,
  _MR,
  _N,
  _NT,
  _POF,
  _POFL,
  _RT,
  _SWE,
  _SWEc,
  _SWEL,
  _Ta,
  _Va,
  _WI,
  n0,
  Targets,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeMaintenanceWindowScheduleRequest = struct(
  n0,
  _DMWSR,
  0,
  [_WI, _Ta, _RT, _Fi, _MR, _NT],
  [0, () => Targets, 0, () => PatchOrchestratorFilterList, 1, 0]
);
export var DescribeMaintenanceWindowScheduleResult = struct(
  n0,
  _DMWSRe,
  0,
  [_SWE, _NT],
  [() => ScheduledWindowExecutionList, 0]
);
export var PatchOrchestratorFilter = struct(n0, _POF, 0, [_K, _Va], [0, 64 | 0]);
export var ScheduledWindowExecution = struct(n0, _SWEc, 0, [_WI, _N, _ET], [0, 0, 0]);
export var PatchOrchestratorFilterList = list(n0, _POFL, 0, () => PatchOrchestratorFilter);
export var PatchOrchestratorFilterValues = 64 | 0;

export var ScheduledWindowExecutionList = list(n0, _SWEL, 0, () => ScheduledWindowExecution);
export var DescribeMaintenanceWindowSchedule = op(
  n0,
  _DMWS,
  0,
  () => DescribeMaintenanceWindowScheduleRequest,
  () => DescribeMaintenanceWindowScheduleResult
);
