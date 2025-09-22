// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _LQE, _LQEI, _LQEO, _MR, _NT, _QEI, _QEIu, _SQEIt, _SQEOt, _SQEt, _WG, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListQueryExecutionsInput = struct(n0, _LQEI, 0, [_NT, _MR, _WG], [0, 1, 0]);
export var ListQueryExecutionsOutput = struct(n0, _LQEO, 0, [_QEI, _NT], [64 | 0, 0]);
export var StopQueryExecutionInput = struct(n0, _SQEIt, 0, [_QEIu], [[0, 4]]);
export var StopQueryExecutionOutput = struct(n0, _SQEOt, 0, [], []);
export var QueryExecutionIdList = 64 | 0;

export var ListQueryExecutions = op(
  n0,
  _LQE,
  0,
  () => ListQueryExecutionsInput,
  () => ListQueryExecutionsOutput
);
export var StopQueryExecution = op(
  n0,
  _SQEt,
  2,
  () => StopQueryExecutionInput,
  () => StopQueryExecutionOutput
);
