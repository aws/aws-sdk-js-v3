// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CTE, _CTER, _CTERa, _TEA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CancelTaskExecutionRequest = struct(n0, _CTER, 0, [_TEA], [0]);
export var CancelTaskExecutionResponse = struct(n0, _CTERa, 0, [], []);
export var CancelTaskExecution = op(
  n0,
  _CTE,
  0,
  () => CancelTaskExecutionRequest,
  () => CancelTaskExecutionResponse
);
