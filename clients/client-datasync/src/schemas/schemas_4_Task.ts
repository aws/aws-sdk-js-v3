// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _DT,
  _DTR,
  _DTRe,
  _F,
  _LTE,
  _LTER,
  _LTERi,
  _LTi,
  _LTR,
  _LTRi,
  _MR,
  _N,
  _NT,
  _Op,
  _S,
  _TA,
  _Tas,
  _TE,
  _TEA,
  _TEL,
  _TELE,
  _TF,
  _TFa,
  _TL,
  _TLEa,
  _TM,
  _Va,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteTaskRequest = struct(n0, _DTR, 0, [_TA], [0]);
export var DeleteTaskResponse = struct(n0, _DTRe, 0, [], []);
export var ListTaskExecutionsRequest = struct(n0, _LTER, 0, [_TA, _MR, _NT], [0, 1, 0]);
export var ListTaskExecutionsResponse = struct(n0, _LTERi, 0, [_TE, _NT], [() => TaskExecutionList, 0]);
export var ListTasksRequest = struct(n0, _LTR, 0, [_MR, _NT, _F], [1, 0, () => TaskFilters]);
export var ListTasksResponse = struct(n0, _LTRi, 0, [_Tas, _NT], [() => TaskList, 0]);
export var TaskExecutionListEntry = struct(n0, _TELE, 0, [_TEA, _S, _TM], [0, 0, 0]);
export var TaskFilter = struct(n0, _TF, 0, [_N, _Va, _Op], [0, 64 | 0, 0]);
export var TaskListEntry = struct(n0, _TLEa, 0, [_TA, _S, _N, _TM], [0, 0, 0, 0]);
export var TaskExecutionList = list(n0, _TEL, 0, () => TaskExecutionListEntry);
export var TaskFilters = list(n0, _TFa, 0, () => TaskFilter);
export var TaskList = list(n0, _TL, 0, () => TaskListEntry);
export var DeleteTask = op(
  n0,
  _DT,
  0,
  () => DeleteTaskRequest,
  () => DeleteTaskResponse
);
export var ListTaskExecutions = op(
  n0,
  _LTE,
  0,
  () => ListTaskExecutionsRequest,
  () => ListTaskExecutionsResponse
);
export var ListTasks = op(
  n0,
  _LTi,
  0,
  () => ListTasksRequest,
  () => ListTasksResponse
);
