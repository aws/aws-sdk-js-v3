// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _BLT,
  _BLTa,
  _BLTL,
  _CT,
  _DN,
  _LBLT,
  _LBLTR,
  _LBLTRi,
  _LUT,
  _MR,
  _NT,
  _RU,
  _TI,
  _TN,
  _TS,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BatchLoadTask = struct(n0, _BLT, 0, [_TI, _TS, _DN, _TN, _CT, _LUT, _RU], [0, 0, 0, 0, 4, 4, 4]);
export var ListBatchLoadTasksRequest = struct(n0, _LBLTR, 0, [_NT, _MR, _TS], [0, 1, 0]);
export var ListBatchLoadTasksResponse = struct(n0, _LBLTRi, 0, [_NT, _BLTa], [0, () => BatchLoadTaskList]);
export var BatchLoadTaskList = list(n0, _BLTL, 0, () => BatchLoadTask);
export var ListBatchLoadTasks = op(
  n0,
  _LBLT,
  0,
  () => ListBatchLoadTasksRequest,
  () => ListBatchLoadTasksResponse
);
