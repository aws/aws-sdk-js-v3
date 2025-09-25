// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _cou, _CPAT, _CPATI, _CPDT, _CPDTI, _do, _PTC, _tL, _tr, n0 } from "./schemas_0";
import { TaskList } from "./schemas_20_Workflow";

/* eslint no-var: 0 */

export var CountPendingActivityTasksInput = struct(n0, _CPATI, 0, [_do, _tL], [0, () => TaskList]);
export var CountPendingDecisionTasksInput = struct(n0, _CPDTI, 0, [_do, _tL], [0, () => TaskList]);
export var PendingTaskCount = struct(n0, _PTC, 0, [_cou, _tr], [1, 2]);
export var CountPendingActivityTasks = op(
  n0,
  _CPAT,
  0,
  () => CountPendingActivityTasksInput,
  () => PendingTaskCount
);
export var CountPendingDecisionTasks = op(
  n0,
  _CPDT,
  0,
  () => CountPendingDecisionTasksInput,
  () => PendingTaskCount
);
