// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CLE, _CLER, _CLERa, _cT, _ht, _lEI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CancelLifecycleExecutionRequest = struct(n0, _CLER, 0, [_lEI, _cT], [0, [0, 4]]);
export var CancelLifecycleExecutionResponse = struct(n0, _CLERa, 0, [_lEI], [0]);
export var CancelLifecycleExecution = op(
  n0,
  _CLE,
  {
    [_ht]: ["PUT", "/CancelLifecycleExecution", 200],
  },
  () => CancelLifecycleExecutionRequest,
  () => CancelLifecycleExecutionResponse
);
