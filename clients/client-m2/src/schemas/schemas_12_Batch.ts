// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aI, _aSMA, _CBJE, _CBJER, _CBJERa, _eIx, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CancelBatchJobExecutionRequest = struct(n0, _CBJER, 0, [_aI, _eIx, _aSMA], [[0, 1], [0, 1], 0]);
export var CancelBatchJobExecutionResponse = struct(n0, _CBJERa, 0, [], []);
export var CancelBatchJobExecution = op(
  n0,
  _CBJE,
  {
    [_h]: ["POST", "/applications/{applicationId}/batch-job-executions/{executionId}/cancel", 200],
  },
  () => CancelBatchJobExecutionRequest,
  () => CancelBatchJobExecutionResponse
);
