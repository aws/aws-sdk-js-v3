// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DFC, _DFCR, _FN, _h, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteFunctionConcurrencyRequest = struct(n0, _DFCR, 0, [_FN], [[0, 1]]);
export var DeleteFunctionConcurrency = op(
  n0,
  _DFC,
  {
    [_h]: ["DELETE", "/2017-10-31/functions/{FunctionName}/concurrency", 204],
  },
  () => DeleteFunctionConcurrencyRequest,
  () => Unit
);
